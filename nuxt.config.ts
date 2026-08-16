// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  vite: {
    plugins:[tailwindcss()]
  },
  css: ['@/assets/main.css'],
  modules: ['@nuxt/eslint'],
})
