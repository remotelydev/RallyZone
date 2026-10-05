<template>
  <footer class="bg-gray-950 text-gray-400 px-6 py-10 text-sm">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div>
        <p class="text-base font-semibold text-white">RallyZone</p>
        <p class="mt-1">Wynajem samochodów rajdowych z serwisem</p>
      </div>
      <address class="not-italic leading-relaxed">
        Zdrojki Prawe 95, 62-700 Turek<br>
        <a href="tel:+48501101994" class="hover:text-white">+48 501 101 994</a><br>
        <a href="mailto:rallyzone.pl@gmail.com" class="hover:text-white">rallyzone.pl@gmail.com</a>
      </address>
      <nav aria-label="Stopka">
        <ul class="flex gap-4">
          <li><a href="#offer" class="hover:text-white">Oferta</a></li>
          <li><a href="#gallery" class="hover:text-white">Galeria</a></li>
          <li><a href="#contact" class="hover:text-white">Kontakt</a></li>
        </ul>
      </nav>
    </div>
    <p class="mx-auto mt-8 max-w-6xl border-t border-gray-800 pt-6 text-gray-500">© {{ year }} RallyZone</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
