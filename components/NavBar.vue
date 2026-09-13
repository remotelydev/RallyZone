<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      (scrolled || isOpen) ? 'bg-white shadow-sm' : 'bg-transparent'
    ]"
  >
    <nav class="relative z-50 flex items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-6" aria-label="Główna nawigacja">
      <a href="/" class="flex-shrink-0">
        <span class="logo">RALLYZONE</span>
      </a>

      <ul
        class="hidden sm:flex md:content-baseline gap-8 text-lg transition-colors duration-300"
        :class="(scrolled || isOpen) ? 'text-black' : 'text-white'"
      >
        <li>
          <a href="#gallery" class="menu-link hover:opacity-70">Galeria</a>
        </li>
        <li>
          <a href="#contact" class="menu-link hover:opacity-70">Kontakt</a>
        </li>
        <li>
          <a
            href="tel:+48501101994"
            class="menu-link"
            :class="scrolled ? 'bg-black text-white' : ''"
          >Zadzwoń</a>
        </li>
      </ul>

      <div class="flex items-center gap-1 sm:hidden" :class="(scrolled || isOpen) ? 'text-black' : 'text-white'">
        <a
          href="tel:+48501101994"
          class="menu-link text-base"
          :class="(scrolled || isOpen) ? 'bg-black text-white' : ''"
        >Zadzwoń</a>
        <button
          type="button"
          class="menu-link"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? 'Zamknij menu' : 'Otwórz menu'"
          @click="isOpen = !isOpen"
        >
          <span class="sr-only">{{ isOpen ? 'Zamknij menu' : 'Otwórz menu' }}</span>
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path v-if="!isOpen" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-if="isOpen"
      id="mobile-menu"
      class="sm:hidden border-t border-black/10 bg-white px-4 py-4 text-black"
    >
      <ul class="flex flex-col gap-2 text-lg">
        <li>
          <a href="#gallery" class="menu-link" @click="close">Galeria</a>
        </li>
        <li>
          <a href="#contact" class="menu-link" @click="close">Kontakt</a>
        </li>
      </ul>
    </div>
  </header>

  <!-- Sentinel: visible only at very top -->
  <div ref="topSentinel" class="h-px w-px" />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)
const topSentinel = ref(null)
let io

const close = () => { isOpen.value = false }

watch(isOpen, v => { document.body.style.overflow = v ? 'hidden' : '' })

const onHash = () => close()

onMounted(() => {
  io = new IntersectionObserver(
    ([entry]) => { scrolled.value = !entry.isIntersecting },
    { root: null, threshold: 1 }
  )
  if (topSentinel.value) io.observe(topSentinel.value)

  window.addEventListener('hashchange', onHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHash)
  if (io && topSentinel.value) io.unobserve(topSentinel.value)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.logo {
  paint-order: stroke fill;
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 1.75rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.16;
  color: white;
  background: #ec1c24;
  -webkit-text-stroke: 6px black;
  -webkit-text-fill-color: white;
  transform: skewX(-16.1deg);
  letter-spacing: -0.01ch;
}

@media (min-width: 640px) {
  .logo {
    font-size: 3rem;
    -webkit-text-stroke: 10px black;
  }
}

.menu-link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}
</style>
