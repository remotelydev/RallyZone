<script setup lang="ts">
import NabBar from '../components/NavBar.vue'
import HeroVideo from '../components/HeroVideo.vue'
import Included from '../components/Included.vue'
import HowItWorks from '../components/HowItWorks.vue'
import Offer from '../components/Offer.vue'
import Gallery from '../components/GallerySection.vue'
import Contact from '../components/Contact.vue'
import StickyCallBar from '../components/StickyCallBar.vue'

useSiteSeo()
</script>

<template>
  <div>
    <NabBar />
    <main id="main-content" tabindex="-1">
      <HeroVideo />
      <Included />
      <HowItWorks />
      <Offer />
      <Gallery />
      <Contact />
    </main>
    <StickyCallBar />
  </div>
</template>
