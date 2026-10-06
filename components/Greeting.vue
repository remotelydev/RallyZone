<script setup>
const img = useImage()
const poster = img('/pics/hero-poster.jpg', { width: 1024, format: 'webp' })
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
  <section id="welcome" ref="sectionRef" class="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28" aria-labelledby="welcome-title">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div>
        <p class="stage-label">OS 1 · RallyZone</p>
        <h2 id="welcome-title" class="mt-3 text-4xl md:text-6xl">Rajdy od pierwszego zakrętu</h2>
        <p class="mt-6 text-lg leading-relaxed text-ink/80">
          Wejdź w świat motorsportu z zespołem, który zapewnia rajdówkę oraz kompletne zaplecze gotowe do startu. Ty skupiasz się na jeździe, my zajmujemy się przygotowaniem auta i obsługą.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-ink/80">
          Przywozimy auto, dbamy o jego stan, a Ty możesz skupić się na tym, co najważniejsze: na jeździe.
        </p>
      </div>

      <div class="relative">
        <!-- Offset red block behind the video, like a livery stripe -->
        <div class="absolute -bottom-3 -right-3 h-full w-full bg-brand md:-bottom-4 md:-right-4" aria-hidden="true" />
        <div class="relative aspect-video overflow-hidden bg-ink">
          <video
            class="h-full w-full object-cover"
            controls
            preload="none"
            playsinline
            :poster="poster"
            aria-label="Film z przejazdu rajdówki RallyZone, z dźwiękiem"
          >
            <source v-if="loadVideo" :src="webm" type="video/webm" >
            <source v-if="loadVideo" :src="mp4" type="video/mp4" >
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
