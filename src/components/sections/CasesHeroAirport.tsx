"use client";

import { SectionShell, SectionSurface } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/rolling-counter";
import { Button } from "@/components/ui/button";

export default function CasesHeroAirport() {
  return (
    <SectionShell
      className="bg-hero text-foreground pt-[var(--nav-h)] [--nav-h:56px] md:[--nav-h:76px]"
      background="vignette"
      containerWidth="7xl"
      paddingY="lg"
    >
      <div className="min-h-[calc(90svh-var(--nav-h))] flex flex-col items-stretch justify-center gap-8">
        {/* Top header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-400)]/15 px-2 py-1">
            <span className="inline-block h-2 w-2 rounded-sm bg-[var(--brand-400)]" />
            <span className="type-kicker font-bold text-[var(--brand-300)]">Departures</span>
          </div>
          <h1 className="mt-4 max-w-[26ch] text-5xl font-extrabold leading-[1.05] tracking-[-0.025em] md:text-6xl">
            Bewezen resultaten, helder als een vertrekbord
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/80 md:text-xl">
            Live impact van klanten en campagnes – overzichtelijk in één oogopslag.
          </p>
        </div>

        {/* Board */}
        <SectionSurface hoverLift className="relative overflow-hidden bg-[#0b0b0b] p-0">
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_140px_120px_140px] items-stretch border-b border-[#1f1f1f] bg-[#0c0c0c] px-5 text-[12px] uppercase tracking-[0.14em] text-[color-mix(in_oklab,var(--brand-400)_85%,#d1d1d1)]">
            <div className="py-2">Metric</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Value</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Trend</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Remark</div>
          </div>

          {(
            [
              { label: "Clients", value: 200, suffix: "+", trend: "↑", remark: "On time" },
              { label: "Omzet", value: 50, suffix: "M+", trend: "↗", remark: "Boarding" },
              { label: "Deals", value: 2847, trend: "→", remark: "On time" },
              { label: "Landen", value: 4, trend: "→", remark: "On time" },
            ] as Array<{ label: string; value: number; suffix?: string; trend: string; remark: string }>
          ).map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_140px_120px_140px] items-center px-5 text-sm text-foreground/90"
              style={{ background: i % 2 === 0 ? "#0a0a0a" : "#0b0b0b" }}
            >
              <div className="py-3 font-mono text-[15px] tracking-wider">{row.label}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4">
                <div className="flex items-center gap-2">
                  <AnimatedCounter
                    value={row.value}
                    fontSize={26}
                    padding={2}
                    horizontalPadding={6}
                    borderRadius={6}
                    gradientFrom="transparent"
                    gradientTo="transparent"
                    textColor="var(--foreground)"
                    places={[1000, 100, 10, 1]}
                    counterStyle={{
                      display: "flex",
                      gap: 4,
                      background: "#0e0e0e",
                      border: "1px solid var(--color-border)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3)",
                    }}
                    digitStyle={{
                      background: "linear-gradient(#121212 0 49%, #0a0a0a 50% 100%)",
                      border: "1px solid #1b1b1b",
                      borderRadius: 4,
                      boxShadow:
                        "inset 0 -1px 0 rgba(255,255,255,0.04), inset 0 1px 0 rgba(0,0,0,0.35)",
                    }}
                  />
                  {row.suffix ? (
                    <span className="text-base font-bold leading-none md:text-lg">{row.suffix}</span>
                  ) : null}
                </div>
              </div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono text-[13px]">{row.trend}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono tracking-[0.2em] text-[color-mix(in_oklab,var(--brand-400)_75%,#e3e3e3)]">
                {row.remark.toUpperCase()}
              </div>
            </div>
          ))}
        </SectionSurface>

        {/* CTA */}
        <div>
          <Button className="mt-2 rounded-xl bg-[var(--brand-400)] px-6 py-5 text-lg font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]">
            Claim gratis strategiesessie
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
