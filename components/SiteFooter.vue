<template>
  <footer class="border-t-4 border-brand bg-ink px-4 py-10 text-sm text-white/60 md:px-6">
    <div class="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div>
        <p class="font-display text-2xl font-extrabold uppercase italic text-white">RallyZone</p>
        <p class="mt-1">Wynajem samochodów rajdowych z serwisem</p>
      </div>
      <address class="not-italic leading-relaxed">
        Zdrojki Prawe 95, 62-700 Turek<br>
        <a href="tel:+48501101994" class="hover:text-brand">+48 501 101 994</a><br>
        <a href="mailto:rallyzone.pl@gmail.com" class="hover:text-brand">rallyzone.pl@gmail.com</a>
      </address>
      <nav aria-label="Stopka">
        <ul class="flex gap-4">
          <li><a href="#offer" class="hover:text-brand">Oferta</a></li>
          <li><a href="#gallery" class="hover:text-brand">Galeria</a></li>
          <li><a href="#faq" class="hover:text-brand">FAQ</a></li>
          <li><a href="#contact" class="hover:text-brand">Kontakt</a></li>
        </ul>
      </nav>
    </div>
    <p class="mx-auto mt-8 max-w-7xl border-t border-line pt-6 text-white/40">© {{ year }} RallyZone</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
