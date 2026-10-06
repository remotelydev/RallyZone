<template>
  <section id="offer" class="bg-white py-20 md:py-28" aria-labelledby="offer-title">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <div class="max-w-3xl">
        <p class="stage-label">OS 2 · Oferta</p>
        <h2 id="offer-title" class="mt-3 text-4xl md:text-6xl">Kompleksowa obsługa rajdowa</h2>
        <p class="mt-6 text-lg leading-relaxed text-ink/80">
          Nie potrzebujesz fabrycznego kontraktu, by poczuć prawdziwy rajd. Wynajmij Peugeota 208 Rally2 w pełnej specyfikacji, z serwisem, zespołem i zapleczem przygotowanym do działania.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article
          v-for="car in cars"
          :key="car.name"
          class="group relative overflow-hidden bg-ink text-white"
        >
          <div class="relative aspect-[16/9] overflow-hidden">
            <NuxtImg
              v-if="car.image"
              :src="car.image"
              :alt="car.alt"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width="640"
              height="360"
              densities="x1 x2"
              fit="cover"
              format="webp"
              loading="lazy"
            />
            <!-- No Corsa photo yet: a typographic placeholder instead of showing the wrong car -->
            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(-16deg,#161616_0_18px,#1d1d1d_18px_36px)]"
              aria-hidden="true"
            >
              <span class="font-display text-7xl font-extrabold uppercase italic text-white/10 md:text-8xl">Corsa</span>
            </div>
            <span class="absolute left-0 top-4 bg-brand-dark px-4 py-1 font-display text-sm font-extrabold uppercase italic tracking-wider">{{ car.tag }}</span>
          </div>
          <div class="p-6 md:p-8">
            <h3 class="text-3xl md:text-4xl">{{ car.name }}</h3>
            <p class="mt-3 text-white/75">{{ car.text }}</p>
          </div>
          <!-- Red stripe slides in on hover -->
          <div class="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
        </article>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl md:text-3xl">Co wchodzi w wynajem</h3>
        <ul class="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="item in included" :key="item" class="flex items-start gap-3 text-lg">
            <span class="mt-2 inline-block h-3 w-3 shrink-0 -skew-x-12 bg-brand" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
        <p class="mt-6 text-ink/70">Szczegóły startu i dostępność ustalisz telefonicznie.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cars = [
  {
    name: 'Peugeot 208 Rally2',
    tag: 'Na rajd',
    image: '/pics/gallery/1-13.jpg',
    alt: 'Rajdowy Peugeot 208 w pełnej prędkości na szutrze',
    text: 'Rajdówka w pełnej specyfikacji, z serwisem i zespołem RallyZone. Ty skupiasz się na prowadzeniu, na asfalcie albo szutrze.',
  },
  {
    name: 'Opel Corsa',
    tag: 'Na początek',
    image: '',
    alt: '',
    text: 'Dla młodszych entuzjastów motorsportu: niewielkie auto i duże emocje na dobry początek rajdowej przygody.',
  },
]

const included = [
  'Samochód gotowy do startu',
  'Serwis',
  'Zespół',
  'Zaplecze na asfalt i szuter',
]
</script>
