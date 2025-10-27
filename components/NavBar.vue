<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
      (scrolled || isOpen) ? 'bg-white shadow-sm' : 'bg-transparent'
    ]"
  >
    <nav class="relative z-50 flex items-center justify-between px-6 py-4 md:py-6">
      <a href="#" class="flex-shrink-0">
        <h1 class="logo">RALLYZONE</h1>
      </a>

      <ul
        class="flex md:content-baseline gap-8 text-lg transition-colors duration-300"
        :class="(scrolled || isOpen) ? 'text-black' : 'text-white'"
      >
        <li class="hidden sm:list-item py-2"><a href="#gallery" class="py-4 hover:opacity-70">Galeria</a></li>
        <li class="hidden sm:list-item py-2"><a href="#contact" class="hover:opacity-70">Kontakt</a></li>
        <li class="list-item" :class="scrolled ? 'py-0' : 'py-2'"><button type="button" :class="[
          scrolled ? 'px-4 py-2 bg-black text-white rounded' : ''
        ]"><a href="tel:123123123">Zadzwoń</a></button></li>
      </ul>
    </nav>
  </header>

  <!-- Sentinel: visible only at very top -->
  <div ref="topSentinel" class="h-px w-px"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)
const topSentinel = ref(null)
let io

const toggle = () => { isOpen.value = !isOpen.value }
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
  paint-order: stroke fill;
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.16;
  color: white;
  background: #ec1c24;
  -webkit-text-stroke: 10px black;
  -webkit-text-fill-color: white;
  transform: skewX(-16.1deg);
  letter-spacing: -0.01ch;
}
</style>
