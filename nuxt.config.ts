// https://nuxt.com/docs/api/configuration/nuxt-config
import { copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from "@tailwindcss/vite";

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: ['/'],
      failOnError: false,
    },
    hooks: {
      compiled(nitro) {
        copyFileSync(
          join(rootDir, 'public/404.html'),
          join(nitro.options.output.publicDir, '404.html'),
        )
      },
    },
  },
  vite: {
    plugins:[tailwindcss()]
  },
  css: ['@/assets/main.css'],
  modules: ['@nuxt/eslint'],
})
