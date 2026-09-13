<template>
  <header class="fixed top-0 left-0 z-50 w-full bg-gray-950 shadow-sm">
    <nav class="relative z-50 flex items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4" aria-label="Główna nawigacja">
      <a href="/" class="flex-shrink-0">
        <span class="logo">RALLYZONE</span>
      </a>

      <ul class="hidden items-center gap-2 text-lg text-white sm:flex md:gap-6">
        <li>
          <a href="/" class="menu-link hover:opacity-70">Home</a>
        </li>
        <li>
          <a href="#offer" class="menu-link hover:opacity-70">Oferta</a>
        </li>
        <li>
          <a href="#gallery" class="menu-link hover:opacity-70">Galeria</a>
        </li>
        <li>
          <a href="#contact" class="menu-link hover:opacity-70">Kontakt</a>
        </li>
        <li>
          <CallLink location="nav" class="menu-link bg-[#ec1c24] text-white hover:bg-[#c4161d]">
            Zadzwoń
          </CallLink>
        </li>
      </ul>

      <div class="flex items-center gap-1 text-white sm:hidden">
        <CallLink location="nav-mobile" class="menu-link bg-[#ec1c24] text-base text-white hover:bg-[#c4161d]">
          Zadzwoń
        </CallLink>
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
      class="border-t border-white/10 bg-gray-950 px-4 py-4 text-white sm:hidden"
    >
      <ul class="flex flex-col gap-2 text-lg">
        <li>
          <a href="/" class="menu-link" @click="close">Home</a>
        </li>
        <li>
          <a href="#offer" class="menu-link" @click="close">Oferta</a>
        </li>
        <li>
          <a href="#gallery" class="menu-link" @click="close">Galeria</a>
        </li>
        <li>
          <a href="#contact" class="menu-link" @click="close">Kontakt</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false)

const close = () => { isOpen.value = false }

watch(isOpen, v => { document.body.style.overflow = v ? 'hidden' : '' })

const onHash = () => close()

onMounted(() => {
  window.addEventListener('hashchange', onHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHash)
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
    font-size: 2.5rem;
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
