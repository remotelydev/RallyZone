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
const dialogRef = ref<HTMLElement | null>(null)
let lastClicked = -1

function open(i: number) {
  lastClicked = i
  index.value = i
  isOpen.value = true
  lockScroll(true)
  nextTick(() => closeBtn.value?.focus())
}

function close() {
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
  if (e.key === 'Tab') {
    const focusable = dialogRef.value?.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
    if (!focusable?.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  } else if (e.key === 'Escape') { e.preventDefault(); close() }
  else if (e.key === 'ArrowRight') { e.preventDefault(); next() }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
}

function lockScroll(lock: boolean) {
  if (import.meta.client) {
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
  <section id="gallery" class="mx-auto max-w-7xl px-6 py-16" aria-labelledby="gallery-title">
    <div class="mb-8 max-w-2xl">
      <h2 id="gallery-title" class="text-3xl font-bold">Galeria RallyZone</h2>
      <p class="mt-3 text-lg text-slate-700">Zobacz rajdową atmosferę, nasze samochody i przygotowania do startów.</p>
    </div>
    <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      <button
        v-for="(src, i) in gallery"
        :key="src"
        type="button"
        class="group block relative rounded-xl overflow-hidden focus:outline-none"
        @click="open(i)"
        :aria-label="`Otwórz zdjęcie ${i + 1} z ${gallery.length}`"
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
      >
        <div class="pt-[66%]" />
        <img
          :src="src"
          :alt="`RallyZone – zdjęcie z galerii rajdowej ${i + 1}`"
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
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
        type="button"
        class="group relative rounded-xl overflow-hidden focus:outline-none w-full h-full snap-start"
        :aria-label="`Otwórz zdjęcie ${i + 1} z ${gallery.length}`"
        @click="open(i)"
      >
        <img
          :src="src"
          :alt="`RallyZone – zdjęcie z galerii rajdowej ${i + 1}`"
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
          ref="dialogRef"
          class="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
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
              aria-label="Poprzednie zdjęcie"
              @click.stop="prev"
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
              aria-label="Następne zdjęcie"
              @click.stop="next"
            >
              ›
            </button>

            <!-- close -->
            <button
              ref="closeBtn"
              type="button"
              class="absolute top-2 right-2 md:top-4 md:right-4 rounded-full p-2 md:p-3 bg-black/50 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label="Zamknij podgląd (Esc)"
              @click="close"
            >
              ✕
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
