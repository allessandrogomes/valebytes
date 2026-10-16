import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cityPath, SECTION_IDS } from "@/lib/site";
import { getCitiesByState } from "@/lib/citiesByState";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./motion/Reveal";

interface CitiesServedProps {
  index?: string;
  currentCitySlug?: string;
}

export function CitiesList({ currentCitySlug }: { currentCitySlug?: string }) {
  const stateGroups = getCitiesByState();

  return (
    <RevealGroup className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {stateGroups.map((group) => (
        <RevealItem key={group.stateCode} className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-ink-soft uppercase">
            <span className="rounded border-2 border-ink bg-ink px-1.5 py-0.5 text-white">
              {group.stateCode}
            </span>
            {group.stateName}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.cities.map((city) => {
              const isCurrentCity = city.slug === currentCitySlug;

              return (
                <li key={city.slug}>
                  <Link
                    href={cityPath(city.slug)}
                    aria-current={isCurrentCity ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-lg border-2 border-ink px-3 py-1.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hard-sm",
                      isCurrentCity
                        ? "bg-brand text-white"
                        : "bg-white hover:bg-brand-100",
                    )}
                  >
                    Sites em {city.name}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function CitiesServed({
  index = "",
  currentCitySlug,
}: CitiesServedProps) {
  return (
    <section id={SECTION_IDS.CITIES} className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          index={index}
          eyebrow="Cidades atendidas"
          title="Criação de sites em todo o Nordeste"
          description="Atendimento 100% online, com a proximidade de quem conhece a região. Escolha sua cidade e veja como podemos ajudar sua empresa a crescer na internet."
        />
        <CitiesList currentCitySlug={currentCitySlug} />
      </Container>
    </section>
  );
}
