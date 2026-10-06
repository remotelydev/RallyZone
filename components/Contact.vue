<script setup lang="ts">
const showMap = ref(false)

// Load Google Maps once the page has finished loading and the browser is idle,
// so its scripts never compete with the hero image (LCP) or hydration.
onMounted(() => {
  const loadMap = () => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1))
    idle(() => { showMap.value = true }, { timeout: 2000 })
  }
  if (document.readyState === 'complete') loadMap()
  else window.addEventListener('load', loadMap, { once: true })
})
const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.1158546678384!2d18.509945376333043!3d52.022987072908265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b18a5c3596c61%3A0xc162632d2c14b968!2sZdrojki%20Prawe%2095%2C%2062-700%20Turek!5e0!3m2!1spl!2spl!4v1760106749921!5m2!1spl!2spl'
</script>

<template>
  <section id="contact" class="bg-ink py-20 text-white md:py-28" aria-labelledby="contact-title">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
      <div class="flex flex-col justify-center">
        <p class="stage-label">OS 6 · Meta</p>
        <h2 id="contact-title" class="mt-3 text-4xl md:text-6xl">Kontakt i wynajem rajdówki</h2>
        <p class="mt-5 text-lg text-white/75">Zapytaj o dostępność Peugeota 208 Rally2 lub Opla Corsy i ustal szczegóły startu.</p>

        <a href="tel:+48501101994" class="mt-8 inline-block font-display text-5xl font-extrabold italic tracking-tight text-white hover:text-brand md:text-6xl">
          +48 501 101 994
        </a>
        <dl class="mt-8 grid gap-4 text-lg sm:grid-cols-2">
          <div>
            <dt class="text-xs font-semibold uppercase tracking-widest text-white/50">E-mail</dt>
            <dd><a href="mailto:rallyzone.pl@gmail.com" class="hover:text-brand">rallyzone.pl@gmail.com</a></dd>
          </div>
          <div>
            <dt class="text-xs font-semibold uppercase tracking-widest text-white/50">Adres</dt>
            <dd>Zdrojki Prawe 95, 62-700 Turek</dd>
          </div>
        </dl>
        <div class="mt-10">
          <a href="tel:+48501101994" class="btn btn-primary"><span>Zadzwoń teraz</span></a>
        </div>
      </div>

      <!-- Map: Google Maps loads after page load (see script); the placeholder shows until then -->
      <div class="relative min-h-80 border-2 border-line bg-[repeating-linear-gradient(-16deg,#141414_0_18px,#191919_18px_36px)] md:min-h-[28rem]">
        <iframe
          v-if="showMap"
          :src="mapSrc"
          class="absolute inset-0 h-full w-full border-0 grayscale"
          title="Lokalizacja RallyZone w Zdrojkach Prawych"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        />
        <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#ec1c24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
          <p class="text-white/80">Zdrojki Prawe 95, 62-700 Turek</p>
          <button type="button" class="btn btn-outline" @click="showMap = true"><span>Pokaż mapę</span></button>
          <a
            href="https://maps.google.com/?q=Zdrojki+Prawe+95,+62-700+Turek"
            class="text-sm text-white/60 underline hover:text-white"
            target="_blank"
            rel="noopener"
          >Otwórz w Mapach Google</a>
        </div>
      </div>
    </div>
  </section>
</template>
