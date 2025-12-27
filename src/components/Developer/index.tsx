/* eslint-disable @next/next/no-img-element */
import { HeaderSection } from "../HeaderSection";
import { SectionLayout } from "../SectionLayout";
import { Linkedin } from "lucide-react";

interface IDeveloper {
  data?: {
    title: string;
    nome: string;
    descricao: string;
  };
}

export function Developer({ data }: IDeveloper) {
  return (
    <SectionLayout id="desenvolvedor">
      <HeaderSection
        title="Conheça nosso time"
        subtitle={
          data
            ? data.title
            : "Por trás de cada projeto, há um desenvolvedor dedicado a transformar suas ideias em realidade digital"
        }
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-8 md:mt-12">
        {/* Foto do desenvolvedor */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#3A5DFF] shadow-lg">
            <img
              src="/alessandro.jpg"
              alt={`${data ? data.nome : "Alessandro Gomes"} - Desenvolvedor Web`}
              className="w-full h-full object-contain scale-111"
            />
          </div>
        </div>

        {/* Informações */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
            {data ? data.nome : "Alessandro Gomes"}
          </h3>
          <p className="text-lg sm:text-xl text-[#3A5DFF] font-semibold mb-4 md:mb-6">
            Desenvolvedor Web Full Stack
          </p>
          <p className="text-sm sm:text-base text-black opacity-90 mb-6 leading-relaxed">
            {data
              ? data.descricao
              : "Desenvolvedor web experiente especializado em criar soluções personalizadas e modernas para empresas. Com foco em qualidade, performance e experiência do usuário, transformo ideias em realidade digital através de código limpo e tecnologias atuais."}
          </p>
          <a
            href="https://linkedin.com/in/allessandrogomes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3A5DFF] text-[#EEEEEE] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#3a5effe1] transition-all duration-300"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5" />
            Ver perfil no LinkedIn
          </a>
        </div>
      </div>
    </SectionLayout>
  );
}
