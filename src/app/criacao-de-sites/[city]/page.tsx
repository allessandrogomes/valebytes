import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import { getFaq } from "@/data/faq";
import { cities } from "@/lib/cities";
import { cityPath } from "@/lib/site";
import { buildPageMetadata } from "@/seo/buildPageMetadata";
import {
  buildBreadcrumbSchema,
  buildCityServiceSchema,
  buildFaqSchema,
} from "@/seo/schemas";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

function findCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = findCity(citySlug);
  if (!city) return {};

  return buildPageMetadata({
    title: city.seoTitle,
    description: city.seoDescription,
    path: cityPath(city.slug),
    keywords: city.keywords,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = findCity(citySlug);
  if (!city) notFound();

  return (
    <>
      <LandingPage city={city} />
      <JsonLd
        data={[
          buildCityServiceSchema(city),
          buildBreadcrumbSchema(city),
          buildFaqSchema(getFaq(city)),
        ]}
      />
    </>
  );
}
