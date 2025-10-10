<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const modules = import.meta.glob('~/assets/pics/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>

const gallery = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

// state
const isOpen = ref(false)
const index = ref<number | null>(null)
const currentSrc = computed(() => (index.value != null ? gallery[index.value] : ''))

// focus management
const thumbRefs = ref<HTMLButtonElement[]>([])
const closeBtn = ref<HTMLButtonElement | null>(null)
let lastClicked = -1

function open(i: number) {
  lastClicked = i
  index.value = i
  isOpen.value = true
  lockScroll(true)
  nextTick(() => closeBtn.value?.focus())
}

function close() {
  console.log('close')
  isOpen.value = false
  const toRestore = lastClicked
  index.value = null
  lockScroll(false)
  nextTick(() => {
    if (toRestore > -1) thumbRefs.value[toRestore]?.focus()
  })
}

function next() {
  if (index.value == null) return
  index.value = (index.value + 1) % gallery.length
}

function prev() {
  if (index.value == null) return
  index.value = (index.value - 1 + gallery.length) % gallery.length
}

function onKey(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') { e.preventDefault(); close() }
  else if (e.key === 'ArrowRight') { e.preventDefault(); next() }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
}

function lockScroll(lock: boolean) {
  if (process.client) {
    const el = document.documentElement
    if (lock) el.style.overflow = 'hidden'
    else el.style.overflow = ''
  }
}

// preload neighbors to avoid flicker
watch(index, (i) => {
  if (i == null) return
  const n = (i + 1) % gallery.length
  const p = (i - 1 + gallery.length) % gallery.length
  ;[n, p].forEach(idx => {
    const img = new Image()
    img.src = gallery[idx]
  })
})

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

const ROWS = 2
const THUMB_H = 200  // tweak; make responsive if you want
const cols = computed(() => Math.ceil(gallery.length / ROWS))

const gridStyle = computed(() => ({
  // sizing vars
  '--thumb-h': `${THUMB_H}px`,
  '--thumb-w': `calc(var(--thumb-h) * 4 / 3)`,
  // templates (NOTE: numeric repeat counts, no CSS var in the count)
  gridTemplateRows: `repeat(${ROWS}, var(--thumb-h))`,
  gridTemplateColumns: `repeat(${cols.value}, var(--thumb-w))`,
}))
</script>

<template>
  <section id="gallery" class="mx-auto max-w-7xl px-6 py-16">
    <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      <button
        v-for="(src, i) in gallery"
        :key="src"
        type="button"
        class="group block relative rounded-xl overflow-hidden focus:outline-none"
        @click="open(i)"
        :aria-label="`Open image ${i+1} of ${gallery.length}`"
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
      >
        <div class="pt-[66%]" />
        <img
          :src="src"
          :alt="`Gallery image ${i+1}`"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        >
      </button>
    </div> -->
<div
  class="grid grid-flow-row overflow-x-auto overscroll-x-contain gap-3 md:gap-4 snap-x snap-mandatory pe-4
         scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]"
  :style="gridStyle"
>
      <button
        v-for="(src, i) in gallery"
        :key="src"
        type="button"
        class="group relative rounded-xl overflow-hidden focus:outline-none w-full h-full snap-start"
        @click="open(i)"
        :aria-label="`Open image ${i+1} of ${gallery.length}`"
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
      >
        <img
          :src="src"
          :alt="`Gallery image ${i+1}`"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy" decoding="async"
        >
      </button>
    </div>

    <!-- Modal / Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          @click.self="close"
        >
          <!-- backdrop -->
          <div class="absolute inset-0 bg-black/70" @click="close" />

          <!-- content -->
          <div class="absolute inset-0 flex items-center justify-center p-4" @click="close">
            <!-- prev -->
            <button
              type="button"
              class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full p-2 md:p-3 bg-black/50 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
              @click.stop="prev"
              aria-label="Previous image"
            >
              ‹
            </button>

            <!-- image -->
            <img
              v-if="currentSrc"
              :src="currentSrc"
              alt=""
              class="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              decoding="async"
            >

            <!-- next -->
            <button
              type="button"
              class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full p-2 md:p-3 bg-black/50 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
              @click.stop="next"
              aria-label="Next image"
            >
              ›
            </button>

            <!-- close -->
            <button
              ref="closeBtn"
              type="button"
              class="absolute top-2 right-2 md:top-4 md:right-4 rounded-full p-2 md:p-3 bg-black/50 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
              @click="close"
              aria-label="Close (Esc)"
            >
              ✕
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
