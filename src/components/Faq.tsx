import { Plus } from "lucide-react";
import { FaqItem } from "@/types/City";
import { SECTION_IDS } from "@/lib/site";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./motion/Reveal";

interface FaqProps {
  index: string;
  items: FaqItem[];
  cityName?: string;
}

export function Faq({ index, items, cityName }: FaqProps) {
  const title = cityName
    ? `Dúvidas sobre criação de sites em ${cityName}`
    : "Perguntas frequentes";

  return (
    <section
      id={SECTION_IDS.FAQ}
      className="border-t-2 border-ink bg-white py-20 sm:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          index={index}
          eyebrow="Dúvidas"
          title={title}
          description="Não encontrou o que procurava? Chame no WhatsApp e tire suas dúvidas direto com quem desenvolve."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <RevealGroup as="ul" className="flex flex-col gap-4">
          {items.map((item) => (
            <RevealItem as="li" key={item.question}>
              <details className="faq-item group rounded-xl border-2 border-ink bg-paper transition-shadow duration-300 open:bg-white open:shadow-hard">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-display text-lg font-bold tracking-tight sm:p-6 sm:text-xl">
                  {item.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-white transition-all duration-300 group-open:rotate-45 group-open:bg-accent">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </summary>
                <p className="px-5 pb-6 leading-relaxed text-ink-soft sm:px-6">
                  {item.answer}
                </p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
