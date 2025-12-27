import "@fontsource/poppins";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { HeroSection } from "@/components/HeroSection";
import { Portfolio } from "@/components/Portfolio";
import { Differences } from "@/components/Differences";
import { Process } from "@/components/Process";
import { Developer } from "@/components/Developer";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
  description:
    "A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
  authors: [{ name: "ValeBytes", url: "https://valebytes.com.br/" }],
  publisher: "ValeBytes",
  alternates: {
    canonical: "https://valebytes.com.br/",
  },
  keywords: [
    "Criação de sites Juazeiro BA",
    "Criação de sites Petrolina PE",
    "Desenvolvimento de sites Vale do São Francisco",
    "Empresa criação de sites Juazeiro",
    "Criar site Petrolina",
    "Agência web Juazeiro e Petrolina",
    "Sites personalizados Juazeiro BA",
    "Soluções web em Petrolina",
    "Landing pages Juazeiro",
    "Desenvolvimento web Vale do São Francisco",
    "sites para pequenos negócios em Petrolina",
    "agência de sites em Petrolina e Juazeiro",
    "site profissional para empresas em Juazeiro",
    "desenvolvimento de sites para empresas em Petrolina-PE",
    "criação de sites em Juazeiro-BA",
  ],
  robots: "index, follow",
  openGraph: {
    locale: "pt_BR",
    siteName: "ValeBytes",
    type: "website",
    title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    url: "https://www.valebytes.com.br",
    images: "https://valebytes.com.br/images/valebytes-logo-transparent.webp",
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    images: "https://valebytes.com.br/images/valebytes-logo-transparent.webp",
  },
  icons: "/favicon.ico",
};

export default function Page() {
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
