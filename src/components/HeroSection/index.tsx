/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronDown } from "lucide-react";

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
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="w-full min-h-[calc(100vh-80px)] flex flex-col gap-1 items-center justify-center px-10 md:px-20 relative top-20"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:justify-around">
        <div className="flex flex-col max-w-[700px] gap-2">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold uppercase text-center lg:text-start">
            Desenvolvimento de sites profissionais
          </h1>
          <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-black opacity-90 m-0 text-center lg:text-start">
            Destaque sua empresa na internet
          </h2>
        </div>
        <div className="w-[200px] lg:w-[225px] xl:w-[300px] h-[200px] lg:h-[225px] xl:h-[300px]">
          <img
            src="/logo.png"
            className="w-full h-full object-cover"
            alt="Logo ValeBytes"
          />
        </div>
      </div>

      <button
        className="cursor-pointer animate-bounce mt-20"
        onClick={() => scrollToSection("portfolio")}
      >
        <ChevronDown size={50} />
      </button>
    </section>
  );
}
