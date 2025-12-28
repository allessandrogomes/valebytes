/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      id="not-found"
      className="w-full min-h-[calc(100vh-176px)] mt-20 flex flex-col items-center justify-center gap-2 text-center px-5 lg:px-0"
    >
      <h2 className="text-3xl lg:text-4xl font-bold">Página não encontrada</h2>
      <p className="text-black opacity-90">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <a
        href="/"
        className="flex gap-1 bg-[#3a5dff] text-[#EEEEEE] p-2 rounded-lg mt-5 transition-all duration-300 hover:bg-[#3a5effe1]"
      >
        <ArrowLeft />
        Voltar para a página inicial
      </a>
    </div>
  );
}
