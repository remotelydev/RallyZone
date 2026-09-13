<script setup>
const poster = '/pics/hero-poster.jpg'
const webm = '/vids/tor_header_audio.webm'
const mp4 = '/vids/tor_header_audio.mp4'

const sectionRef = ref(null)
const loadVideo = ref(false)

const items = [
  { title: 'Opony', text: 'Komplet opon pod nawierzchnię, którą wybieracie.' },
  { title: 'Serwis', text: 'Przygotowanie auta i obsługa zespołu RallyZone.' },
  { title: 'Transport', text: 'Przywozimy rajdówkę tam, gdzie jedziecie.' },
  { title: 'Ubezpieczenie', text: 'Ubezpieczenie wchodzi w wynajem.' },
]

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
  <section id="included" ref="sectionRef" class="mx-auto max-w-7xl scroll-mt-24 px-6 py-16" aria-labelledby="included-title">
    <div class="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h2 id="included-title" class="text-3xl font-bold md:text-4xl">Co wchodzi w wynajem</h2>
        <p class="mt-4 text-lg text-slate-700">
          Auto gotowe do jazdy. W wynajmie są opony, serwis, transport i ubezpieczenie.
        </p>
        <ul class="mt-8 space-y-4">
          <li v-for="item in items" :key="item.title" class="flex gap-3">
            <span class="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ec1c24] text-sm font-bold text-white" aria-hidden="true">✓</span>
            <div>
              <p class="font-semibold text-slate-900">{{ item.title }}</p>
              <p class="text-slate-700">{{ item.text }}</p>
            </div>
          </li>
        </ul>
        <p class="mt-8 text-lg text-slate-800">
          Resztę ustalisz z nami przez telefon —
          <CallLink class="font-semibold text-[#ec1c24] underline decoration-2 underline-offset-4 hover:text-[#c4161d]">
            zadzwoń po szczegóły
          </CallLink>.
        </p>
      </div>

      <div class="relative overflow-hidden rounded-2xl shadow-2xl">
        <div class="aspect-video">
          <video
            class="h-full w-full object-cover"
            controls
            preload="none"
            playsinline
            :poster="poster"
          >
            <source v-if="loadVideo" :src="webm" type="video/webm">
            <source v-if="loadVideo" :src="mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
