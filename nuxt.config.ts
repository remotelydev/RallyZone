// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { gallery, galleryFullWidth } from "./data/gallery";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: [
        '/',
        ...gallery.map(({ file }) => `/_ipx/w_${galleryFullWidth}&f_webp/img/gallery/${file}`),
      ],
    },
  },
  vite: {
    plugins:[tailwindcss()]
  },
  css: ['@/assets/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/image'],
  image: {
    quality: 70,
    format: ['avif', 'webp'],
    screens: { xs: 390, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1920 },
  },
})
