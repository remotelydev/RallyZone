<script setup lang="ts">
// Same files main.css pulls in through Fontsource, so the hashed URLs match.
import condensedLatin from '@fontsource/saira-condensed/files/saira-condensed-latin-800-normal.woff2?url'
import condensedLatinExt from '@fontsource/saira-condensed/files/saira-condensed-latin-ext-800-normal.woff2?url'

// Headings and buttons use Saira Condensed, and Polish letters (Ł, Ę, Ń) live
// in the latin-ext subset, so preload both to have them before first paint.
const fontPreload = (href: string) => ({ rel: 'preload', as: 'font', type: 'font/woff2', href, crossorigin: '' })

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [fontPreload(condensedLatin), fontPreload(condensedLatinExt)],
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
