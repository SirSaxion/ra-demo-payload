"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Users, ThumbsDown, Activity, Frown, Crown, Search, Banknote, TrendingUp, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProblemSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  oldSituation?: {
    title: string;
    items: Array<{ icon: string; text: string }>;
  };
  newSituation?: {
    title: string;
    items: Array<{ icon: string; text: string }>;
  };
}

// Icon mapping for CMS
const iconMap: Record<string, LucideIcon> = {
  XCircle,
  ThumbsDown,
  Activity,
  Frown,
  CheckCircle2,
  Crown,
  Banknote,
  TrendingUp,
};

/**
 * ProblemSection
 * Aceternity-inspired Spotlight background with premium cards
 */
export function ProblemSection({
  kicker = "Het probleem dat wij zien",
  title = "95% van vastgoedondernemers blijft na 10+ jaar nog steeds afhankelijk van externe leads",
  subtitle = "Dit is wat we bij veel vastgoedprofessionals terugzien. We delen het om inzicht te geven—zodat je kunt bepalen wat voor jou werkt.",
  oldSituation = {
    title: "OUDE SITUATIE",
    items: [
      { icon: "XCircle", text: "Niet mee gaan met technologie" },
      { icon: "ThumbsDown", text: "Niet onderscheidend" },
      { icon: "Activity", text: "Geen stabiliteit" },
      { icon: "Frown", text: "Geleefd worden door je agenda" },
    ],
  },
  newSituation = {
    title: "ONZE METHODE",
    items: [
      { icon: "CheckCircle2", text: "Geautomatiseerde systemen" },
      { icon: "Crown", text: "Onderscheidende uitstraling en dienstverlening" },
      { icon: "Banknote", text: "Stabiel inkomen" },
      { icon: "TrendingUp", text: "Focus op waar je goed in bent" },
    ],
  },
}: ProblemSectionProps = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-section text-foreground">
      {/* Background grid + spotlight */}
      <div
        ref={ref}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 600px at var(--spot-x, 50%) var(--spot-y, 35%), color-mix(in oklab, var(--brand-500) 12%, transparent), transparent 60%)",
          maskImage:
            "radial-gradient(60% 60% at 50% 10%, color-mix(in oklab, var(--bg-section) 100%, transparent), color-mix(in oklab, var(--bg-section) 40%, transparent) 60%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground" />
        </svg>
      </div>
      {/* Top subtle fade to blend with preceding section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-14 md:pt-16 pb-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.01em] text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl items-stretch gap-8 md:gap-10 md:grid-cols-[1fr_auto_1fr]">
          {/* Old */}
          <Card className="relative overflow-hidden border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--neutral-900)_25%,transparent)]">
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-red-500/80 via-red-400/60 to-red-500/80 [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />
            <CardHeader className="pt-2">
              <CardTitle className="flex items-center justify-center gap-2 text-center text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-none">
                <XCircle className="h-5 w-5 text-red-500" /> {oldSituation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3.5 md:space-y-4 text-base leading-relaxed md:text-lg text-[var(--color-text-secondary)]">
                {oldSituation.items.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || XCircle;
                  return (
                    <li key={idx} className="flex items-start gap-3.5 md:gap-4">
                      <IconComponent className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_15%,transparent)] blur-xl" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)] text-base md:text-lg font-semibold text-foreground">
                VS
              </div>
            </div>
          </div>

          {/* New */}
          <Card className="relative overflow-hidden border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--brand-500)_15%,transparent)]">
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)] [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />
            <CardHeader className="pt-2">
              <CardTitle className="flex items-center justify-center gap-2 text-center text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-none">
                <CheckCircle2 className="h-5 w-5 text-green-500" /> {newSituation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3.5 md:space-y-4 text-base leading-relaxed md:text-lg text-[var(--color-text-secondary)]">
                {newSituation.items.map((item, idx) => {
                  const IconComponent = iconMap[item.icon] || CheckCircle2;
                  return (
                    <li key={idx} className="flex items-start gap-3.5 md:gap-4">
                      <IconComponent className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-500)]" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;


