"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BackgroundVariant = "none" | "grid" | "vignette";

type WaveVariant = "soft" | "sine" | "swoop" | "arc";

export type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  background?: BackgroundVariant;
  containerWidth?: "5xl" | "6xl" | "7xl";
  paddingY?: "none" | "sm" | "md" | "lg";
  /** Optional top wave divider variant */
  topWave?: "none" | WaveVariant;
  /** Optional bottom wave divider variant */
  bottomWave?: "none" | WaveVariant;
  /** Fill color for waves, defaults to var(--bg-section) to blend into surrounding sections */
  waveFill?: string;
};

function renderBackground(variant: BackgroundVariant | undefined) {
  switch (variant) {
    case "grid":
      return (
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <pattern id="sec-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sec-grid)" className="text-foreground" />
          </svg>
        </div>
      );
    case "vignette":
      return (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(0,0,0,0.06))]" />
        </div>
      );
    default:
      return null;
  }
}

function wavePath(variant: WaveVariant, position: "top" | "bottom") {
  // Distinct from TargetGroupsOverviewPhotos on purpose
  if (variant === "soft") {
    return position === "top"
      ? "M0,0 C200,40 600,10 900,50 S 1100,80 1200,60 L1200,120 L0,120 Z"
      : "M0,26 C180,46 420,18 700,44 S 1020,84 1200,58 L1200,120 L0,120 Z";
  }
  if (variant === "swoop") {
    // A smoother, longer-arc wave with gentle curvature
    return position === "top"
      ? "M0,0 C240,52 640,10 920,42 S 1120,72 1200,64 L1200,120 L0,120 Z"
      : "M0,30 C200,50 500,20 800,46 S 1080,78 1200,62 L1200,120 L0,120 Z";
  }
  if (variant === "arc") {
    // KISS: a single, gentle arc
    return position === "top"
      ? "M0,0 C260,70 860,10 1200,60 L1200,120 L0,120 Z"
      : "M0,36 C320,52 820,30 1200,50 L1200,120 L0,120 Z";
  }
  // sine-like gentle wave
  return position === "top"
    ? "M0,0 C160,28 360,12 560,36 S 920,72 1200,54 L1200,120 L0,120 Z"
    : "M0,34 C220,54 520,22 820,46 S 1080,78 1200,62 L1200,120 L0,120 Z";
}

function renderWave(position: "top" | "bottom", variant: WaveVariant | "none" | undefined, fill: string) {
  if (!variant || variant === "none") return null;
  const common = "block h-[84px] w-full md:h-[120px]";
  return (
    <div className={cn("pointer-events-none absolute inset-x-0", position === "top" ? "top-0" : "bottom-0")}> 
      <svg className={cn(common, position === "top" && "rotate-180")} viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
        <path d={wavePath(variant, position)} fill={fill} />
      </svg>
    </div>
  );
}

const paddingYClassName: Record<NonNullable<SectionShellProps["paddingY"]>, string> = {
  none: "py-0",
  sm: "py-8",
  md: "py-12 md:py-14",
  lg: "py-16 md:py-20",
};

const containerClassName: Record<NonNullable<SectionShellProps["containerWidth"]>, string> = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export function SectionShell({
  children,
  className,
  background = "none",
  containerWidth = "7xl",
  paddingY = "lg",
  topWave = "none",
  bottomWave = "none",
  waveFill = "var(--bg-section)",
}: SectionShellProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-section", className)}>
      {renderBackground(background)}
      {renderWave("top", topWave, waveFill)}
      <div
        className={cn(
          "relative mx-auto px-6",
          containerClassName[containerWidth],
          paddingYClassName[paddingY],
          topWave !== "none" && "pt-[84px] md:pt-[120px]",
          bottomWave !== "none" && "pb-[96px] md:pb-[132px]"
        )}
      >
        {children}
      </div>
      {renderWave("bottom", bottomWave, waveFill)}
    </section>
  );
}

export type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  kickerClassName?: string;
  kickerDotClassName?: string;
  kickerVariant?: "kicker" | "custom";
};

export function SectionHeader({ kicker, title, subtitle, align = "center", className, kickerClassName, kickerDotClassName, kickerVariant = "kicker" }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-8 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {kicker ? (
        kickerVariant === "custom" ? (
          <span className={cn("inline-flex items-center gap-2 rounded-full", kickerClassName)}>
            <span className={cn("inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]", kickerDotClassName)} />
            {kicker}
          </span>
        ) : (
          <span className={cn("inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]", kickerClassName)}>
            <span className={cn("inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]", kickerDotClassName)} />
            {kicker}
          </span>
        )
      ) : null}
      <h2 className="mt-4 type-h2 text-foreground">{title}</h2>
      {subtitle ? (
        <p className={cn("mt-2 type-body text-[var(--color-text-secondary)]", align === "center" ? "mx-auto" : undefined)}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export type SectionSurfaceProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  accent?: "none" | "bar" | "ring";
  hoverLift?: boolean;
};

export function AccentBar() {
  return (
    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_55%,var(--brand-200))] to-[var(--brand-200)]" />
  );
}

export function SectionSurface({ children, className, contentClassName, accent = "none", hoverLift = false }: SectionSurfaceProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-[var(--color-border)] bg-card/85 backdrop-blur-sm",
        hoverLift && "transition-all duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      {accent === "bar" ? <AccentBar /> : null}
      {accent === "ring" ? (
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-[var(--color-border)]/50" aria-hidden />
      ) : null}
      <CardContent className={cn("p-5 md:p-6", contentClassName)}>{children}</CardContent>
    </Card>
  );
}

export const SECTION_THEMES = {
  metrics: {
    background: "grid" as BackgroundVariant,
    headerAlign: "center" as const,
    surfaceAccent: "none" as const,
  },
  stories: {
    background: "vignette" as BackgroundVariant,
    headerAlign: "center" as const,
    surfaceAccent: "bar" as const,
  },
  process: {
    background: "grid" as BackgroundVariant,
    headerAlign: "center" as const,
    surfaceAccent: "none" as const,
  },
};


