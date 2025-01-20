import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Criação de Sites em Juazeiro e Petrolina | ValeBytes',
    description: 'A ValeBytes é uma empresa especializada em criação de sites em Juazeiro BA e Petrolina PE, oferecendo soluções personalizadas para sua presença online com design e tecnologia de ponta.',
    keywords: ['Criação de sites Juazeiro BA', 'Criação de sites Petrolina PE', 'Desenvolvimento de sites Vale do São Francisco', 'Empresa criação de sites Juazeiro', 'Criar site Petrolina', 'Agência web Juazeiro e Petrolina', 'Sites personalizados Juazeiro BA', 'Soluções web em Petrolina', 'Landing pages Juazeiro', 'Desenvolvimento web Vale do São Francisco', 'sites para pequenos negócios em Petrolina', 'agência de sites em Petrolina e Juazeiro', 'site profissional para empresas em Juazeiro', 'desenvolvimento de sites para empresas em Petrolina-PE', 'criação de sites em Juazeiro-BA'],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        title: 'Criação de Sites em Juazeiro e Petrolina | ValeBytes',
        description: 'A ValeBytes é uma empresa especializada em criação de sites em Juazeiro BA e Petrolina PE, oferecendo soluções personalizadas para sua presença online com design e tecnologia de ponta.',
        url: 'https://www.valebytes.com.br',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Criação de Sites em Juazeiro e Petrolina | ValeBytes',
        description: 'A ValeBytes é uma empresa especializada em criação de sites em Juazeiro BA e Petrolina PE, oferecendo soluções personalizadas para sua presença online com design e tecnologia de ponta.',
        images: 'https://valebytes.com.br/images/valebytes-logo-transparent.png'
    },
    icons: '/favicon.ico'
}

import "./globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                {/* Layout UI */}
                <main>{children}</main>
            </body>
        </html>
    )
}