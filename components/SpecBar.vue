<template>
  <section class="bg-ink text-white" aria-label="RallyZone w skrócie">
    <ul class="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
      <li
        v-for="item in items"
        :key="item.label"
        class="border-line px-4 py-6 md:px-6 md:py-8 [&:not(:last-child)]:border-r max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(-n+2)]:border-b"
      >
        <p class="text-xs font-semibold uppercase tracking-widest text-white/55">{{ item.label }}</p>
        <p class="mt-1 font-display text-xl font-extrabold uppercase italic md:text-2xl">{{ item.value }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const items = [
  { label: 'Auto', value: 'Peugeot 208 Rally2' },
  { label: 'Na start', value: 'Opel Corsa' },
  { label: 'Nawierzchnia', value: 'Asfalt i szuter' },
  { label: 'W cenie', value: 'Serwis i zaplecze' },
]
</script>
