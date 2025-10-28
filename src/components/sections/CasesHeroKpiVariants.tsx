"use client";

import { SectionShell } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/rolling-counter";

const KPIS = [
  { label: "Clients", value: 200, suffix: "+", places: [100, 10, 1] as number[] },
  { label: "Omzetgroei", value: 50, suffix: "M+", places: [10, 1] as number[] },
  { label: "Deals", value: 2847, places: [1000, 100, 10, 1] as number[] },
  { label: "Landen", value: 4, places: [1] as number[] },
];

function Metric({ label, value, suffix, places }: { label: string; value: number; suffix?: string; places: number[] }) {
  return (
    <div className="flex items-end gap-1">
      <AnimatedCounter
        value={value}
        fontSize={28}
        padding={0}
        horizontalPadding={0}
        borderRadius={0}
        gradientFrom="transparent"
        gradientTo="transparent"
        textColor="var(--foreground)"
        places={places}
      />
      {suffix ? <span className="text-xl font-bold leading-none">{suffix}</span> : null}
    </div>
  );
}

export default function CasesHeroKpiVariants() {
  return (
    <SectionShell containerWidth="7xl" paddingY="md" className="text-foreground">
      <div className="space-y-10">
        {/* Variant 1: Ribbon bar with separators */}
        <div className="space-y-3">
          <div className="type-kicker text-foreground/70">Variant 1 — Ribbon</div>
          <div className="rounded-2xl border border-[var(--color-border)]/60 bg-hero/30 p-3 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]/60">
              {KPIS.map((k) => (
                <div key={k.label} className="flex items-baseline gap-3 px-4 py-3">
                  <span className="text-xs uppercase tracking-wide text-foreground/60">{k.label}</span>
                  <Metric {...k} />
                </div>
              ))}
            </div>
            <div className="px-4 pt-2 text-xs text-foreground/60">Bijgewerkt in realtime • Indicatief</div>
          </div>
        </div>

        {/* Variant 2: Glass pills */}
        <div className="space-y-3">
          <div className="type-kicker text-foreground/70">Variant 2 — Glass Pills</div>
          <div className="flex flex-wrap gap-3">
            {KPIS.map((k) => (
              <div
                key={k.label}
                className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)]/60 bg-hero/40 px-4 py-2 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-400)]" />
                <span className="text-xs uppercase tracking-wide text-foreground/65">{k.label}</span>
                <Metric {...k} />
              </div>
            ))}
          </div>
        </div>

        {/* Variant 3: Minimal inline list */}
        <div className="space-y-3">
          <div className="type-kicker text-foreground/70">Variant 3 — Minimal Inline</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-foreground/85">
            {KPIS.map((k, i) => (
              <div key={k.label} className="inline-flex items-baseline gap-2">
                <span className="text-[11px] uppercase tracking-wider text-foreground/55">{k.label}</span>
                <Metric {...k} />
                {i < KPIS.length - 1 ? (
                  <span className="mx-1 hidden sm:inline text-foreground/40">•</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
