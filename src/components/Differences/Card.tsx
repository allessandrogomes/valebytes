export interface IDifferencesCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function DifferencesCard({
  icon,
  title,
  description,
}: IDifferencesCard) {
  return (
    <div className="w-full md:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-200 rounded-lg flex items-center lg:items-left justify-center text-[#3A5DFF]">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="text-sm sm:text-base text-black opacity-90">
        {description}
      </p>
    </div>
  );
}
