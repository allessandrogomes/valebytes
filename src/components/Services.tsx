import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/site";
import { services, ServiceTone } from "@/data/services";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./motion/Reveal";

const TONE_STYLES: Record<
  ServiceTone,
  { card: string; icon: string; description: string }
> = {
  [ServiceTone.BRAND]: {
    card: "bg-brand text-white",
    icon: "bg-white text-brand",
    description: "text-white/85",
  },
  [ServiceTone.INK]: {
    card: "bg-ink text-white",
    icon: "bg-accent text-ink",
    description: "text-white/80",
  },
  [ServiceTone.LIGHT]: {
    card: "bg-white text-ink",
    icon: "bg-brand-100 text-brand",
    description: "text-ink-soft",
  },
  [ServiceTone.ACCENT]: {
    card: "bg-accent text-ink",
    icon: "bg-white text-ink",
    description: "text-ink/80",
  },
};

export function Services({ index }: { index: string }) {
  return (
    <section
      id={SECTION_IDS.SERVICES}
      className="border-y-2 border-ink bg-brand-100/60 py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          index={index}
          eyebrow="Serviços"
          title="O que fazemos pela sua presença online"
          description="Do primeiro clique ao contato no WhatsApp: cada entrega é pensada para gerar resultado para o seu negócio."
        />

        <RevealGroup
          as="ul"
          className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const toneStyle = TONE_STYLES[service.tone];
            const Icon = service.icon;

            return (
              <RevealItem
                as="li"
                key={service.title}
                className={cn(
                  "flex flex-col gap-5 rounded-xl border-2 border-ink p-6 shadow-hard transition-all duration-300 ease-out-soft hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg sm:p-8",
                  toneStyle.card,
                  service.isFeatured && "lg:col-span-2",
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg border-2 border-ink",
                    toneStyle.icon,
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-auto flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "max-w-md leading-relaxed",
                      toneStyle.description,
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
