import { ChevronRight } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  // Optional visual tint to ensure content legibility over busy backgrounds
  // - "dark": card-wide dark gradient
  // - "glass": blurred semi-opaque panel behind content
  tint?: "none" | "dark" | "glass";
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(14rem,auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  tint = "none",
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // unified styles with tokens
      "bg-background border border-[var(--color-border)] shadow-sm transform-gpu",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    {/* readability tint overlay */}
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[var(--neutral-900)]/60 via-[var(--neutral-900)]/30 to-transparent transition-opacity",
        tint === "dark" ? "opacity-100" : "opacity-0",
      )}
    />
    <div className="p-4">
      <div className="relative inline-flex max-w-full">
        {/* glass morphism panel behind content */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-2 z-[2] rounded-lg ring-1 transition-all",
            tint === "glass" ? "bg-[var(--neutral-900)]/60 backdrop-blur-lg ring-[var(--soft-white)]/40" : "opacity-0",
          )}
        />
        <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
          <Icon className={cn("h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75", tint !== "none" ? "text-[var(--soft-white)] drop-shadow-[0_1px_1px_color-mix(in_oklab,var(--neutral-900)_60%,transparent)]" : "text-[var(--color-text-secondary)]")} />
          <h3 className={cn("type-h4", tint !== "none" ? "text-[var(--soft-white)] drop-shadow-[0_1px_1px_color-mix(in_oklab,var(--neutral-900)_60%,transparent)]" : "text-foreground") }>
          {name}
          </h3>
          <p className={cn("max-w-lg type-body", tint !== "none" ? "text-[var(--soft-white)]/95 drop-shadow-[0_1px_1px_color-mix(in_oklab,var(--neutral-900)_50%,transparent)]" : "text-[var(--color-text-secondary)]")}>{description}</p>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ChevronRight className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <a href={href}>
          {cta}
          <ChevronRight className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[var(--neutral-900)]/[.05]" />
  </div>
);

export { BentoCard, BentoGrid };


