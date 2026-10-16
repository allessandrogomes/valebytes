export type Testimonial = {
  quote: string;
  author: string;
  company: string;
  city: string;
};

// Preencha apenas com depoimentos reais de clientes. Enquanto a lista estiver vazia, a seção não é exibida.
export const testimonials: Testimonial[] = [];
