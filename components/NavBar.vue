<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      (scrolled || isOpen) ? 'bg-ink shadow-lg shadow-black/20' : 'bg-gradient-to-b from-black/60 to-transparent'
    ]"
  >
    <nav class="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Główna nawigacja">
      <a href="#" class="flex-shrink-0" aria-label="RallyZone – strona główna">
        <span class="logo">RallyZone</span>
      </a>

      <ul class="hidden items-center gap-2 text-white md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="menu-link">{{ link.label }}</a>
        </li>
        <li class="ms-4">
          <a href="tel:+48501101994" class="btn btn-primary"><span>Zadzwoń</span></a>
        </li>
      </ul>

      <div class="flex items-center gap-2 md:hidden">
        <a href="tel:+48501101994" class="btn btn-primary !min-h-11 !px-4 !text-base"><span>Zadzwoń</span></a>
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center text-white"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? 'Zamknij menu' : 'Otwórz menu'"
          @click="isOpen = !isOpen"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path v-if="!isOpen" d="M3 6h18M3 12h18M3 18h18" />
            <path v-else d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
    </nav>

    <ul
      v-show="isOpen"
      id="mobile-menu"
      class="border-t border-line bg-ink px-4 pb-6 pt-2 text-white md:hidden"
    >
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="block py-3 font-display text-2xl font-extrabold uppercase italic" @click="close">{{ link.label }}</a>
      </li>
    </ul>
  </header>

  <!-- Sentinel: visible only at very top -->
  <div ref="topSentinel" class="h-px w-px" />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { href: '#offer', label: 'Oferta' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#contact', label: 'Kontakt' },
]

const isOpen = ref(false)
const scrolled = ref(false)
const topSentinel = ref(null)
let io

const close  = () => { isOpen.value = false }

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
  display: inline-block;
  padding: 0.1em 0.45em 0.05em;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #fff;
  background: var(--color-brand);
  transform: skewX(-16deg);
  text-shadow: 2px 2px 0 #000;
}

@media (min-width: 768px) {
  .logo {
    font-size: 2.5rem;
  }
}

.menu-link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.5rem 0.875rem;
  font-family: var(--font-display);
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 0.03em;
  transition: color 150ms;
}

.menu-link:hover {
  color: var(--color-brand);
}
</style>
