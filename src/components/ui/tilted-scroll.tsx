import { cn } from "@/lib/utils"

interface TiltedScrollItem {
  id: string;
  text: string;
}

interface TiltedScrollProps {
  items?: TiltedScrollItem[];
  className?: string;
  onItemClick?: (id: string) => void;
  activeId?: string;
  paused?: boolean;
  highlightFirstBatchOnly?: boolean;
  interactive?: boolean;
  activeLoopIndex?: number;
  animated?: boolean;
  loop?: boolean;
}

export function TiltedScroll({ 
  items = defaultItems,
  className,
  onItemClick,
  activeId,
  paused = false,
  highlightFirstBatchOnly = true,
  interactive = true,
  activeLoopIndex,
  animated = true,
  loop = true,
}: TiltedScrollProps) {
  const displayItems = loop ? [...items, ...items] : items;
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative h-[220px] w-[500px] md:w-[540px] overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_7rem),linear-gradient(to_left,transparent,black_7rem),linear-gradient(to_bottom,transparent,black_2.5rem),linear-gradient(to_top,transparent,black_2.5rem)]">
        {/* Symmetrically crop both sides to reduce visual width */}
        <div>
          <div
            className={cn(
              "mx-auto grid w-[320px] gap-5 grid-cols-1",
              animated && "[animation:var(--animate-skew-scroll-loop)]",
              paused && animated && "[animation-play-state:paused]",
            )}
            style={!animated ? { transform: "rotateX(6deg) rotateZ(-6deg) skewX(6deg)" } : undefined}
          >
            {displayItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={interactive && onItemClick ? () => onItemClick(item.id) : undefined}
                className={cn(
                  "group flex items-center gap-2 rounded-md border border-border/40 bg-gradient-to-b from-background/80 to-muted/80 p-4 shadow-md transition-all duration-300 ease-in-out dark:border-border",
                  interactive
                    ? "cursor-pointer hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl"
                    : "cursor-default",
                  typeof activeLoopIndex === "number"
                    ? ((idx % items.length) === activeLoopIndex && (!highlightFirstBatchOnly || idx < items.length) &&
                        "ring-1 ring-[var(--brand-500)] shadow-[0_8px_24px_color-mix(in_oklab,var(--brand-500)_22%,transparent)]")
                    : (activeId === item.id && (!highlightFirstBatchOnly || idx < items.length) &&
                        "ring-1 ring-[var(--brand-500)] shadow-[0_8px_24px_color-mix(in_oklab,var(--brand-500)_22%,transparent)]"),
                )}
              >
                <CheckCircleIcon className="h-6 w-6 mr-2 stroke-foreground/40 transition-colors group-hover:stroke-foreground" />
                <p className="text-foreground/80 transition-colors group-hover:text-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const defaultItems: TiltedScrollItem[] = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  { id: "4", text: "Item 4" },
  { id: "5", text: "Item 5" },
  { id: "6", text: "Item 6" },
  { id: "7", text: "Item 7" },
  { id: "8", text: "Item 8" },
]