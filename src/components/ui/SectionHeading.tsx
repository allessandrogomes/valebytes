import { cn } from "@/lib/utils";
import { Reveal } from "../motion/Reveal";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <Reveal className={cn("flex max-w-3xl flex-col gap-4", className)}>
      <p
        className={cn(
          "font-mono text-xs font-medium tracking-[0.2em] uppercase sm:text-sm",
          isDark ? "text-white" : "text-brand",
        )}
      >
        {index && <span aria-hidden="true">{index} — </span>}
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/85" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
