import { cn } from "@/lib/utils";
import { SECTION_IDS } from "@/lib/site";
import { testimonials } from "@/data/testimonials";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./motion/Reveal";

const CARD_ROTATIONS = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"];
const CARD_BACKGROUNDS = ["bg-white", "bg-accent", "bg-brand-100"];

export function Testimonials({ index }: { index: string }) {
  const hasTestimonials = testimonials.length > 0;
  if (!hasTestimonials) return null;

  return (
    <section id={SECTION_IDS.TESTIMONIALS} className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12 sm:gap-16">
        <SectionHeading
          index={index}
          eyebrow="Depoimentos"
          title="Quem já tirou o site do papel"
        />

        <RevealGroup
          as="ul"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <RevealItem
              as="li"
              key={`${testimonial.author}-${testimonial.company}`}
              className={cn(
                "rounded-xl border-2 border-ink p-7 shadow-hard transition-transform duration-300 hover:rotate-0",
                CARD_ROTATIONS[index % CARD_ROTATIONS.length],
                CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length],
              )}
            >
              <figure className="flex h-full flex-col gap-6">
                <span
                  className="font-display text-6xl leading-none font-extrabold text-brand"
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="text-lg leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-auto border-t-2 border-ink pt-4">
                  <p className="font-display text-lg font-extrabold">
                    {testimonial.author}
                  </p>
                  <p className="font-mono text-xs tracking-wider text-ink-soft uppercase">
                    {testimonial.company} · {testimonial.city}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
