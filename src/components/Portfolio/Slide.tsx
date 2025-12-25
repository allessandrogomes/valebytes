/* eslint-disable jsx-a11y/alt-text */
import { memo } from "react";
import { IImage, Image } from "./Image";
import { Globe } from "lucide-react";

export const Slide = memo(function Slide({ item }: { item: IImage }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image {...item} />
      <a
        href={item.href}
        target="_blank"
        className="flex items-center gap-2 w-max rounded-lg bg-[#3A5DFF] text-white p-2 hover:bg-[#3a5effe1]"
      >
        <Globe />
        Ver website
      </a>
    </div>
  );
});
