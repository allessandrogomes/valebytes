import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const citiesPath = resolve("src/cities.json");
const cities = JSON.parse(readFileSync(citiesPath, "utf-8"));

const BASE_URL = "https://valebytes.com.br";

let urls = cities.map((c) => `${BASE_URL}/criacao-de-sites/${c.slug}`);
urls.push(`${BASE_URL}/`);

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

writeFileSync("out/sitemap.xml", sitemap);

console.log("✅ Sitemap gerado com sucesso: public/sitemap.xml");
