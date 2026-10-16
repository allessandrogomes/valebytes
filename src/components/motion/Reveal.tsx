"use client";

import { motion, type Variants } from "motion/react";
import { PropsWithChildren } from "react";

const REVEAL_OFFSET_PX = 28;
const REVEAL_DURATION_S = 0.6;
const STAGGER_INTERVAL_S = 0.08;
const VIEWPORT_MARGIN = "0px 0px -12% 0px";
export const EASE_OUT_SOFT = [0.22, 1, 0.36, 1] as const;

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET_PX },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION_S, ease: EASE_OUT_SOFT },
  },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER_INTERVAL_S } },
};

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={revealItemVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "ul" | "ol";
}

export function RevealGroup({
  children,
  className,
  as = "div",
}: RevealGroupProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      variants={staggerContainerVariants}
    >
      {children}
    </MotionTag>
  );
}

interface RevealItemProps extends PropsWithChildren {
  className?: string;
  as?: "div" | "li" | "article";
}

export function RevealItem({
  children,
  className,
  as = "div",
}: RevealItemProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag className={className} variants={revealItemVariants}>
      {children}
    </MotionTag>
  );
}
