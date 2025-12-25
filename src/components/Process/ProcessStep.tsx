export interface IProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProcessStep({ icon, title, description }: IProcessStep) {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 flex-1 h-[212px]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#3A5DFF] rounded-lg flex items-center justify-center text-[#EEEEEE]">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-center">
        {title}
      </h3>
      <p className="text-black opacity-90 text-center text-xs sm:text-sm">
        {description}
      </p>
    </div>
  );
}
