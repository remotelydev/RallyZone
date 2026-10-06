<script setup>
const poster = '/pics/hero-poster.jpg'
const desktopWebm = '/vids/hero_desktop.webm'
const desktopMp4 = '/vids/hero_desktop.mp4'

const playDesktopVideo = ref(false)
let mediaQuery

function update() {
  playDesktopVideo.value = mediaQuery?.matches ?? false
}

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
<section class="relative h-[90vh] h-[90svh] min-h-[560px] w-full overflow-hidden" aria-labelledby="hero-title">
  <NuxtImg
    :src="poster"
    alt="Peugeot 208 Rally2 RallyZone"
    sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
    densities="x1"
    format="webp"
    fetchpriority="high"
    loading="eager"
    :preload="{ fetchPriority: 'high' }"
    class="absolute inset-0 h-full w-full object-cover"
  />

  <video
    v-if="playDesktopVideo"
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    preload="none"
  >
    <source :src="desktopWebm" type="video/webm">
    <source :src="desktopMp4" type="video/mp4">
  </video>

  <!-- Darken the lower left where the text sits, keep the rest of the shot bright -->
  <div class="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-black/10" />

  <!-- Content -->
  <div class="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-24 md:px-6 md:pb-32">
    <div class="max-w-3xl text-white">
      <p class="stage-label !text-white/85 before:me-2 before:inline-block before:h-[3px] before:w-8 before:bg-brand before:align-middle before:content-['']">Turek · Wielkopolska</p>
      <h1 id="hero-title" class="mt-3 text-5xl sm:text-6xl md:text-8xl">
        Wynajem Peugeota <span class="text-brand">208 Rally2</span>
      </h1>
      <p class="mt-5 max-w-xl text-lg md:text-xl text-white/85">
        Ty jedziesz, my robimy resztę. Rajdówka z serwisem i zapleczem na asfalt i szuter.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="tel:+48501101994" class="btn btn-primary">
          <span>Zadzwoń: 501 101 994</span>
        </a>
        <a href="#offer" class="btn btn-outline">
          <span>Zobacz ofertę</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Red diagonal cut along the bottom edge -->
  <div class="absolute inset-x-0 -bottom-px h-10 md:h-14 bg-paper [clip-path:polygon(0_100%,100%_0,100%_100%)]" aria-hidden="true" />
  <div class="absolute inset-x-0 -bottom-px h-10 md:h-14 bg-brand [clip-path:polygon(0_100%,100%_0,100%_20%,0_100%)] md:[clip-path:polygon(0_100%,100%_0,100%_14%,0_100%)]" aria-hidden="true" />
</section>
    
</template>
