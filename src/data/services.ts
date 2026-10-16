import {
  Gauge,
  LayoutTemplate,
  Building2,
  ShoppingBag,
  MapPin,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const ServiceTone = {
  BRAND: "brand",
  INK: "ink",
  LIGHT: "light",
  ACCENT: "accent",
} as const;

export type ServiceTone = (typeof ServiceTone)[keyof typeof ServiceTone];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: ServiceTone;
  isFeatured?: boolean;
};

export const services: Service[] = [
  {
    title: "Landing pages",
    description:
      "Páginas focadas em um único objetivo: transformar visitantes em contatos. Ideais para campanhas, anúncios e lançamentos.",
    icon: LayoutTemplate,
    tone: ServiceTone.BRAND,
    isFeatured: true,
  },
  {
    title: "Sites institucionais",
    description:
      "Apresente sua empresa, serviços e diferenciais com credibilidade.",
    icon: Building2,
    tone: ServiceTone.LIGHT,
  },
  {
    title: "Catálogos e vitrines",
    description: "Mostre seus produtos e receba pedidos direto no WhatsApp.",
    icon: ShoppingBag,
    tone: ServiceTone.LIGHT,
  },
  {
    title: "SEO local",
    description:
      "Estrutura técnica e conteúdo pensados para sua empresa aparecer no Google quando alguém da sua cidade procurar.",
    icon: MapPin,
    tone: ServiceTone.INK,
    isFeatured: true,
  },
  {
    title: "Performance",
    description: "Sites leves, que abrem rápido até no 4G.",
    icon: Gauge,
    tone: ServiceTone.ACCENT,
  },
  {
    title: "Manutenção",
    description:
      "Ajustes, novas seções e atualizações sempre que o negócio precisar.",
    icon: Wrench,
    tone: ServiceTone.LIGHT,
    isFeatured: true,
  },
];

export const marqueeServices = [
  "Landing pages",
  "Sites institucionais",
  "SEO local",
  "Catálogos online",
  "Sites rápidos",
  "Design exclusivo",
  "Integração com WhatsApp",
];
