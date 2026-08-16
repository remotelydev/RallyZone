<script setup>
import heroMobile from '@/assets/vids/hero_mobile.mp4'
import heroDesktop from '@/assets/vids/hero_desktop.mp4'
import heroMobileWebm from '@/assets/vids/hero_mobile.webm'
import heroDesktopWebm from '@/assets/vids/hero_desktop.webm'
import heroPoster from '@/assets/pics/hero_poster.jpg'
</script>

<template>
<section class="relative h-[90vh] min-h-[560px] w-full overflow-hidden" aria-labelledby="hero-title">
  <!-- Background video -->
  <video
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    :poster="heroPoster"
    preload="metadata"
  >
    <!-- WebM provides smaller files on supported browsers. -->
    <source :src="heroMobileWebm" type="video/webm" media="(max-width: 768px)" >
    <source :src="heroDesktopWebm" type="video/webm" media="(min-width: 769px)" >
    <!-- MP4 fallback -->
    <source :src="heroMobile" type="video/mp4" media="(max-width: 768px)" >
    <source :src="heroDesktop" type="video/mp4" media="(min-width: 769px)" >
    <!-- Fallback -->
    Your browser does not support the video tag.
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
        <!-- <a href="#" class="rounded-2xl border border-white/60 px-5 py-3">
          Zobacz flotę
        </a> -->
      </div>
    </div>
  </div>
</section>
    
</template>
