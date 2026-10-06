<script setup lang="ts">
import NabBar from '../components/NavBar.vue'
import HeroVideo from '../components/HeroVideo.vue'
import Greeting from '../components/Greeting.vue'
import SpecBar from '../components/SpecBar.vue'
import Offer from '../components/Offer.vue'
import HowItWorks from '../components/HowItWorks.vue'
import SurfaceBand from '../components/SurfaceBand.vue'
import Gallery from '../components/GallerySection.vue'
import FaqSection from '../components/FaqSection.vue'
import Contact from '../components/Contact.vue'
import SiteFooter from '../components/SiteFooter.vue'

useSiteSeo()
</script>

<template>
  <div>
    <NabBar />
    <main id="main-content" tabindex="-1">
      <HeroVideo />
      <SpecBar />
      <Greeting />
      <Offer />
      <HowItWorks />
      <SurfaceBand />
      <Gallery />
      <FaqSection />
      <Contact />
    </main>
    <SiteFooter />
  </div>
</template>
