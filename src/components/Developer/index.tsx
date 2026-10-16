import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Sections } from "@/types/City";
import { LINKEDIN_URL, SECTION_IDS } from "@/lib/site";
import { buttonVariants } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../motion/Reveal";

const DEFAULT_CONTENT: Sections["equipe"] = {
  title: "Quem está por trás",
  nome: "Alessandro Gomes",
  descricao:
    "Desenvolvedor web full stack especializado em criar soluções personalizadas e modernas para empresas. Com foco em qualidade, performance e experiência do usuário, transformo ideias em realidade digital com código limpo e tecnologias atuais.",
};

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "SEO técnico",
];
const DEVELOPER_ROLE_SUFFIX = " - Desenvolvedor Web";

interface DeveloperProps {
  index: string;
  content?: Sections["equipe"];
}

export function Developer({
  index,
  content = DEFAULT_CONTENT,
}: DeveloperProps) {
  const developerName = content.nome.replace(DEVELOPER_ROLE_SUFFIX, "");

  return (
    <section id={SECTION_IDS.DEVELOPER} className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-ink bg-brand"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white">
            <Image
              src="/alessandro.webp"
              alt={`${developerName}, desenvolvedor web da ValeBytes`}
              width={800}
              height={725}
              sizes="(min-width: 1024px) 480px, 90vw"
              className="aspect-[4/4.2] h-auto w-full object-cover object-top grayscale-[15%] transition duration-500 hover:grayscale-0"
            />
          </div>
          <span className="absolute -bottom-5 left-6 rounded-md border-2 border-ink bg-accent px-3 py-1.5 font-mono text-xs font-medium shadow-hard-sm sm:text-sm">
            dev full stack
          </span>
        </Reveal>

        <div className="flex flex-col gap-8">
          <SectionHeading
            index={index}
            eyebrow="Quem faz"
            title={content.title}
          />
          <Reveal className="flex flex-col gap-6">
            <div>
              <p className="font-display text-3xl font-extrabold tracking-tight">
                {developerName}
              </p>
              <p className="font-mono text-sm font-medium tracking-wider text-brand uppercase">
                Desenvolvedor Web Full Stack
              </p>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              {content.descricao}
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "ink", className: "w-fit" })}
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              Ver perfil no LinkedIn
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
