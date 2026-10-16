import { portfolioProjects } from "@/data/portfolio";
import { SECTION_IDS } from "@/lib/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup } from "../motion/Reveal";
import { PortfolioCard } from "./PortfolioCard";

const DEFAULT_DESCRIPTION =
  "Uma seleção dos sites que desenvolvemos do zero — cada um com identidade própria, criado para destacar o que torna cada negócio único.";

interface PortfolioProps {
  index: string;
  description?: string;
}

export function Portfolio({ index, description }: PortfolioProps) {
  return (
    <section id={SECTION_IDS.PORTFOLIO} className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          index={index}
          eyebrow="Portfólio"
          title="Projetos que saíram do papel"
          description={description ?? DEFAULT_DESCRIPTION}
        />
        <RevealGroup className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.url} project={project} index={index} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
