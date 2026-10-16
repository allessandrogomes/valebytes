import { Sections } from "@/types/City";
import { SECTION_IDS } from "@/lib/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../motion/Reveal";

const DEFAULT_CONTENT: Sections["desenvolvimento"] = {
  title: "Desenvolvimento sob medida",
  exclusividade:
    "Design e estrutura criados do zero — nada de templates genéricos. Seu site reflete sua marca de forma única.",
  performance:
    "Código otimizado e tecnologias atuais garantem carregamento rápido, alto desempenho e capacidade de crescimento.",
  liberdade:
    "Sem limitações de plataformas prontas. Seu site evolui com novos recursos e adaptações sempre que o negócio precisar.",
};

interface DifferencesProps {
  index: string;
  content?: Sections["desenvolvimento"];
}

export function Differences({
  index,
  content = DEFAULT_CONTENT,
}: DifferencesProps) {
  const differences = [
    { title: "Exclusividade", description: content.exclusividade },
    { title: "Performance", description: content.performance },
    { title: "Liberdade", description: content.liberdade },
  ];

  return (
    <section id={SECTION_IDS.DIFFERENCES} className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          index={index}
          eyebrow="Diferenciais"
          title={content.title}
          description="Sites feitos do zero, com código próprio e tecnologias modernas para entregar mais qualidade e liberdade de evolução."
        />

        <RevealGroup
          as="ol"
          className="grid border-t-2 border-ink lg:grid-cols-3"
        >
          {differences.map((difference, index) => (
            <RevealItem
              as="li"
              key={difference.title}
              className="group flex flex-col gap-4 border-b-2 border-ink py-8 lg:border-b-0 lg:px-8 lg:py-10 lg:not-first:border-l-2 lg:first:pl-0"
            >
              <span
                className="text-outline font-display text-7xl leading-none font-extrabold text-brand group-hover:[-webkit-text-fill-color:currentColor] sm:text-8xl"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-3xl font-extrabold tracking-tight">
                {difference.title}
              </h3>
              <p className="max-w-sm leading-relaxed text-ink-soft">
                {difference.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
