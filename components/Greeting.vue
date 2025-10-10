<script setup>
import torHeader from '@/assets/vids/tor_header_audio.mp4'
import heroPoster from '@/assets/pics/hero_poster.jpg'
</script>

<template>
    <section id="welcome" class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <div class="p-6">
          <h2 class="text-3xl md:text-4xl font-bold">Witaj w RALLYZONE!</h2>
          <p class="mt-4 text-lg">
            Wejdź w świat motorsportu z zespołem, który dostarcza nie tylko auto, ale całe zaplecze rajdowe gotowe do startu, gdziekolwiek chcesz.
          </p>
        </div>

        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
          <!-- aspect ratio box -->
          <div class="aspect-video">
            <video
              class="h-full w-full object-cover"
              controls
              preload="metadata"
              playsinline
              :poster="heroPoster"
            >
              <source :src="torHeader" type="video/mp4" >
            </video>
          </div>
        </div>
      </div>
      <!-- <div>
        <p class="rounded-xl bg-slate-100 p-6">
            Nie potrzebujesz fabrycznego kontraktu, by poczuć, czym jest prawdziwy rajd. Z nami możesz wsiąść za kierownicę Peugeota 208 Rally2 - w pełnej specyfikacji, z serwisem, zespołem i całym zapleczem gotowym do akcji.
Przywozimy auto, dbamy o jego stan, a Ty możesz skupić się na tym, co najważniejsze - na jeździe. Asfalt czy szuter? Ty wybierasz.
Dla najmłodszych entuzjastów mamy Opla Corsę - małe auto, wielkie emocje. Idealne, by zacząć przygodę z rajdami od pierwszego zakrętu.
        </p>
      </div> -->
</section>

</template>