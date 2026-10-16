"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { PropsWithChildren } from "react";

const SCROLL_LERP = 0.1;
const HEADER_OFFSET_PX = -76;

export function SmoothScroll({ children }: PropsWithChildren) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {!prefersReducedMotion && (
        <ReactLenis
          root
          options={{
            lerp: SCROLL_LERP,
            anchors: { offset: HEADER_OFFSET_PX },
          }}
        />
      )}
      {children}
    </MotionConfig>
  );
}
