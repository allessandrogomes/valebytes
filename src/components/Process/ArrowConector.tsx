import { ChevronsRight } from 'lucide-react';

export function ArrowConnector() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 max-w-[40px] lg:max-w-[60px]">
      <ChevronsRight size={24} className="lg:w-8 lg:h-8 text-[#3A5DFF]" />
    </div>
  );
}
