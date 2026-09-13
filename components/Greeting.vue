<script setup>
const poster = '/pics/hero-poster.jpg'
const webm = '/vids/tor_header_audio.webm'
const mp4 = '/vids/tor_header_audio.mp4'

const sectionRef = ref(null)
const loadVideo = ref(false)

onMounted(() => {
  const el = sectionRef.value
  if (!el) return

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    loadVideo.value = true
    io.disconnect()
  }, { rootMargin: '200px' })

  io.observe(el)
  onBeforeUnmount(() => io.disconnect())
})
</script>

<template>
    <section id="welcome" ref="sectionRef" class="mx-auto max-w-7xl px-6 py-16" aria-labelledby="welcome-title">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <div class="p-6">
          <h2 id="welcome-title" class="text-3xl md:text-4xl font-bold">RallyZone – rajdy od pierwszego zakrętu</h2>
          <p class="mt-4 text-lg">
            Wejdź w świat motorsportu z zespołem, który zapewnia rajdówkę oraz kompletne zaplecze gotowe do startu. Ty skupiasz się na jeździe, my zajmujemy się przygotowaniem auta i obsługą.
          </p>
          <h3 class="mt-8 text-xl font-semibold">Asfalt czy szuter</h3>
          <p class="mt-3 text-lg">
            Nie potrzebujesz fabrycznego kontraktu, by poczuć, czym jest prawdziwy rajd. Z nami możesz wsiąść za kierownicę Peugeota 208 Rally2 — w pełnej specyfikacji, z serwisem, zespołem i całym zapleczem gotowym do akcji. Przywozimy auto, dbamy o jego stan, a Ty możesz skupić się na tym, co najważniejsze — na jeździe. Asfalt czy szuter? Ty wybierasz.
          </p>
        </div>

        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
          <!-- aspect ratio box -->
          <div class="aspect-video">
            <video
              class="h-full w-full object-cover"
              controls
              preload="none"
              playsinline
              :poster="poster"
            >
              <source v-if="loadVideo" :src="webm" type="video/webm" >
              <source v-if="loadVideo" :src="mp4" type="video/mp4" >
            </video>
          </div>
        </div>
      </div>
</section>

</template>
