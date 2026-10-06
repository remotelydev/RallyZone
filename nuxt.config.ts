// https://nuxt.com/docs/api/configuration/nuxt-config
import { execSync } from 'node:child_process'
import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from "@tailwindcss/vite";
import { galleryFiles, galleryFullWidth } from './utils/gallery'

// Date of the last commit (YYYY-MM-DD) for the sitemap; today if git is unavailable.
function lastCommitDate() {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

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
  runtimeConfig: {
    sitemapLastmod: lastCommitDate(),
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/sitemap.xml',
        // Lightbox images are not in the HTML, so prerender them explicitly.
        ...galleryFiles.map(f => `/_ipx/w_${galleryFullWidth}&f_webp/pics/gallery/${f}`),
      ],
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
  modules: ['@nuxt/eslint', '@nuxt/image'],
  image: {
    // ipx writes resized files into the static build, so this works on any host.
    provider: 'ipx',
    quality: 70,
    screens: { xs: 390, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1920 },
  },
  router: {
    options: {
      trailingSlash: true,
    },
  },
})
