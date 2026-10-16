import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative pt-[var(--header-height)]">
      <div className="bg-grid absolute inset-0 -z-10" />
      <Container className="flex min-h-[70vh] flex-col items-start justify-center gap-6 py-20">
        <p className="font-mono text-sm font-medium tracking-[0.2em] text-brand uppercase">
          Erro 404
        </p>
        <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
          Essa página <span className="text-outline text-brand">sumiu</span> do
          mapa.
        </h1>
        <p className="max-w-xl text-lg text-ink-soft">
          A página que você tentou acessar não existe ou foi movida.
        </p>
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Voltar para a página inicial
        </Link>
      </Container>
    </section>
  );
}
