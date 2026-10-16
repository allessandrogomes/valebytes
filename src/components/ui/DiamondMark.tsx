"use client";

import { motion } from "motion/react";

const LEFT_DIAMOND_PATH =
  "M102 360 L268 172 Q295 142 322 172 L488 360 L322 548 Q295 578 268 548 Z";
const RIGHT_DIAMOND_PATH =
  "M232 360 L398 172 Q425 142 452 172 L618 360 L452 548 Q425 578 398 548 Z";
const STROKE_WIDTH = 52;
const DRAW_DURATION_S = 1.4;
const SECOND_PATH_DELAY_S = 0.25;

interface DiamondMarkProps {
  className?: string;
  animated?: boolean;
  title?: string;
}

export function DiamondMark({
  className,
  animated = false,
  title,
}: DiamondMarkProps) {
  const drawTransition = (delay: number) => ({
    pathLength: {
      duration: DRAW_DURATION_S,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <svg
      viewBox="70 120 580 480"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE_WIDTH}
        strokeLinejoin="miter"
      >
        <motion.path
          d={LEFT_DIAMOND_PATH}
          initial={animated ? { pathLength: 0 } : false}
          animate={{ pathLength: 1 }}
          transition={drawTransition(0)}
        />
        <motion.path
          d={RIGHT_DIAMOND_PATH}
          initial={animated ? { pathLength: 0 } : false}
          animate={{ pathLength: 1 }}
          transition={drawTransition(SECOND_PATH_DELAY_S)}
        />
      </g>
    </svg>
  );
}
