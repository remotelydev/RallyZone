<script setup>
import { ref, onMounted } from 'vue'

const heroMobile = '/vids/hero_mobile.mp4'
const heroDesktop = '/vids/hero_desktop.mp4'
const heroMobileWebm = '/vids/hero_mobile.webm'
const heroDesktopWebm = '/vids/hero_desktop.webm'

// The poster image is the LCP element; the video only loads after hydration
// and is skipped for reduced motion and data-saver users.
const showVideo = ref(false)
const videoReady = ref(false)

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = navigator.connection?.saveData === true
  showVideo.value = !reducedMotion && !saveData
})
</script>

<template>
<section class="relative h-[90vh] h-[90svh] min-h-[560px] w-full overflow-hidden" aria-labelledby="hero-title">
  <NuxtImg
    src="/img/hero_poster.jpg"
    alt=""
    class="absolute inset-0 h-full w-full object-cover"
    sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
    densities="x1"
    format="webp"
    fetchpriority="high"
    loading="eager"
    preload
  />

  <video
    v-if="showVideo"
    class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
    :class="videoReady ? 'opacity-100' : 'opacity-0'"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    aria-hidden="true"
    @playing="videoReady = true"
  >
    <!-- WebM provides smaller files on supported browsers. -->
    <source :src="heroMobileWebm" type="video/webm" media="(max-width: 768px)" >
    <source :src="heroDesktopWebm" type="video/webm" media="(min-width: 769px)" >
    <!-- MP4 fallback -->
    <source :src="heroMobile" type="video/mp4" media="(max-width: 768px)" >
    <source :src="heroDesktop" type="video/mp4" media="(min-width: 769px)" >
  </video>

  <!-- Overlay for readability -->
  <div class="absolute inset-0 bg-black/40"/>

  <!-- Content -->
  <div class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
    <div class="max-w-2xl text-white">
      <h1 id="hero-title" class="text-4xl font-bold md:text-6xl">
        Wynajem Peugeota 208 Rally2
      </h1>
      <p class="mt-4 text-lg md:text-xl opacity-90">
        Prawdziwe rajdowe doświadczenie z profesjonalnym zapleczem RallyZone.
      </p>
      <div class="mt-6 flex gap-3">
        <a href="tel:+48501101994" class="rounded-2xl bg-white/90 px-5 py-3 text-black">
          Zapytaj o termin
        </a>
      </div>
    </div>
  </div>
</section>
</template>
