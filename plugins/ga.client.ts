export default defineNuxtPlugin(() => {
  const measurementId = String(useRuntimeConfig().public.gaMeasurementId || '').trim()
  if (!measurementId) return

  const w = window as Window & {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }

  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // Queue must match the official snippet: dataLayer.push(arguments)
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', measurementId)

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`,
        async: true,
      },
    ],
  })
})
