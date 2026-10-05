<template>
  <section class="relative overflow-hidden bg-ink text-white" aria-labelledby="surface-title">
    <NuxtImg
      src="/img/gallery/1-17.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-60"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
      densities="x1"
      format="webp"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" aria-hidden="true" />
    <div class="relative mx-auto max-w-7xl px-4 py-28 md:px-6 md:py-40">
      <h2 id="surface-title" class="max-w-2xl text-5xl md:text-7xl">
        Asfalt czy szuter?<br><span class="text-brand">Ty wybierasz.</span>
      </h2>
      <p class="mt-6 max-w-lg text-lg text-white/85">RallyZone pomoże Ci przygotować się do startu na każdej nawierzchni.</p>
      <a href="#contact" class="btn btn-primary mt-8"><span>Zapytaj o termin</span></a>
    </div>
  </section>
</template>
