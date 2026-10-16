"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/site";

const OBSERVER_ROOT_MARGIN = "-30% 0px -60% 0px";

export function useActiveSection(): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionElements = Object.values(SECTION_IDS)
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) return;

        setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: OBSERVER_ROOT_MARGIN, threshold: 0 },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
