import { Contact } from "@/components/Contact";
import { Developer } from "@/components/Developer";
import { Differences } from "@/components/Differences";
import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais em Juazeiro BA - ValeBytes",
  description:
    "A ValeBytes cria sites profissionais em Juazeiro-BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
  authors: [
    {
      name: "ValeBytes",
      url: "https://valebytes.com.br/criacao-de-sites-em-juazeiro-ba",
    },
  ],
  publisher: "ValeBytes",
  alternates: {
    canonical: "https://valebytes.com.br/criacao-de-sites-em-juazeiro-ba/",
  },
  keywords: [
    "Criação de sites Juazeiro BA",
    "Desenvolvimento de sites Vale do São Francisco",
    "Empresa criação de sites Juazeiro",
    "Agência web Juazeiro",
    "Sites personalizados Juazeiro BA",
    "Landing pages Juazeiro",
    "Desenvolvimento web Vale do São Francisco",
    "sites para pequenos negócios em Juazeiro",
    "agência de sites em Juazeiro",
    "site profissional para empresas em Juazeiro",
    "desenvolvimento de sites para empresas em juazeiro",
    "criação de sites em Juazeiro-BA",
  ],
  robots: "index, follow",
  openGraph: {
    locale: "pt_BR",
    siteName: "ValeBytes",
    type: "website",
    title: "Criação de Sites Profissionais em Juazeiro BA - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais em Juazeiro-BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    url: "https://valebytes.com.br/criacao-de-sites-em-juazeiro-ba",
    images: "https://valebytes.com.br/images/valebytes-logo-transparent.webp",
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais em Juazeiro BA - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais em Juazeiro-BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    images: "https://valebytes.com.br/images/valebytes-logo-transparent.webp",
  },
  icons: "/favicon.ico",
};

export default function Juazeiro() {
  return (
    <>
      <HeroSection />
      <Portfolio />
      <Differences />
      <Process />
      <Developer />
      <Contact />
    </>
  );
}
