import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'ValeBytes - Seu negócio Web no Vale do São Francisco',
    description: 'A ValeBytes oferece soluções em desenvolvimento de sites, landing pages e sistemas web personalizados em Juazeiro e Petrolina. Transforme sua presença online no Vale do São Francisco com tecnologia de ponta e design exclusivo.',
    keywords: ['página institucional', 'landing page', 'landing page juazeiro', 'landing page petrolina', 'empresa de tecnologia juazeiro', 'empresa de tecnologia petrolina'],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        title: 'ValeBytes - Seu negócio Web no Vale do São Francisco',
        description: 'A ValeBytes oferece soluções em desenvolvimento de sites, landing pages e sistemas web personalizados em Juazeiro e Petrolina. Transforme sua presença online no Vale do São Francisco com tecnologia de ponta e design exclusivo.',
        url: 'https://www.valebytes.com.br',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ValeBytes - Seu negócio Web no Vale do São Francisco',
        description: 'A ValeBytes oferece soluções em desenvolvimento de sites, landing pages e sistemas web personalizados em Juazeiro e Petrolina. Transforme sua presença online no Vale do São Francisco com tecnologia de ponta e design exclusivo.',
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