"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, Code2, Search, Smartphone } from "lucide-react";
import { Fragment, useRef } from "react";
import { City } from "@/types/City";
import { SECTION_IDS, SITE_REGION, WHATSAPP_URL } from "@/lib/site";
import { marqueeServices } from "@/data/services";
import { buttonVariants } from "../ui/Button";
import { Container } from "../ui/Container";
import { DiamondMark } from "../ui/DiamondMark";
import { Marquee } from "../ui/Marquee";
import { EASE_OUT_SOFT } from "../motion/Reveal";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

const WORD_STAGGER_S = 0.06;
const WORD_DURATION_S = 0.7;
const CONTENT_DELAY_S = 0.45;
const VISUAL_PARALLAX_PX = 80;

const HIGHLIGHTS = [
  { icon: Code2, label: "Código 100% próprio" },
  { icon: Search, label: "Otimizado para o Google" },
  { icon: Smartphone, label: "Pensado para o celular" },
];

interface HeroSectionProps {
  city?: City;
}

function AnimatedWords({
  text,
  startIndex = 0,
}: {
  text: string;
  startIndex?: number;
}) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
        <motion.span
          className="inline-block"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{
            duration: WORD_DURATION_S,
            delay: (startIndex + index) * WORD_STAGGER_S,
            ease: EASE_OUT_SOFT,
          }}
        >
          {word}
        </motion.span>
      </span>{" "}
    </Fragment>
  ));
}

export function HeroSection({ city }: HeroSectionProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start start", "end start"],
  });
  const visualOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, VISUAL_PARALLAX_PX],
  );

  const headlineLead = "Criação de sites profissionais";
  const headlineHighlight = city ? `em ${city.name}` : "para sua empresa";
  const leadWordCount = headlineLead.split(" ").length;
  const subtitle = city
    ? (city.intro ??
      `Sites feitos do zero, sem template, para empresas de ${city.name} - ${city.state} que querem ser encontradas no Google e transformar visitas em clientes.`)
    : "Sites feitos do zero, sem template, rápidos e prontos para o Google — para sua empresa ser encontrada e transformar visitas em clientes.";

  return (
    <section
      id={SECTION_IDS.HOME}
      className="relative pt-[var(--header-height)]"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />

      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-24">
        <div className="flex flex-col gap-7">
          <motion.p
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 font-mono text-xs font-medium tracking-wider uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_SOFT }}
          >
            <span
              className="h-2 w-2 rounded-full bg-brand"
              aria-hidden="true"
            />
            {SITE_REGION}
          </motion.p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-balance">
            <AnimatedWords text={headlineLead} />
            <span className="relative isolate inline-block">
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-[-0.12em] inset-y-[0.04em] -z-10 origin-left -rotate-1 rounded-md border-2 border-ink bg-brand shadow-hard"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.6,
                  delay: CONTENT_DELAY_S,
                  ease: EASE_OUT_SOFT,
                }}
              />
              <span className="text-white">
                <AnimatedWords
                  text={headlineHighlight}
                  startIndex={leadWordCount}
                />
              </span>
            </span>
          </h1>

          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: CONTENT_DELAY_S + 0.15,
              ease: EASE_OUT_SOFT,
            }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`#${SECTION_IDS.CONTACT}`}
                className={buttonVariants({ size: "lg" })}
              >
                Solicitar orçamento
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "light", size: "lg" })}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          ref={visualRef}
          style={{ y: visualOffset }}
          className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px]"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-ink bg-accent"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 24, y: 24 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT_SOFT }}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-ink bg-brand"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 12, y: 12 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_SOFT }}
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-ink bg-white">
            <DiamondMark animated className="w-3/4 text-brand" />
          </div>
          <motion.span
            className="absolute -top-4 -left-4 rotate-[-6deg] rounded-md border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-medium text-white shadow-hard-sm sm:text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1, ease: EASE_OUT_SOFT }}
          >
            {"<feito do zero />"}
          </motion.span>
          <motion.span
            className="absolute -right-3 bottom-10 rotate-[4deg] rounded-md border-2 border-ink bg-white px-3 py-1.5 font-mono text-xs font-medium shadow-hard-sm sm:text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.15, ease: EASE_OUT_SOFT }}
          >
            sem template ✦
          </motion.span>
        </motion.div>
      </Container>

      <Marquee items={marqueeServices} className="bg-brand text-white" />
    </section>
  );
}
