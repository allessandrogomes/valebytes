import type {
  BreadcrumbList,
  FAQPage,
  ListItem,
  ProfessionalService,
  Service,
  WebSite,
  WithContext,
} from "schema-dts";
import { City, FaqItem } from "@/types/City";
import { cities } from "@/lib/cities";
import {
  absoluteUrl,
  CITIES_HUB_PATH,
  cityPath,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function cityLabel(city: City): string {
  return `${city.name} - ${city.state}`;
}

function buildListItem(position: number, name: string, path: string): ListItem {
  return { "@type": "ListItem", position, name, item: absoluteUrl(path) };
}

export function buildOrganizationSchema(): WithContext<ProfessionalService> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    logo: `${SITE_URL}/web-app-manifest-512x512.png`,
    image: `${SITE_URL}/opengraph-image.jpg`,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Juazeiro",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: cityLabel(city),
    })),
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
    knowsAbout: [
      "Criação de sites",
      "Landing pages",
      "SEO local",
      "Desenvolvimento web",
    ],
  };
}

export function buildWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: absoluteUrl("/"),
    inLanguage: "pt-BR",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildCityServiceSchema(city: City): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Criação de sites profissionais em ${cityLabel(city)}`,
    serviceType: "Criação de sites",
    description: city.seoDescription,
    url: absoluteUrl(cityPath(city.slug)),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: cityLabel(city) },
  };
}

export function buildBreadcrumbSchema(
  city?: City,
): WithContext<BreadcrumbList> {
  const crumbs = [
    buildListItem(1, "Início", "/"),
    buildListItem(2, "Criação de sites", CITIES_HUB_PATH),
  ];

  if (city) {
    crumbs.push(buildListItem(3, cityLabel(city), cityPath(city.slug)));
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs,
  };
}

export function buildFaqSchema(faq: FaqItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
