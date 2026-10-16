import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { absoluteUrl, CITIES_HUB_PATH, cityPath } from "@/lib/site";

export const dynamic = "force-static";

const HOME_PRIORITY = 1;
const HUB_PRIORITY = 0.9;
const CITY_PRIORITY = 0.8;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: absoluteUrl(cityPath(city.slug)),
    lastModified,
    changeFrequency: "monthly",
    priority: CITY_PRIORITY,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: HOME_PRIORITY,
    },
    {
      url: absoluteUrl(CITIES_HUB_PATH),
      lastModified,
      changeFrequency: "monthly",
      priority: HUB_PRIORITY,
    },
    ...cityEntries,
  ];
}
