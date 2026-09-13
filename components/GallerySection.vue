<script setup lang="ts">
const gallery = [
  { src: '/pics/gallery/1.jpg', caption: 'Szuter – odcinek polny', alt: 'Peugeot 208 Rally2 RallyZone na szutrowym odcinku polnym, widok z przodu' },
  { src: '/pics/gallery/1-2.jpg', caption: 'Szuter – jazda z pędem', alt: 'Peugeot 208 Rally2 RallyZone w pędzie na szutrze' },
  { src: '/pics/gallery/1-5.jpg', caption: 'Szuter – na odcinku', alt: 'Peugeot 208 Rally2 RallyZone na szutrze z unoszącym się pyłem' },
  { src: '/pics/gallery/1-7.jpg', caption: 'Szuter – przy serwisie', alt: 'Peugeot 208 Rally2 RallyZone mija namiot serwisowy na szutrze' },
  { src: '/pics/gallery/1-9.jpg', caption: 'Szuter – pył na odcinku', alt: 'Peugeot 208 Rally2 RallyZone w chmurze pyłu na odcinku szutrowym' },
  { src: '/pics/gallery/1-13.jpg', caption: 'Szuter – za kierownicą', alt: 'Peugeot 208 Rally2 RallyZone z boku, kierowca w kasku na szutrze' },
  { src: '/pics/gallery/1-15.jpg', caption: 'Szuter – nad krawędzią', alt: 'Peugeot 208 Rally2 RallyZone na krawędzi szutrowego odcinka' },
  { src: '/pics/gallery/1-18.jpg', caption: 'Szuter – otwarty teren', alt: 'Peugeot 208 Rally2 RallyZone na otwartym szutrze z smugą pyłu' },
  { src: '/pics/gallery/1-3.jpg', caption: 'Szuter – odcinek treningowy', alt: 'Peugeot 208 Rally2 RallyZone podczas jazdy na odcinku szutrowym' },
  { src: '/pics/gallery/1-4.jpg', caption: 'Szuter – pęd na polu', alt: 'Biały Peugeot 208 Rally2 RallyZone na drodze szutrowej' },
  { src: '/pics/gallery/1-6.jpg', caption: 'Szuter – odcinek gruntowy', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym' },
  { src: '/pics/gallery/1-8.jpg', caption: 'Szuter – droga gruntowa', alt: 'Peugeot 208 Rally2 RallyZone na szutrowej drodze' },
  { src: '/pics/gallery/1-10.jpg', caption: 'Szuter – między polami', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym między polami' },
  { src: '/pics/gallery/1-11.jpg', caption: 'Szuter – zakręt', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym, widok z boku' },
  { src: '/pics/gallery/1-12.jpg', caption: 'Szuter – jazda terenowa', alt: 'Peugeot 208 Rally2 RallyZone podczas jazdy terenowej' },
  { src: '/pics/gallery/1-14.jpg', caption: 'Szuter – odcinek RallyZone', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym' },
  { src: '/pics/gallery/1-16.jpg', caption: 'Szuter – obok trasy', alt: 'Peugeot 208 Rally2 RallyZone na drodze gruntowej obok innych aut' },
  { src: '/pics/gallery/1-17.jpg', caption: 'Szuter – odcinek polny', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym' },
  { src: '/pics/gallery/1-19.jpg', caption: 'Szuter – w pyle', alt: 'Peugeot 208 Rally2 RallyZone podczas jazdy na szutrze' },
  { src: '/pics/gallery/1-20.jpg', caption: 'Szuter – równolegle do drogi', alt: 'Peugeot 208 Rally2 RallyZone na odcinku szutrowym' },
]

const thumbs = gallery.slice(0, 8)

const isOpen = ref(false)
const index = ref<number | null>(null)
const currentSrc = computed(() => (index.value != null ? gallery[index.value].src : ''))
const currentAlt = computed(() => (index.value != null ? gallery[index.value].alt : ''))
const currentCaption = computed(() => (index.value != null ? gallery[index.value].caption : ''))

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
    const focusIndex = Math.min(Math.max(toRestore, 0), thumbs.length - 1)
    thumbRefs.value[focusIndex]?.focus()
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

watch(index, (i) => {
  if (i == null) return
  const n = (i + 1) % gallery.length
  const p = (i - 1 + gallery.length) % gallery.length
  ;[n, p].forEach(idx => {
    const img = new Image()
    img.src = gallery[idx].src
  })
})

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <section id="gallery" class="mx-auto max-w-7xl scroll-mt-24 px-6 py-16" aria-labelledby="gallery-title">
    <div class="mb-8 max-w-2xl">
      <h2 id="gallery-title" class="text-3xl font-bold">Galeria RallyZone</h2>
      <p class="mt-3 text-lg text-slate-700">Peugeot 208 Rally2 na szutrze. Kliknij zdjęcie, żeby zobaczyć resztę.</p>
    </div>

    <div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      <button
        v-for="(item, i) in thumbs"
        :key="item.src"
        :ref="el => (thumbRefs[i] = el as HTMLButtonElement)"
        type="button"
        class="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none"
        :aria-label="`Otwórz: ${item.caption}`"
        @click="open(i)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        >
        <span class="absolute inset-x-0 bottom-0 bg-black/65 px-2 py-1.5 text-left text-sm text-white">
          {{ item.caption }}
        </span>
      </button>
    </div>

    <p class="mt-6">
      <button
        type="button"
        class="font-semibold text-[#ec1c24] underline decoration-2 underline-offset-4 hover:text-[#c4161d]"
        @click="open(8)"
      >
        Więcej zdjęć z odcinka
      </button>
    </p>

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
          class="fixed inset-0 z-[80]"
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          @click.self="close"
        >
          <div class="absolute inset-0 bg-black/70" @click="close" />

          <div class="absolute inset-0 flex flex-col items-center justify-center p-4" @click="close">
            <button
              type="button"
              class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70 md:left-4 md:p-3"
              aria-label="Poprzednie zdjęcie"
              @click.stop="prev"
            >
              ‹
            </button>

            <img
              v-if="currentSrc"
              :src="currentSrc"
              :alt="currentAlt"
              class="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              decoding="async"
            >
            <p v-if="currentCaption" class="mt-3 text-center text-white">{{ currentCaption }}</p>

            <button
              type="button"
              class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70 md:right-4 md:p-3"
              aria-label="Następne zdjęcie"
              @click.stop="next"
            >
              ›
            </button>

            <button
              ref="closeBtn"
              type="button"
              class="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70 md:top-4 md:right-4 md:p-3"
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
