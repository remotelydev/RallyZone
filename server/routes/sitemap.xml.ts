// Prerendered at build time (see nitro.prerender.routes), so lastmod follows
// the last commit instead of a date someone has to remember to edit.
export default defineEventHandler((event) => {
  const { sitemapLastmod } = useRuntimeConfig()
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rallyzone.pl/</loc>
    <lastmod>${sitemapLastmod}</lastmod>
  </url>
</urlset>
`
})
