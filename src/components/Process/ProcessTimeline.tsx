"use client";

import { motion, useScroll, useSpring } from "motion/react";
import {
  Code2,
  FileText,
  Handshake,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { Sections } from "@/types/City";
import { RevealGroup, RevealItem } from "../motion/Reveal";

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

interface ProcessTimelineProps {
  content: Sections["processo"];
}

export function ProcessTimeline({ content }: ProcessTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const steps: ProcessStep[] = [
    {
      title: "Formulário rápido",
      description: content.formulario,
      icon: FileText,
    },
    {
      title: "Reunião de alinhamento",
      description: content.reuniao,
      icon: Users,
    },
    {
      title: "Proposta comercial",
      description: content.proposta,
      icon: Handshake,
    },
    {
      title: "Desenvolvimento",
      description: content.desenvolvimento,
      icon: Code2,
    },
  ];

  return (
    <div ref={timelineRef} className="relative">
      <div
        className="absolute top-0 bottom-0 left-7 w-0.5 bg-white/15 lg:top-7 lg:right-0 lg:bottom-auto lg:left-0 lg:h-0.5 lg:w-full"
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full origin-top bg-accent lg:hidden"
          style={{ scaleY: lineProgress }}
        />
        <motion.div
          className="hidden h-full w-full origin-left bg-accent lg:block"
          style={{ scaleX: lineProgress }}
        />
      </div>

      <RevealGroup
        as="ol"
        className="relative grid gap-10 lg:grid-cols-4 lg:gap-8"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <RevealItem
              as="li"
              key={step.title}
              className="flex gap-5 lg:flex-col"
            >
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-white bg-brand text-white shadow-[4px_4px_0_var(--color-accent)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-medium tracking-wider text-accent uppercase">
                  Etapa {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  );
}
