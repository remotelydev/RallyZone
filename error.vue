<script setup lang="ts">
const error = useError()

const title = 'Strona nie istnieje | RallyZone'
const heading = error.value?.statusCode === 404
  ? 'Strona nie istnieje'
  : 'Wystąpił błąd'

useSeoMeta({
  title,
  robots: 'noindex, nofollow',
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main id="main-content" tabindex="-1" class="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-center text-gray-100">
    <p class="text-sm font-semibold uppercase tracking-widest text-red-500">
      {{ error?.statusCode || 404 }}
    </p>
    <h1 class="mt-4 text-4xl font-bold">{{ heading }}</h1>
    <p class="mt-4 max-w-md text-lg text-gray-300">
      Nie znaleziono tej strony. Wróć na stronę główną RallyZone, aby sprawdzić ofertę wynajmu rajdowego Peugeota 208 Rally2.
    </p>
    <NuxtLink
      to="/"
      class="mt-8 rounded-2xl bg-white px-5 py-3 text-black"
      @click.prevent="goHome"
    >
      Wróć na stronę główną
    </NuxtLink>
  </main>
</template>
