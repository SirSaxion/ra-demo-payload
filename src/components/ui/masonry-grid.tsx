import { cn } from "@/lib/utils";
import * as React from "react";

export type MasonryGridProps = {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
};

/**
 * MasonryGrid – CSS column-based masonry
 * - Uses CSS columns with responsive utilities (e.g., columns-1 sm:columns-2 lg:columns-3)
 * - Each item is wrapped with break-inside-avoid to prevent column breaks
 */
export function MasonryGrid({ items, className, itemClassName }: MasonryGridProps) {
  return (
    <div className={cn("columns-1 sm:columns-2 lg:columns-3 gap-4", className)}>
      {items.map((child, i) => (
        <div key={i} className={cn("mb-4 break-inside-avoid", itemClassName)}>
          {child}
        </div>
      ))}
    </div>
  );
}

// Lightweight example export for quick testing, not used in app pages.
export const Component = () => (
  <MasonryGrid
    items={[
      <div key="a" className="rounded-lg border border-[var(--color-border)] bg-card/85 p-4">A</div>,
      <div key="b" className="rounded-lg border border-[var(--color-border)] bg-card/85 p-4">B<br/>B</div>,
      <div key="c" className="rounded-lg border border-[var(--color-border)] bg-card/85 p-4">C<br/>C<br/>C</div>,
    ]}
  />
);
