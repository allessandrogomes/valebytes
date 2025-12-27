import { HeaderSection } from "../HeaderSection";
import { SectionLayout } from "../SectionLayout";
import { PenTool, Rocket, Layers } from "lucide-react";
import { DifferencesCard, IDifferencesCard } from "./Card";

interface IDifferences {
  data?: {
    title: string;
    exclusividade: string;
    performance: string;
    liberdade: string;
  };
}

export function Differences({ data }: IDifferences) {
  const differencesContent: IDifferencesCard[] = [
    {
      icon: <PenTool size={32} />,
      title: "Exclusividade",
      description: data
        ? data.exclusividade
        : "Design e estrutura criados do zero – nada de templates genéricos. Seu site reflete sua marca de forma única",
    },
    {
      icon: <Rocket size={32} />,
      title: "Performance",
      description: data
        ? data.performance
        : "Código otimizado e tecnologias atuais garantem carregamento rápido, alto desempenho e capacidade de crescimento",
    },
    {
      icon: <Layers size={32} />,
      title: "Liberdade",
      description: data
        ? data.liberdade
        : "Sem limitações de plataformas prontas. Seu site evolui com novos recursos e adaptações sempre que o negócio precisar",
    },
  ];
  return (
    <SectionLayout id="diferenciais">
      <HeaderSection
        title="Desenvolvimento sob medida"
        subtitle={
          data
            ? data.title
            : "Sites feitos do zero, com código próprio e tecnologias modernas para entregar mais qualidade e liberdade de evolução"
        }
      />

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {differencesContent.map((difference, index) => (
          <DifferencesCard
            key={index}
            icon={difference.icon}
            title={difference.title}
            description={difference.description}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
