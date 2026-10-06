export const siteUrl = 'https://rallyzone.pl/'
// Leads with the phrase people search for; the brand goes last.
export const defaultTitle = 'Wynajem samochodu rajdowego Peugeot 208 Rally2 | RallyZone'
export const defaultDescription = 'RallyZone oferuje wynajem rajdowego Peugeota 208 Rally2 z pełnym zapleczem serwisowym. Startuj na asfalcie lub szutrze – skontaktuj się z nami.'
export const ogImage = `${siteUrl}og-rallyzone-208.jpg`
const ogImageAlt = 'Biały Peugeot 208 Rally2 RallyZone na szutrowym odcinku'
const mapUrl = 'https://maps.google.com/?q=Zdrojki+Prawe+95,+62-700+Turek'

export function useSiteSeo() {
  useSeoMeta({
    title: defaultTitle,
    description: defaultDescription,
    ogTitle: defaultTitle,
    ogDescription: defaultDescription,
    ogType: 'website',
    ogUrl: siteUrl,
    ogLocale: 'pl_PL',
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/jpeg',
    ogImageAlt,
    ogSiteName: 'RallyZone',
    twitterCard: 'summary_large_image',
    twitterTitle: defaultTitle,
    twitterDescription: defaultDescription,
    twitterImage: ogImage,
    twitterImageAlt: ogImageAlt,
  })

  useHead({
    meta: [
      { name: 'google-site-verification', content: 'btT-IQVEckAnx0SuvyNFFXpwLRxANNj1OVzmSFlZkwA' },
    ],
    link: [
      { rel: 'canonical', href: siteUrl },
      { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    script: [{
      // Gives Google the site name to show above the result instead of the domain.
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: 'RallyZone',
        alternateName: 'rallyzone.pl',
        url: siteUrl,
        inLanguage: 'pl-PL',
        publisher: { '@id': `${siteUrl}#business` },
      }),
    }, {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'AutoRental'],
        '@id': `${siteUrl}#business`,
        name: 'RallyZone',
        url: siteUrl,
        image: ogImage,
        logo: `${siteUrl}apple-touch-icon.png`,
        email: 'rallyzone.pl@gmail.com',
        telephone: '+48 501 101 994',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Zdrojki Prawe 95',
          postalCode: '62-700',
          addressLocality: 'Turek',
          addressCountry: 'PL',
        },
        hasMap: mapUrl,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.022987,
          longitude: 18.509945,
        },
        areaServed: { '@type': 'Country', name: 'Polska' },
        knowsLanguage: 'pl',
        description: defaultDescription,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Wynajem samochodów rajdowych',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Car',
                name: 'Peugeot 208 Rally2',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Car',
                name: 'Opel Corsa',
              },
            },
          ],
        },
      }),
    }],
  })
}
