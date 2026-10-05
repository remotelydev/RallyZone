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
