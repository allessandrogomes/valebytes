import { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import { getFaq } from "@/data/faq";
import { buildPageMetadata } from "@/seo/buildPageMetadata";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/site";
import {
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/seo/schemas";

const HOME_TITLE = `${SITE_TITLE} | ${SITE_NAME}`;

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  isAbsoluteTitle: true,
  keywords: [
    "criação de sites",
    "criação de sites profissionais",
    "desenvolvimento de sites",
    "landing pages",
    "site para empresas",
    "agência de sites",
    "SEO local",
  ],
});

export default function Home() {
  return (
    <>
      <LandingPage />
      <JsonLd
        data={[
          buildOrganizationSchema(),
          buildWebSiteSchema(),
          buildFaqSchema(getFaq()),
        ]}
      />
    </>
  );
}
