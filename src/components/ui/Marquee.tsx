import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden border-y-2 border-ink",
        className,
      )}
      aria-label={items.join(", ")}
      role="marquee"
    >
      <ul
        className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {repeatedItems.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-6 py-4 font-display text-xl font-extrabold tracking-tight whitespace-nowrap uppercase sm:text-2xl"
          >
            {item}
            <span className="text-accent">◆</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
