export type Sections = {
  portfolio: string;

  desenvolvimento: {
    title: string;
    exclusividade: string;
    performance: string;
    liberdade: string;
  };

  processo: {
    title: string;
    formulario: string;
    reuniao: string;
    proposta: string;
    desenvolvimento: string;
  };

  equipe: {
    title: string;
    nome: string;
    descricao: string;
  };

  cta: string;
};

export type City = {
  slug: string;
  name: string;
  state: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  sections: Sections;
};
