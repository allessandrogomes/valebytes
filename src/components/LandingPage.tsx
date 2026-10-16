import { City } from "@/types/City";
import { getFaq } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { HeroSection } from "./HeroSection";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Differences } from "./Differences";
import { Process } from "./Process";
import { Testimonials } from "./Testimonials";
import { Developer } from "./Developer";
import { Faq } from "./Faq";
import { CitiesServed } from "./CitiesServed";
import { Contact } from "./Contact";

type SectionRenderer = (index: string) => React.ReactNode;

function formatSectionIndex(position: number): string {
  return String(position + 1).padStart(2, "0");
}

interface LandingPageProps {
  city?: City;
}

export function LandingPage({ city }: LandingPageProps) {
  const sections = city?.sections;
  const hasTestimonials = testimonials.length > 0;

  const sectionRenderers: SectionRenderer[] = [
    (index) => (
      <Portfolio
        key="portfolio"
        index={index}
        description={sections?.portfolio}
      />
    ),
    (index) => <Services key="services" index={index} />,
    (index) => (
      <Differences
        key="differences"
        index={index}
        content={sections?.desenvolvimento}
      />
    ),
    (index) => (
      <Process key="process" index={index} content={sections?.processo} />
    ),
    ...(hasTestimonials
      ? [(index: string) => <Testimonials key="testimonials" index={index} />]
      : []),
    (index) => (
      <Developer key="developer" index={index} content={sections?.equipe} />
    ),
    (index) => (
      <Faq key="faq" index={index} items={getFaq(city)} cityName={city?.name} />
    ),
    (index) => (
      <CitiesServed key="cities" index={index} currentCitySlug={city?.slug} />
    ),
    (index) => <Contact key="contact" index={index} title={sections?.cta} />,
  ];

  return (
    <>
      <HeroSection city={city} />
      {sectionRenderers.map((renderSection, position) =>
        renderSection(formatSectionIndex(position)),
      )}
    </>
  );
}
