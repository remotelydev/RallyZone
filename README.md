# RallyZone.pl

Landing page RallyZone – wynajem samochodów rajdowych i obsługa startów.

## Setup

```bash
pnpm install
```

## Development server

```bash
pnpm dev
```

## Production

```bash
pnpm build
pnpm preview
```

## SEO

Podstawowe meta tagi, dane strukturalne LocalBusiness, canonical URL, robots.txt i sitemap.xml są skonfigurowane dla `https://rallyzone.pl`.

## Analytics

GA4 ładuje się tylko gdy `NUXT_PUBLIC_GA_MEASUREMENT_ID` jest ustawione w runtime (Netlify env). Puste = bez gtag. Każdy `tel:` wysyła zdarzenie `click_to_call` z etykietą `location`.
