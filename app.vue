<script setup lang="ts">
import NabBar from './components/NavBar.vue'
import HeroVideo from './components/HeroVideo.vue'
import Greeting from './components/Greeting.vue'
import Offer from './components/Offer.vue'
import Gallery from './components/GallerySection.vue'
import Contact from './components/Contact.vue'
// import Cards from './components/Cards.vue'

const siteUrl = 'https://rallyzone.pl'
const title = 'RallyZone – wynajem rajdowego Peugeota 208 Rally2'
const description = 'RallyZone oferuje wynajem rajdowego Peugeota 208 Rally2 z pełnym zapleczem serwisowym. Startuj na asfalcie lub szutrze – skontaktuj się z nami.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogLocale: 'pl_PL',
  twitterCard: 'summary',
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'RallyZone',
      url: siteUrl,
      email: 'rallyzone.pl@gmail.com',
      telephone: '+48 501 101 994',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zdrojki Prawe 95',
        postalCode: '62-700',
        addressLocality: 'Turek',
        addressCountry: 'PL',
      },
      description,
    }),
  }],
})
</script>

<template>
  <div>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black">
      Przejdź do treści
    </a>
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
