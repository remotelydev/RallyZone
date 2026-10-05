<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { gallery as photos, galleryFullWidth } from '~/data/gallery'

const gallery = photos.map(p => `/img/gallery/${p.file}`)

// Full-size view is resized too: WebP instead of the 2048px JPEG originals.
const img = useImage()
const fullSrc = (src: string) => img(src, { width: galleryFullWidth, format: 'webp' })

// state
const isOpen = ref(false)
const index = ref<number | null>(null)
const currentSrc = computed(() => (index.value != null ? fullSrc(gallery[index.value]) : ''))

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
    const preload = new Image()
    preload.src = fullSrc(gallery[idx])
  })
})

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

// Show a first batch, the rest on demand. All thumbnails stay in the HTML (hidden),
// so the static build generates every size and hidden lazy images are not downloaded.
const INITIAL = 8
const showAll = ref(false)
const visibleCount = computed(() => (showAll.value ? gallery.length : INITIAL))
</script>

<template>
  <section id="gallery" class="bg-white py-20 md:py-28" aria-labelledby="gallery-title">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
    <div class="mb-10 max-w-2xl">
      <p class="stage-label">OS 4 · Galeria</p>
      <h2 id="gallery-title" class="mt-3 text-4xl md:text-6xl">Galeria RallyZone</h2>
      <p class="mt-4 text-lg text-ink/75">Zobacz rajdową atmosferę, nasze samochody i przygotowania do startów.</p>
    </div>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
      <button
        v-for="(src, i) in gallery"
        :key="src"
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
        type="button"
        class="group relative block aspect-[4/3] overflow-hidden bg-ink focus:outline-none"
        :class="{ hidden: i >= visibleCount }"
        :aria-label="`Otwórz zdjęcie ${i + 1} z ${gallery.length}`"
        @click="open(i)"
      >
        <NuxtImg
          :src="src"
          :alt="photos[i].alt"
          class="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-80"
          width="320"
          height="240"
          densities="x1 x2"
          fit="cover"
          format="webp"
          loading="lazy"
          decoding="async"
        />
        <span class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
      </button>
    </div>
    <div v-if="!showAll" class="mt-8 text-center">
      <button type="button" class="btn btn-primary" @click="showAll = true">
        <span>Pokaż wszystkie zdjęcia ({{ gallery.length }})</span>
      </button>
    </div>
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
              :alt="index != null ? photos[index].alt : ''"
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
