import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="image_src" href="https://valebytes.com.br/images/medium-logo.webp" />
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-T1T72L0SFT" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-T1T72L0SFT');
                    `}
                </Script>
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}