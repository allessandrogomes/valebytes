"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { PortfolioProject } from "@/data/portfolio";
import { revealItemVariants } from "../motion/Reveal";

const IMAGE_PARALLAX_PX = 24;
const CARD_BACKGROUNDS = ["bg-brand-100", "bg-accent", "bg-brand", "bg-paper"];

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [IMAGE_PARALLAX_PX, -IMAGE_PARALLAX_PX],
  );
  const cardNumber = String(index + 1).padStart(2, "0");
  const cardBackground = CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
  const isFeatured = project.isFeatured ?? false;

  return (
    <motion.article
      ref={cardRef}
      variants={revealItemVariants}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard transition-all duration-300 ease-out-soft hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg",
        isFeatured && "md:col-span-2 md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b-2 border-ink p-6 sm:p-8",
          cardBackground,
          isFeatured &&
            "md:aspect-auto md:min-h-[420px] md:w-3/5 md:border-r-2 md:border-b-0",
        )}
      >
        <span className="absolute top-4 left-4 z-10 rounded-md border-2 border-ink bg-white px-2 py-0.5 font-mono text-xs font-medium">
          {cardNumber}
        </span>
        <motion.div
          style={{ y: imageOffset }}
          className="relative h-full w-full"
        >
          <Image
            src={project.image}
            alt={`Site ${project.name} exibido em dispositivos`}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes="(min-width: 1024px) 560px, 92vw"
            className="h-full w-full object-contain transition-transform duration-500 ease-out-soft group-hover:scale-[1.04]"
          />
        </motion.div>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-3 p-6",
          isFeatured && "md:justify-center md:p-10",
        )}
      >
        <p className="font-mono text-xs font-medium tracking-wider text-brand uppercase">
          {project.segment}
        </p>
        <h3
          className={cn(
            "font-display text-2xl font-extrabold tracking-tight sm:text-3xl",
            isFeatured && "md:text-5xl",
          )}
        >
          {project.name}
        </h3>
        <p className="text-ink-soft">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex w-fit items-center gap-1.5 pt-2 font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-brand",
            isFeatured ? "mt-4" : "mt-auto",
          )}
        >
          Ver site no ar
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </motion.article>
  );
}
