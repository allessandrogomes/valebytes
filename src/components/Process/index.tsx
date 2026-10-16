import { Sections } from "@/types/City";
import { SECTION_IDS } from "@/lib/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";

const DEFAULT_CONTENT: Sections["processo"] = {
  title: "Um processo simples",
  formulario: "Você conta sua ideia e suas necessidades em poucos minutos.",
  reuniao: "Conversamos para definir objetivos, público e direcionamentos.",
  proposta: "Escopo, prazo e investimento apresentados com clareza.",
  desenvolvimento:
    "Construção do site com ajustes durante o processo, até a publicação.",
};

interface ProcessProps {
  index: string;
  content?: Sections["processo"];
}

export function Process({ index, content = DEFAULT_CONTENT }: ProcessProps) {
  return (
    <section
      id={SECTION_IDS.PROCESS}
      className="bg-ink py-20 text-white sm:py-28"
    >
      <Container className="flex flex-col gap-14 sm:gap-20">
        <SectionHeading
          index={index}
          eyebrow="Como funciona"
          title={content.title}
          description="Você envia suas informações, alinhamos expectativas e cuidamos de tudo — com comunicação clara em cada etapa, do formulário à entrega final."
          tone="dark"
        />
        <ProcessTimeline content={content} />
      </Container>
    </section>
  );
}
