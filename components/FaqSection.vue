<template>
  <section id="faq" class="bg-paper py-20 md:py-28" aria-labelledby="faq-title">
    <div class="mx-auto max-w-4xl px-4 md:px-6">
      <p class="stage-label">OS 5 · FAQ</p>
      <h2 id="faq-title" class="mt-3 text-4xl md:text-6xl">Najczęstsze pytania</h2>

      <div class="mt-10 divide-y-2 divide-ink/10 border-y-2 border-ink">
        <details v-for="item in faq" :key="item.q" class="group py-5">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-extrabold uppercase italic md:text-2xl [&::-webkit-details-marker]:hidden">
            {{ item.q }}
            <span class="text-3xl leading-none text-brand transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p class="mt-3 text-lg text-ink/80">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faq = [
  {
    q: 'Jakie auta można wynająć?',
    a: 'Peugeota 208 Rally2 w pełnej specyfikacji oraz Opla Corsę dla młodszych zawodników, którzy zaczynają rajdową przygodę.',
  },
  {
    q: 'Czy wynajem obejmuje serwis?',
    a: 'Tak. Zapewniamy auto razem z serwisem, zespołem i zapleczem, więc Ty skupiasz się tylko na jeździe.',
  },
  {
    q: 'Na jakich nawierzchniach można startować?',
    a: 'Na asfalcie i na szutrze. Wybierasz nawierzchnię, a my pomagamy przygotować się do startu.',
  },
  {
    q: 'Jak zarezerwować termin?',
    a: 'Zadzwoń pod numer +48 501 101 994 lub napisz na rallyzone.pl@gmail.com. Sprawdzimy dostępność i ustalimy szczegóły.',
  },
  {
    q: 'Gdzie znajduje się RallyZone?',
    a: 'Nasza baza jest w Zdrojkach Prawych 95 koło Turku (Wielkopolska). Auto dostarczamy na start.',
  },
]

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }),
  }],
})
</script>
