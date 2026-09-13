<script setup lang="ts">
import NabBar from '../components/NavBar.vue'
import HeroVideo from '../components/HeroVideo.vue'
import Greeting from '../components/Greeting.vue'
import Offer from '../components/Offer.vue'
import Gallery from '../components/GallerySection.vue'
import Contact from '../components/Contact.vue'
// import Cards from '../components/Cards.vue'

useSiteSeo()
</script>

<template>
  <div>
    <NabBar />
    <main id="main-content" tabindex="-1">
      <HeroVideo />
      <Greeting />
      <Offer />
      <Gallery />
      <!-- <Cards /> -->
      <Contact />
    </main>
  </div>
</template>
