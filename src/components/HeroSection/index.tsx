"use client"

import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="w-full min-h-[calc(100vh-80px)] flex flex-col gap-1 items-center justify-center px-10 md:px-20 relative"
    >
      <div className="flex flex-col xl:items-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold uppercase">
          Desenvolvimento de sites profissionais
        </h1>
        <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-black opacity-90 m-0">
          Destaque sua empresa na internet
        </h2>
      </div>

      <button
        className="absolute cursor-pointer bottom-0 animate-bounce"
        onClick={() => scrollToSection('portfolio')}
      >
        <ChevronDown size={50} />
      </button>
    </section>
  );
}
