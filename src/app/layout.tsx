import "@fontsource/poppins";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
  description:
    "A ValeBytes cria sites profissionais, modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
  authors: [{ name: "ValeBytes", url: "https://valebytes.com.br/" }],
  publisher: "ValeBytes",
  alternates: {
    canonical: "https://valebytes.com.br/",
  },
  keywords: [
    "Criação de sites",
    "Criação de sites profissionais",
    "Desenvolvimento de sites",
    "Empresa criação de sites",
    "Criar site",
    "Agência web",
    "Sites personalizados",
    "Soluções web",
    "Landing pages",
    "Desenvolvimento web",
    "sites para pequenos negócios",
    "agência de sites",
    "site profissional para empresas",
    "desenvolvimento de sites",
    "criação de website",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    locale: "pt_BR",
    siteName: "ValeBytes",
    type: "website",
    title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais, modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    url: "https://www.valebytes.com.br",
    images: "https://valebytes.com.br/images/opengraph-image.jpg",
    countryName: "Brasil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais para Sua Empresa - ValeBytes",
    description:
      "A ValeBytes cria sites profissionais, modernos, responsivos e otimizados para destacar sua empresa e atrair mais clientes.",
    images: "https://valebytes.com.br/images/opengraph-image.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="ValeBytes" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T1T72L0SFT"
        />
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
  );
}
