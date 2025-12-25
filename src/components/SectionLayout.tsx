import { PropsWithChildren } from 'react';

interface SectionLayoutProps extends PropsWithChildren {
  id?: string;
}

export function SectionLayout({ children, id }: SectionLayoutProps) {
  return (
    <section
      id={id}
      className="px-10 md:px-20 flex flex-col gap-6 md:gap-10 py-12 md:py-20"
    >
      {children}
    </section>
  );
}
