<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'pl' },
})
</script>

<template>
  <div>
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black">
      Przejdź do treści
    </a>
    <NuxtPage />
  </div>
</template>
