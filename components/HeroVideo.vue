<script setup>
import heroMobile from '@/assets/vids/hero_mobile.mp4'
import heroDesktop from '@/assets/vids/hero_desktop.mp4'
import heroPoster from '@/assets/pics/hero_poster.jpg'
</script>

<template>
<section class="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
  <!-- Background video -->
  <video
    class="absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    :poster="heroPoster"
  >
    <!-- Mobile first -->
    <source :src="heroMobile" type="video/mp4" media="(max-width: 768px)" >
    <!-- Desktop -->
    <source :src="heroDesktop" type="video/mp4" media="(min-width: 769px)" >
    <!-- Fallback -->
    Your browser does not support the video tag.
  </video>

  <!-- Overlay for readability -->
  <div class="absolute inset-0 bg-black/40"/>

  <!-- Content -->
  <div class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
    <div class="max-w-2xl text-white">
      <h1 class="text-4xl font-bold md:text-6xl">
        Peugeot 208 Rally2
      </h1>
      <p class="mt-4 text-lg md:text-xl opacity-90">
        prawdziwe rajdowe doświadczenie na wyciągnięcie ręki
      </p>
      <div class="mt-6 flex gap-3">
        <a href="tel:+48600607127" class="rounded-2xl bg-white/90 px-5 py-3 text-black">
          Umów się teraz
        </a>
        <!-- <a href="#" class="rounded-2xl border border-white/60 px-5 py-3">
          Zobacz flotę
        </a> -->
      </div>
    </div>
  </div>
</section>
    
</template>
