import { writeFileSync } from "fs"

const BASE_URL = "https://valebytes.com.br"

const urls = [
  `${BASE_URL}/`,
  `${BASE_URL}/criacao-de-sites-em-juazeiro-ba/`,
  `${BASE_URL}/criacao-de-sites-em-petrolina-pe/`
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

writeFileSync("dist/sitemap.xml", sitemap);

console.log("✅ Sitemap gerado com sucesso: public/sitemap.xml");
