<script setup>
const steps = [
  {
    n: '1',
    title: 'Zadzwoń',
    text: 'Jeden telefon do RallyZone.',
  },
  {
    n: '2',
    title: 'Ustalacie szczegóły',
    text: 'Auto, nawierzchnia, logistyka. Wszystko dogadujecie na rozmowie.',
  },
  {
    n: '3',
    title: 'Auto',
    text: 'Rajdówka z zapleczem jest na miejscu. Ty skupiasz się na jeździe.',
  },
]
</script>

<template>
  <section id="how-it-works" class="bg-gray-950 text-white scroll-mt-24" aria-labelledby="process-title">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <h2 id="process-title" class="text-3xl font-bold md:text-4xl">Jak to działa</h2>
      <ol class="mt-10 grid gap-6 md:grid-cols-3">
        <li
          v-for="step in steps"
          :key="step.n"
          class="rounded-2xl border border-white/10 bg-gray-900 p-6"
        >
          <p class="text-sm font-semibold uppercase tracking-widest text-[#ec1c24]">Krok {{ step.n }}</p>
          <h3 class="mt-3 text-2xl font-bold">{{ step.title }}</h3>
          <p class="mt-3 text-lg text-gray-300">{{ step.text }}</p>
        </li>
      </ol>
      <div class="mt-10">
        <CallLink class="inline-flex rounded-2xl bg-[#ec1c24] px-6 py-3 text-lg font-semibold text-white hover:bg-[#c4161d]">
          Zadzwoń
        </CallLink>
      </div>
    </div>
  </section>
</template>
