import type { LocalBusiness, WithContext } from "schema-dts";

type CitySEO = {
  name: string;
  state: string;
  seoTitle: string;
  seoDescription: string;
  slug: string;
};

export function generateLocalBusinessSchema(
  city: CitySEO
): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: city.seoTitle,
    description: city.seoDescription,
    areaServed: {
      "@type": "City",
      name: `${city.name} - ${city.state}`,
    },
    url: `https://valebytes.com.br/criacao-de-sites/${city.slug}`,
    makesOffer: {
      "@type": "Offer",
      name: "Criação de Sites Profissionais",
      areaServed: {
        "@type": "City",
        name: `${city.name} - ${city.state}`,
      },
    },
  };
}
