"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CITIES_HUB_PATH, NAV_LINKS, SECTION_IDS } from "@/lib/site";
import { buttonVariants } from "../ui/Button";
import { DiamondMark } from "../ui/DiamondMark";
import { EASE_OUT_SOFT } from "../motion/Reveal";
import { useActiveSection } from "./useActiveSection";

const SCROLLED_THRESHOLD_PX = 12;
const CITY_PAGE_PATTERN = new RegExp(`^${CITIES_HUB_PATH}[^/]+/?$`);

function isLandingPage(pathname: string): boolean {
  return pathname === "/" || CITY_PAGE_PATTERN.test(pathname);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const lenis = useLenis();

  const sectionHrefPrefix = isLandingPage(pathname) ? "" : "/";
  const sectionHref = (sectionId: string) =>
    `${sectionHrefPrefix}#${sectionId}`;

  useEffect(() => {
    const updateScrolledState = () =>
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD_PX);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (isMenuOpen) {
      lenis?.stop();
      return;
    }

    lenis?.start();
  }, [isMenuOpen, lenis]);

  const closeMenu = () => {
    lenis?.start();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b-2 bg-paper/90 backdrop-blur-md transition-colors duration-300",
          isScrolled || isMenuOpen ? "border-ink" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a
            href={sectionHref(SECTION_IDS.HOME)}
            className="flex items-center gap-2.5"
            onClick={closeMenu}
          >
            <DiamondMark className="h-7 w-auto text-brand" />
            <span className="font-display text-xl font-extrabold tracking-tight uppercase">
              ValeBytes
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id} className="relative">
                    <a
                      href={sectionHref(link.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative z-10 block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-white" : "text-ink hover:text-brand",
                      )}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-md bg-ink"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={sectionHref(SECTION_IDS.CONTACT)}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden lg:inline-flex",
            )}
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-ink bg-white shadow-hard-sm lg:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-ink transition-transform duration-300",
                isMenuOpen && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ink transition-transform duration-300",
                isMenuOpen && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-5 pt-8 pb-10 sm:px-8 lg:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE_OUT_SOFT }}
            data-lenis-prevent
          >
            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * index,
                      duration: 0.4,
                      ease: EASE_OUT_SOFT,
                    }}
                    className="border-b-2 border-ink"
                  >
                    <a
                      href={sectionHref(link.id)}
                      onClick={closeMenu}
                      className="flex items-baseline justify-between py-4 font-display text-4xl font-extrabold tracking-tight"
                    >
                      {link.label}
                      <span className="font-mono text-sm font-medium text-brand">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a
              href={sectionHref(SECTION_IDS.CONTACT)}
              onClick={closeMenu}
              className={cn(buttonVariants({ size: "lg" }), "mt-10 w-full")}
            >
              Solicitar orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
