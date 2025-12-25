interface IHeaderSection {
  title: string;
  subtitle: string;
}

export function HeaderSection({ title, subtitle }: IHeaderSection) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold text-[#3A5DFF]">
        {title}
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg text-black opacity-90">
        {subtitle}
      </h3>
    </div>
  );
}
