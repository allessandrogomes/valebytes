export type PortfolioProject = {
  name: string;
  segment: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  isFeatured?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Vezon",
    segment: "Plataforma SaaS · Agendamento online",
    description:
      "Site da Vezon, sistema de agendamento para barbearias e salões: o cliente marca pelo link e recebe o lembrete no WhatsApp. Páginas por cidade, conteúdo tipado e SEO técnico do começo ao fim.",
    image: "/portfolio/vezon.webp",
    imageWidth: 1200,
    imageHeight: 630,
    url: "https://vezon.app",
    isFeatured: true,
  },
  {
    name: "Neto Baterias",
    segment: "Landing page · Varejo automotivo",
    description:
      "Página de conversão com formulário de cotação e foco em atendimento rápido em Juazeiro e Petrolina.",
    image: "/portfolio/neto-baterias.webp",
    imageWidth: 1079,
    imageHeight: 634,
    url: "https://netobaterias.com.br",
  },
  {
    name: "Sol Renova",
    segment: "Site institucional · Energia solar",
    description:
      "Site institucional com apresentação de serviços, projetos e captação de orçamentos.",
    image: "/portfolio/sol-renova.webp",
    imageWidth: 1200,
    imageHeight: 734,
    url: "https://solrenova.vercel.app",
  },
  {
    name: "Psicóloga Ana C. Martins",
    segment: "Site pessoal · Saúde",
    description:
      "Presença digital acolhedora, pensada primeiro para o celular, com chamada direta para conversar.",
    image: "/portfolio/psico.webp",
    imageWidth: 1200,
    imageHeight: 832,
    url: "https://psichoana.vercel.app/",
  },
  {
    name: "Raylaw",
    segment: "Site institucional · Advocacia",
    description:
      "Visual sóbrio e elegante para escritório de advocacia, com chamada direta para contato.",
    image: "/portfolio/raylaw.webp",
    imageWidth: 1200,
    imageHeight: 733,
    url: "https://raylaw.vercel.app/",
  },
];
