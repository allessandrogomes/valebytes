export const SITE_URL = "https://valebytes.com.br";
export const SITE_NAME = "ValeBytes";
export const SITE_TITLE = "Criação de Sites Profissionais para Sua Empresa";
export const SITE_DESCRIPTION =
  "A ValeBytes cria sites profissionais, modernos, rápidos e otimizados para o Google — feitos do zero, sem template, para destacar sua empresa e atrair mais clientes.";
export const SITE_REGION = "Juazeiro – BA · Vale do São Francisco";

export const CONTACT_PHONE_DISPLAY = "(74) 99925-8446";
export const CONTACT_PHONE_E164 = "+5574999258446";
export const CONTACT_EMAIL = "contato@valebytes.com.br";
export const WHATSAPP_URL = "https://wa.me/5574999258446";
export const CONTACT_API_URL =
  "https://valebytes-api.vercel.app/api/send-email";

export const INSTAGRAM_URL = "https://instagram.com/valebytes";
export const LINKEDIN_URL = "https://linkedin.com/in/allessandrogomes";

export const GOOGLE_ANALYTICS_ID = "G-T1T72L0SFT";

export const CITIES_HUB_PATH = "/criacao-de-sites/";

export function absoluteUrl(path: string): string {
  const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const pathWithTrailingSlash = pathWithLeadingSlash.endsWith("/")
    ? pathWithLeadingSlash
    : `${pathWithLeadingSlash}/`;

  return `${SITE_URL}${pathWithTrailingSlash}`;
}

export function cityPath(slug: string): string {
  return `${CITIES_HUB_PATH}${slug}/`;
}

export const SECTION_IDS = {
  HOME: "inicio",
  PORTFOLIO: "portfolio",
  SERVICES: "servicos",
  DIFFERENCES: "diferenciais",
  PROCESS: "como-funciona",
  TESTIMONIALS: "depoimentos",
  DEVELOPER: "desenvolvedor",
  FAQ: "faq",
  CITIES: "cidades",
  CONTACT: "contato",
} as const;

export const NAV_LINKS = [
  { id: SECTION_IDS.PORTFOLIO, label: "Portfólio" },
  { id: SECTION_IDS.SERVICES, label: "Serviços" },
  { id: SECTION_IDS.PROCESS, label: "Como funciona" },
  { id: SECTION_IDS.DEVELOPER, label: "Quem faz" },
  { id: SECTION_IDS.FAQ, label: "Dúvidas" },
] as const;
