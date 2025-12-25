'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    closeMenu();
  };

  useEffect(() => {
    const sections = [
      'inicio',
      'portfolio',
      'diferenciais',
      'como-funciona',
      'desenvolvedor',
      'contato',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <header className="fixed z-99 w-full bg-[#FAFAFA] flex justify-between items-center h-20 px-10 md:px-20">
        {/* Logo */}
        <span className="uppercase font-bold text-xl">ValeBytes</span>

        {/* Menu Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 xl:gap-8 font-medium">
            <li
              onClick={() => scrollToSection('inicio')}
              className={`cursor-pointer border-b-2 transition-all duration-300 hover:border-[#3A5DFF] ${
                activeSection === 'inicio'
                  ? 'border-[#3A5DFF]'
                  : 'border-transparent'
              }`}
            >
              Início
            </li>
            <li
              onClick={() => scrollToSection('portfolio')}
              className={`cursor-pointer border-b-2 transition-all duration-300 hover:border-[#3A5DFF] ${
                activeSection === 'portfolio'
                  ? 'border-[#3A5DFF]'
                  : 'border-transparent'
              }`}
            >
              Portfólio
            </li>
            <li
              onClick={() => scrollToSection('diferenciais')}
              className={`cursor-pointer border-b-2 transition-all duration-300 hover:border-[#3A5DFF] ${
                activeSection === 'diferenciais'
                  ? 'border-[#3A5DFF]'
                  : 'border-transparent'
              }`}
            >
              Diferenciais
            </li>
            <li
              onClick={() => scrollToSection('como-funciona')}
              className={`cursor-pointer border-b-2 transition-all duration-300 hover:border-[#3A5DFF] ${
                activeSection === 'como-funciona'
                  ? 'border-[#3A5DFF]'
                  : 'border-transparent'
              }`}
            >
              Como funciona
            </li>
            <li
              onClick={() => scrollToSection('desenvolvedor')}
              className={`cursor-pointer border-b-2 transition-all duration-300 hover:border-[#3A5DFF] ${
                activeSection === 'desenvolvedor'
                  ? 'border-[#3A5DFF]'
                  : 'border-transparent'
              }`}
            >
              Nosso time
            </li>
          </ul>
        </nav>

        {/* Botão Desktop */}
        <button
          onClick={() => scrollToSection('contato')}
          className="hidden lg:block bg-[#3A5DFF] text-[#FAFAFA] cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-[#3a5effe1]"
        >
          Solicitar orçamento
        </button>

        {/* Menu Hamburguer Mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`bg-black h-0.5 w-6 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`bg-black h-0.5 w-6 rounded-full my-1.5 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`bg-black h-0.5 w-6 rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </header>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden fixed pb-8 top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 z-50 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="p-6">
          <ul className="flex flex-col gap-6 font-medium">
            <li
              className={`cursor-pointer py-2 border-b transition-all duration-300 hover:text-[#3A5DFF] hover:border-[#3A5DFF] ${
                activeSection === 'inicio'
                  ? 'text-[#3A5DFF] border-[#3A5DFF]'
                  : 'border-gray-100'
              }`}
              onClick={() => scrollToSection('inicio')}
            >
              Início
            </li>
            <li
              className={`cursor-pointer py-2 border-b transition-all duration-300 hover:text-[#3A5DFF] hover:border-[#3A5DFF] ${
                activeSection === 'portfolio'
                  ? 'text-[#3A5DFF] border-[#3A5DFF]'
                  : 'border-gray-100'
              }`}
              onClick={() => scrollToSection('portfolio')}
            >
              Portfólio
            </li>
            <li
              className={`cursor-pointer py-2 border-b transition-all duration-300 hover:text-[#3A5DFF] hover:border-[#3A5DFF] ${
                activeSection === 'diferenciais'
                  ? 'text-[#3A5DFF] border-[#3A5DFF]'
                  : 'border-gray-100'
              }`}
              onClick={() => scrollToSection('diferenciais')}
            >
              Diferenciais
            </li>
            <li
              className={`cursor-pointer py-2 border-b transition-all duration-300 hover:text-[#3A5DFF] hover:border-[#3A5DFF] ${
                activeSection === 'como-funciona'
                  ? 'text-[#3A5DFF] border-[#3A5DFF]'
                  : 'border-gray-100'
              }`}
              onClick={() => scrollToSection('como-funciona')}
            >
              Como funciona
            </li>
            <li
              className={`cursor-pointer py-2 border-b transition-all duration-300 hover:text-[#3A5DFF] hover:border-[#3A5DFF] ${
                activeSection === 'desenvolvedor'
                  ? 'text-[#3A5DFF] border-[#3A5DFF]'
                  : 'border-gray-100'
              }`}
              onClick={() => scrollToSection('desenvolvedor')}
            >
              Nosso time
            </li>
          </ul>
        </nav>
        {/* Botão Mobile */}
        <button
          className="ml-6 bg-[#3A5DFF] text-[#FAFAFA] cursor-pointer p-3 rounded-lg transition-all duration-300 hover:bg-[#3a5effe1]"
          onClick={() => scrollToSection('contato')}
        >
          Solicitar orçamento
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 top-20 bg-black/40 backdrop-blur-xs"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
