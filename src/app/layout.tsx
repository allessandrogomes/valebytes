import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Criação de Sites Profissionais para Sua Empresa - ValeBytes',
    description: 'A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
    authors: [{ name: "ValeBytes", url: "https://valebytes.com.br/" }],
    publisher: "ValeBytes",
    keywords: ['Criação de sites Juazeiro BA', 'Criação de sites Petrolina PE', 'Desenvolvimento de sites Vale do São Francisco', 'Empresa criação de sites Juazeiro', 'Criar site Petrolina', 'Agência web Juazeiro e Petrolina', 'Sites personalizados Juazeiro BA', 'Soluções web em Petrolina', 'Landing pages Juazeiro', 'Desenvolvimento web Vale do São Francisco', 'sites para pequenos negócios em Petrolina', 'agência de sites em Petrolina e Juazeiro', 'site profissional para empresas em Juazeiro', 'desenvolvimento de sites para empresas em Petrolina-PE', 'criação de sites em Juazeiro-BA'],
    robots: 'index, follow',
    openGraph: {
        locale: "pt_BR",
        siteName: "ValeBytes",
        type: 'website',
        title: 'Criação de Sites Profissionais para Sua Empresa - ValeBytes',
        description: 'A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
        url: 'https://www.valebytes.com.br',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.webp',
        countryName: "Brasil"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Criação de Sites Profissionais para Sua Empresa - ValeBytes',
        description: 'A ValeBytes cria sites profissionais em Petrolina - PE e Juazeiro - BA. Sites modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.webp'
    },
    icons: '/favicon.ico'
}

import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="canonical" href="https://valebytes.com.br/" />
                <link rel="image_src" href="https://valebytes.com.br/images/medium-logo.webp"/>
                <link rel="preload" href="/fonts/clash-display/ClashDisplay-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}