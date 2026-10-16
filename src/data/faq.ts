import { City, FaqItem } from "@/types/City";

function buildDefaultFaq(cityName?: string): FaqItem[] {
  const location = cityName ? ` em ${cityName}` : "";
  const serviceArea = cityName
    ? `Sim. Atendemos empresas${location} de forma 100% online — reuniões por videochamada e contato direto pelo WhatsApp, sem perder a proximidade.`
    : "Atendemos empresas de todo o Brasil de forma 100% online, com reuniões por videochamada e contato direto pelo WhatsApp.";

  return [
    {
      question: `Quanto custa criar um site${location}?`,
      answer:
        "O investimento depende do tipo de site, da quantidade de páginas e das funcionalidades. Depois de entender sua necessidade, enviamos uma proposta com escopo, prazo e valor fechados — sem surpresas.",
    },
    {
      question: "Quanto tempo leva para o site ficar pronto?",
      answer:
        "Uma landing page costuma ficar pronta entre 1 e 2 semanas. Sites institucionais com mais páginas levam de 2 a 4 semanas, dependendo do envio de conteúdo e das revisões.",
    },
    {
      question: `Vocês atendem empresas${location}?`,
      answer: serviceArea,
    },
    {
      question: "O site vai aparecer no Google?",
      answer:
        "Todo site é entregue com boas práticas de SEO: estrutura semântica, carregamento rápido, metadados, sitemap e dados estruturados. Também orientamos sobre o Perfil da Empresa no Google para fortalecer sua presença local.",
    },
    {
      question: "Vocês usam templates prontos?",
      answer:
        "Não. Cada site é desenhado e programado do zero, com código próprio. Isso garante identidade única, mais desempenho e liberdade para evoluir sem as limitações de plataformas prontas.",
    },
    {
      question: "Preciso ter domínio e hospedagem?",
      answer:
        "Não precisa se preocupar. Ajudamos a registrar o domínio (.com.br) e cuidamos da publicação do site em uma hospedagem rápida e segura.",
    },
    {
      question: "Posso pedir alterações depois que o site estiver no ar?",
      answer:
        "Sim. Os ajustes combinados no projeto estão inclusos, e depois da entrega você pode contar com a gente para novas seções, mudanças de conteúdo e melhorias contínuas.",
    },
  ];
}

export function getFaq(city?: City): FaqItem[] {
  if (city?.faq?.length) return city.faq;

  return buildDefaultFaq(city?.name);
}
