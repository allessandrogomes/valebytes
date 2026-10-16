import { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const SOCIAL_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "ValeBytes — Criação de sites profissionais para empresas",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  isAbsoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  isAbsoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = isAbsoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: isAbsoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
