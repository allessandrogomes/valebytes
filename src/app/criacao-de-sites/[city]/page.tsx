import { Contact } from "@/components/Contact";
import { Developer } from "@/components/Developer";
import { Differences } from "@/components/Differences";
import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { cities } from "@/lib/cities";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

// export function generateMetadata({ params }: { city: string }) {
//   const city = cities.find((c) => c.slug === params.city);

//   if (!city) return {};

//   return {
//     title: city.seoTitle,
//     description: city.seoDescription,
//   };
// }

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const paramsResponse = await params;
  const cityData = cities.find((c) => c.slug === paramsResponse.city);

  if (!cityData) notFound();

  return (
    <>
      <HeroSection city={cityData} />
      <Portfolio />
      <Differences />
      <Process />
      <Developer />
      <Contact />
    </>
  );
}
