import Link from "next/link";
import { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { CitiesList } from "@/components/CitiesServed";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cities } from "@/lib/cities";
import { buildPageMetadata } from "@/seo/buildPageMetadata";
import { CITIES_HUB_PATH, SECTION_IDS } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/seo/schemas";

const HUB_TITLE = "Criação de Sites por Cidade no Nordeste";
const HUB_DESCRIPTION = `Criação de sites profissionais em ${cities.length} cidades do Nordeste. Escolha sua cidade e conheça como a ValeBytes pode colocar sua empresa em destaque no Google.`;

export const metadata: Metadata = buildPageMetadata({
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  path: CITIES_HUB_PATH,
});

export default function CitiesHubPage() {
  return (
    <>
      <section className="relative pt-[var(--header-height)]">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
        <Container className="flex flex-col gap-14 py-16 sm:py-24">
          <div className="flex max-w-4xl flex-col gap-6">
            <nav
              aria-label="Trilha de navegação"
              className="font-mono text-xs tracking-wider text-ink-soft uppercase"
            >
              <Link href="/" className="hover:text-brand">
                Início
              </Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">Criação de sites</span>
            </nav>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance">
              Criação de sites <span className="text-brand">por cidade</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Desenvolvemos sites profissionais, feitos do zero e otimizados
              para o Google, para empresas de {cities.length} cidades do
              Nordeste. O atendimento é 100% online, com a proximidade de quem
              conhece a região.
            </p>
            <a
              href={`#${SECTION_IDS.CONTACT}`}
              className={buttonVariants({ size: "lg", className: "w-fit" })}
            >
              Solicitar orçamento
              <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <CitiesList />
        </Container>
      </section>
      <Contact index="" />
      <JsonLd data={buildBreadcrumbSchema()} />
    </>
  );
}
