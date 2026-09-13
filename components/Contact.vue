<script setup lang="ts">
import { PHONE_DISPLAY } from '~/utils/contact'
</script>

<template>
  <section id="contact" class="scroll-mt-24 bg-gray-950 px-4 pt-16 pb-28 text-gray-100 sm:pb-16" aria-labelledby="contact-title">
    <div
      class="mx-auto grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 text-gray-200 shadow-2xl md:grid-cols-2"
    >
      <div class="h-96 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.1158546678384!2d18.509945376333043!3d52.022987072908265!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b18a5c3596c61%3A0xc162632d2c14b968!2sZdrojki%20Prawe%2095%2C%2062-700%20Turek!5e0!3m2!1spl!2spl!4v1760106749921!5m2!1spl!2spl"
          class="h-full w-full border-0 filter grayscale"
          title="Lokalizacja RallyZone w Zdrojkach Prawych"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>

      <div class="flex flex-col justify-center gap-6 bg-gray-900 p-8 pb-10 md:p-10">
        <h2 id="contact-title" class="text-3xl font-semibold text-white">Kontakt</h2>
        <p class="text-gray-300">
          RallyZone, Turek. Zadzwoń po szczegóły wynajmu Peugeota 208 Rally2 lub Opla Corsy.
        </p>
        <CallLink class="block text-4xl font-bold tracking-tight text-white hover:text-[#ec1c24] md:text-5xl">
          {{ PHONE_DISPLAY }}
        </CallLink>
        <CallLink class="inline-flex w-fit rounded-2xl bg-[#ec1c24] px-6 py-3 text-lg font-semibold text-white hover:bg-[#c4161d]">
          Zadzwoń
        </CallLink>
        <p>
          <span class="font-semibold text-gray-100">Adres: </span>
          Zdrojki Prawe 95, 62-700 Turek
        </p>
        <p>
          <span class="font-semibold text-gray-100">E-mail: </span>
          <a
            href="mailto:rallyzone.pl@gmail.com"
            class="text-gray-300 transition hover:text-gray-100"
          >rallyzone.pl@gmail.com</a>
        </p>
      </div>
    </div>
  </section>
</template>
