import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionLayoutProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function SectionLayout({ children, id, className }: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-10 md:px-20 flex flex-col gap-6 md:gap-10 py-12 md:py-20",
        className
      )}
    >
      {children}
    </section>
  );
}
