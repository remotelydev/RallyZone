<template>
  <section class="bg-paper py-20 md:py-28" aria-labelledby="steps-title">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <p class="stage-label">OS 3 · Jak to działa</p>
      <h2 id="steps-title" class="mt-3 text-4xl md:text-6xl">Jak wygląda wynajem rajdówki</h2>

      <ol class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, i) in steps" :key="step.title" class="border-t-4 border-ink pt-5">
          <span class="font-display text-6xl font-extrabold italic leading-none text-brand" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="mt-4 text-2xl">{{ step.title }}</h3>
          <p class="mt-2 text-ink/75">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Kontakt', text: 'Zadzwoń lub napisz. Sprawdzimy dostępność auta i ustalimy szczegóły startu.' },
  { title: 'Przygotowanie', text: 'Dostarczamy auto i dbamy o to, żeby było gotowe do jazdy.' },
  { title: 'Start', text: 'Wybierasz asfalt albo szuter i skupiasz się wyłącznie na prowadzeniu.' },
  { title: 'Serwis', text: 'Zespół RallyZone obsługuje auto przez cały rajd.' },
]
</script>
