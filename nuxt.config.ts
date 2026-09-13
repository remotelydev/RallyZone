// https://nuxt.com/docs/api/configuration/nuxt-config
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from "@tailwindcss/vite";

function writeStatic404(publicDir?: string) {
  const src = join(process.cwd(), 'public/404.html')
  const destDir = publicDir || join(process.cwd(), '.output/public')
  if (!existsSync(src)) return
  mkdirSync(destDir, { recursive: true })
  copyFileSync(src, join(destDir, '404.html'))
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
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
