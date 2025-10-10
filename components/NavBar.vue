<template>
<header class="absolute top-0 left-0 w-full z-20">
  <nav class="flex items-center justify-between px-6 py-4 md:py-6">
    <!-- Logo on left -->
    <a href="#" class="flex-shrink-0">
      <h1 class="logo">RALLYZONE</h1>
    </a>

    <!-- Hamburger button (mobile only) -->
    <button
      class="w-8 h-8 flex items-center justify-center md:hidden"
      aria-label="Menu"
    >
      <!-- Simple hamburger icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Desktop links -->
    <ul class="hidden md:flex gap-8 text-white text-lg">
      <!-- <li><a href="#fleet" class="hover:text-gray-300">Fleet</a></li> -->
      <li><a href="#gallery" class="hover:text-gray-300">Galeria</a></li>
      <li><a href="#contact" class="hover:text-gray-300">Kontakt</a></li>
    </ul>
  </nav>
</header>


</template>

<style scoped>
.logo {
    paint-order: stroke fill;
  font-family: 'Impact', 'Arial Black', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.16;
  color: white;
  background: #ec1c24;


  /* True outline (doesn't overlap inside) */
  -webkit-text-stroke: 10px black;
  -webkit-text-fill-color: white;


  /* Skew */
  transform: skewX(-16.1deg);

  /* Tighten letters so they touch */
  letter-spacing: -0.01ch;
}
</style>
  