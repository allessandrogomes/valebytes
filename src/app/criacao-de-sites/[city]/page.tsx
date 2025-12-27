import { Contact } from "@/components/Contact";
import { Developer } from "@/components/Developer";
import { Differences } from "@/components/Differences";
import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { cities } from "@/lib/cities";
import { generateLocalBusinessSchema } from "@/seo/localBusinessSchema";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

type generateMetadaProps = {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: generateMetadaProps): Promise<Metadata> {
  const paramsResponse = await params;
  const cityData = cities.find((c) => c.slug === paramsResponse.city);
  const url = `https://valebytes.com.br/criacao-de-sites/${cityData?.slug}`;

  return {
    title: cityData?.seoTitle,
    description: cityData?.seoDescription,
    keywords: cityData?.keywords,
    openGraph: {
      title: cityData?.seoTitle,
      description: cityData?.seoDescription,
      url,
      siteName: "ValeBytes",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://valebytes.com.br/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: cityData?.seoTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: cityData?.seoTitle,
      description: cityData?.seoDescription,
      images: ["https://valebytes.com.br/opengraph-image.jpg"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const paramsResponse = await params;
  const cityData = cities.find((c) => c.slug === paramsResponse.city);

  if (!cityData) notFound();

  const schema = generateLocalBusinessSchema(cityData);

  return (
    <>
      <HeroSection city={cityData} />
      <Portfolio data={cityData.sections.portfolio} />
      <Differences data={cityData.sections.desenvolvimento} />
      <Process data={cityData.sections.processo} />
      <Developer data={cityData.sections.equipe} />
      <Contact data={cityData.sections.cta} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
