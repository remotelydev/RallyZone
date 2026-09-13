export const siteUrl = 'https://rallyzone.pl/'
export const defaultTitle = 'RallyZone – wynajem rajdowego Peugeota 208 Rally2'
export const defaultDescription = 'RallyZone oferuje wynajem rajdowego Peugeota 208 Rally2 z pełnym zapleczem serwisowym. Startuj na asfalcie lub szutrze – skontaktuj się z nami.'
export const ogImage = `${siteUrl}og-rallyzone-208.jpg`

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
    twitterCard: 'summary_large_image',
    twitterTitle: defaultTitle,
    twitterDescription: defaultDescription,
    twitterImage: ogImage,
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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 52.022987,
          longitude: 18.509945,
        },
        areaServed: 'PL',
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
