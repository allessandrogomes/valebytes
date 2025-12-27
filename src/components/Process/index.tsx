import { HeaderSection } from "../HeaderSection";
import { SectionLayout } from "../SectionLayout";
import { FileText, Users, DollarSign, Code } from "lucide-react";
import { IProcessStep, ProcessStep } from "./ProcessStep";
import { ArrowConnector } from "./ArrowConector";

interface IProcess {
  data?: {
    title: string;
    formulario: string;
    reuniao: string;
    proposta: string;
    desenvolvimento: string;
  };
}

export function Process({ data }: IProcess) {
  const steps: IProcessStep[] = [
    {
      icon: <FileText size={32} />,
      title: "Formulário rápido",
      description: data
        ? data.formulario
        : "Entendemos sua ideia e necessidades",
    },
    {
      icon: <Users size={32} />,
      title: "Reunião de alinhamento",
      description: data
        ? data.reuniao
        : "Definimos objetivos e direcionamentos",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Proposta comercial",
      description: data
        ? data.proposta
        : "Escopo, prazo e investimento com clareza",
    },
    {
      icon: <Code size={32} />,
      title: "Desenvolvimento",
      description: data
        ? data.desenvolvimento
        : "Construção do site com ajustes durante o processo",
    },
  ];

  return (
    <SectionLayout id="como-funciona">
      <HeaderSection
        title="Um processo simples"
        subtitle={
          data
            ? data.title
            : "Você envia suas informações, alinhamos expectativas e cuidamos de tudo. Do formulário à entrega final, o site é desenvolvido com ajustes personalizados e comunicação clara em cada etapa"
        }
      />

      <div className="flex flex-col lg:flex-row items-start md:items-center gap-6 md:gap-8 mt-8 md:mt-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center w-full md:w-auto md:flex-1"
          >
            <ProcessStep
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
            {index < steps.length - 1 && <ArrowConnector />}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
