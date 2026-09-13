export function trackClickToCall(location: string) {
  if (!import.meta.client) return

  const measurementId = String(useRuntimeConfig().public.gaMeasurementId || '').trim()
  if (!measurementId) return

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return

  gtag('event', 'click_to_call', { location })
}
