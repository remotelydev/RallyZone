<script setup>
const poster = '/pics/hero-poster.jpg'
const desktopWebm = '/vids/hero_desktop.webm'
const desktopMp4 = '/vids/hero_desktop.mp4'

const playDesktopVideo = ref(false)
let mediaQuery

function update() {
  playDesktopVideo.value = mediaQuery?.matches ?? false
}

useHead({
  link: [
    { rel: 'preload', as: 'image', href: poster },
  ],
})

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 769px)')
  update()
  mediaQuery.addEventListener('change', update)
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', update)
})
</script>

<template>
<section class="relative h-[90vh] min-h-[560px] w-full overflow-hidden" aria-labelledby="hero-title">
  <img
    :src="poster"
    alt="Peugeot 208 Rally2 RallyZone"
    width="1600"
    height="1066"
    fetchpriority="high"
    decoding="async"
    class="absolute inset-0 h-full w-full object-cover"
  >

  <video
    v-if="playDesktopVideo"
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    :poster="poster"
    preload="none"
  >
    <source :src="desktopWebm" type="video/webm">
    <source :src="desktopMp4" type="video/mp4">
  </video>

  <div class="absolute inset-0 bg-black/50"/>

  <div class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
    <div class="max-w-2xl text-white">
      <h1 id="hero-title" class="text-4xl font-bold md:text-6xl">
        Wynajem rajdówki z pełnym zapleczem
      </h1>
      <p class="mt-4 text-lg md:text-xl opacity-90">
        Peugeot 208 Rally2 i Opel Corsa. Asfalt albo szuter. RallyZone, Turek.
      </p>
      <div class="mt-8 flex gap-3">
        <CallLink location="hero" class="rounded-2xl bg-[#ec1c24] px-6 py-3 text-lg font-semibold text-white hover:bg-[#c4161d]">
          Zadzwoń
        </CallLink>
      </div>
    </div>
  </div>
</section>
</template>
