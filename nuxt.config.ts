// https://nuxt.com/docs/api/configuration/nuxt-config
import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from "@tailwindcss/vite";

function writeStatic404() {
  const src = join(process.cwd(), 'public/404.html')
  const destDir = join(process.cwd(), '.output/public')
  // Never mkdir this folder. Creating it before Nitro writes the prerender
  // output left Netlify publishing only 404.html (homepage HTTP 404).
  if (!existsSync(src) || !existsSync(join(destDir, 'index.html'))) return
  copyFileSync(src, join(destDir, '404.html'))
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
      failOnError: false,
    },
    hooks: {
      'prerender:done'() {
        writeStatic404()
      },
    },
  },
  hooks: {
    close() {
      writeStatic404()
    },
  },
  vite: {
    plugins:[tailwindcss()]
  },
  css: ['@/assets/main.css'],
  modules: ['@nuxt/eslint'],
  router: {
    options: {
      trailingSlash: true,
    },
  },
})
