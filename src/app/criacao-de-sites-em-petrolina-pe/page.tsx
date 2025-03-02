import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import DifferencesSection from "@/components/DifferencesSection"
import IntroSection from "@/components/IntroSection"
import ProjectsSection from "@/components/ProjectsSection"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Criação de Sites Profissionais em Petrolina PE - ValeBytes',
    description: 'A ValeBytes cria sites profissionais em Petrolina-PE. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
    authors: [{ name: "ValeBytes", url: "https://valebytes.com.br/criacao-de-sites-em-petrolina-pe" }],
    publisher: "ValeBytes",
    alternates: {
        canonical: "https://valebytes.com.br/criacao-de-sites-em-petrolina-pe/"
    },
    keywords: ['Criação de sites Petrolina BA', 'Desenvolvimento de sites Vale do São Francisco', 'Empresa criação de sites Petrolina', 'Agência web Petrolina', 'Sites personalizados Petrolina BA', 'Landing pages Petrolina', 'Desenvolvimento web Vale do São Francisco', 'sites para pequenos negócios em Petrolina', 'agência de sites em Petrolina', 'site profissional para empresas em Petrolina', 'desenvolvimento de sites para empresas em Petrolina', 'criação de sites em Petrolina-BA'],
    robots: 'index, follow',
    openGraph: {
        locale: "pt_BR",
        siteName: "ValeBytes",
        type: 'website',
        title: 'Criação de Sites Profissionais em Petrolina PE - ValeBytes',
        description: 'A ValeBytes cria sites profissionais em Petrolina-PE. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
        url: 'https://valebytes.com.br/criacao-de-sites-em-petrolina-pe',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.webp',
        countryName: "Brasil"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Criação de Sites Profissionais em Petrolina PE - ValeBytes',
        description: 'A ValeBytes cria sites profissionais em Petrolina-PE. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.webp'
    },
    icons: '/favicon.ico'
}

export default function Petrolina() {
    return (
        <>
            <div className="bg-home bg-cover bg-no-repeat w-full absolute z-[-1] h-[1300px]"></div>
            <div className="flex max-w-full flex-col items-center">
                <IntroSection city="em Petrolina-PE"/>
                <ProjectsSection />
                <DifferencesSection />
                <AboutSection />
                <ContactSection />
            </div>
        </>
    )
}