<script setup lang="ts">
import NabBar from './components/NavBar.vue'
import HeroVideo from './components/HeroVideo.vue'
import Greeting from './components/Greeting.vue'
import Offer from './components/Offer.vue'
import Gallery from './components/GallerySection.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'

const siteUrl = 'https://rallyzone.pl'
const title = 'RallyZone – wynajem rajdowego Peugeota 208 Rally2'
const ogImage = `${siteUrl}/og-image.jpg`
const description = 'RallyZone oferuje wynajem rajdowego Peugeota 208 Rally2 z pełnym zapleczem serwisowym. Startuj na asfalcie lub szutrze – skontaktuj się z nami.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogLocale: 'pl_PL',
  ogSiteName: 'RallyZone',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Rajdowy Peugeot 208 RallyZone na szutrze',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'RallyZone',
      url: siteUrl,
      image: ogImage,
      email: 'rallyzone.pl@gmail.com',
      telephone: '+48 501 101 994',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zdrojki Prawe 95',
        postalCode: '62-700',
        addressLocality: 'Turek',
        addressRegion: 'wielkopolskie',
        addressCountry: 'PL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.022987,
        longitude: 18.509945,
      },
      areaServed: { '@type': 'Country', name: 'Polska' },
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wynajem rajdowego Peugeota 208 Rally2',
            description: 'Wynajem Peugeota 208 Rally2 z serwisem i zapleczem na starty na asfalcie i szutrze.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wynajem rajdowego Opla Corsy',
            description: 'Opel Corsa dla młodszych zawodników na początek rajdowej przygody.',
          },
        },
      ],
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
      <Contact />
    </main>
    <SiteFooter />
  </div>
</template>
