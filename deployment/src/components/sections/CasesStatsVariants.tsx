"use client";

import { SectionShell, SectionSurface } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/rolling-counter";
import BorderBeam from "@/components/ui/border-beam";

function StatTile({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-hero/40 p-4 backdrop-blur-sm md:p-5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/70 md:text-xs">
        {label}
      </div>
      <div className="mt-1 flex items-end gap-1">
        <AnimatedCounter
          value={value}
          fontSize={28}
          padding={0}
          horizontalPadding={0}
          borderRadius={0}
          gradientFrom="transparent"
          gradientTo="transparent"
          textColor="var(--foreground)"
          places={[1000, 100, 10, 1]}
        />
        {suffix ? <span className="text-xl font-bold leading-none">{suffix}</span> : null}
      </div>
    </div>
  );
}

export default function CasesStatsVariants() {
  return (
    <SectionShell background="vignette" containerWidth="7xl" paddingY="md" className="bg-section">
      {/* Header */}
      <div className="mx-auto mb-6 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-card/50 px-3 py-1 type-kicker text-foreground/80 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-400)]" />
          Varianten van de stats-sectie
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Live impact weergave – 3 stijlen</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Variant A: Glow tiles with border beam */}
        <SectionSurface accent="bar" hoverLift className="relative overflow-hidden bg-card/85 p-0">
          <BorderBeam size={64} duration={7} colorFrom="var(--brand-400)" colorTo="var(--brand-200)" borderWidth={1} />
          <div className="p-5">
            <div className="mb-3 text-sm text-foreground/80">Live impact</div>
            <div className="grid grid-cols-2 gap-4">
              <StatTile label="Clients" value={200} suffix="+" />
              <StatTile label="Omzetgroei" value={50} suffix="M+" />
              <StatTile label="Deals" value={2847} />
              <StatTile label="Landen" value={4} />
            </div>
            <div className="mt-3 text-[12px] text-foreground/60">Bijgewerkt in realtime • Indicatief</div>
          </div>
        </SectionSurface>

        {/* Variant B: Glass ring with horizontal stats */}
        <SectionSurface accent="ring" hoverLift className="bg-hero/60">
          <div className="text-sm text-foreground/80">Live impact</div>
          <div className="mt-3 grid grid-cols-2 items-center gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-card/40 p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Clients</div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <AnimatedCounter value={200} fontSize={24} gradientFrom="transparent" gradientTo="transparent" places={[100,10,1]} />
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
            <div className="rounded-lg bg-card/40 p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Omzet</div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <AnimatedCounter value={50} fontSize={24} gradientFrom="transparent" gradientTo="transparent" places={[10,1]} />
                <span className="text-lg font-bold">M+</span>
              </div>
            </div>
            <div className="rounded-lg bg-card/40 p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Deals</div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <AnimatedCounter value={2847} fontSize={24} gradientFrom="transparent" gradientTo="transparent" places={[1000,100,10,1]} />
              </div>
            </div>
            <div className="rounded-lg bg-card/40 p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Landen</div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <AnimatedCounter value={4} fontSize={24} gradientFrom="transparent" gradientTo="transparent" places={[1]} />
              </div>
            </div>
          </div>
        </SectionSurface>

        {/* Variant C: Minimal outline over soft gradient */}
        <SectionSurface hoverLift className="bg-[radial-gradient(80%_120%_at_20%_0%,color-mix(in_oklab,var(--brand-500)_10%,transparent),transparent_40%)]">
          <div className="text-sm text-foreground/80">Live impact</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[color-mix(in_oklab,var(--brand-400)_40%,var(--color-border))] p-4">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Clients</div>
              <div className="mt-1 flex items-end gap-1">
                <AnimatedCounter value={200} fontSize={26} gradientFrom="transparent" gradientTo="transparent" places={[100,10,1]} />
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
            <div className="rounded-xl border border-[color-mix(in_oklab,var(--brand-400)_40%,var(--color-border))] p-4">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Omzet</div>
              <div className="mt-1 flex items-end gap-1">
                <AnimatedCounter value={50} fontSize={26} gradientFrom="transparent" gradientTo="transparent" places={[10,1]} />
                <span className="text-lg font-bold">M+</span>
              </div>
            </div>
            <div className="rounded-xl border border-[color-mix(in_oklab,var(--brand-400)_40%,var(--color-border))] p-4">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Deals</div>
              <div className="mt-1">
                <AnimatedCounter value={2847} fontSize={26} gradientFrom="transparent" gradientTo="transparent" places={[1000,100,10,1]} />
              </div>
            </div>
            <div className="rounded-xl border border-[color-mix(in_oklab,var(--brand-400)_40%,var(--color-border))] p-4">
              <div className="text-[10px] uppercase tracking-[0.12em] text-foreground/60">Landen</div>
              <div className="mt-1">
                <AnimatedCounter value={4} fontSize={26} gradientFrom="transparent" gradientTo="transparent" places={[1]} />
              </div>
            </div>
          </div>
        </SectionSurface>

        {/* Variant D: Airport departures split-flap board */}
        <SectionSurface hoverLift className="md:col-span-3 relative overflow-hidden bg-[#0b0b0b]/90 p-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-400)]/80 to-transparent" />
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3">
            <div className="inline-flex items-center gap-2 type-kicker text-foreground/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-400)]" />
              Live Impact Board
            </div>
            <div className="text-xs text-foreground/60">Live • Indicatief</div>
          </div>

          {(
            [
              { label: "Clients", value: 200, suffix: "+" },
              { label: "Omzet", value: 50, suffix: "M+" },
              { label: "Deals", value: 2847 },
              { label: "Landen", value: 4 },
            ] as Array<{ label: string; value: number; suffix?: string }>
          ).map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_minmax(180px,auto)_120px] items-center gap-3 border-b border-[var(--color-border)] px-5 py-3 last:border-b-0"
            >
              <div className="text-sm font-semibold tracking-wide text-foreground/80 md:text-base font-mono uppercase">
                {row.label}
              </div>
              <div className="flex items-center gap-2 pl-4 md:pl-6 border-l border-[var(--color-border)]">
                <AnimatedCounter
                  value={row.value}
                  fontSize={28}
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
                  <span className="text-base font-bold leading-none md:text-lg">
                    {row.suffix}
                  </span>
                ) : null}
              </div>
              <div className="hidden items-center justify-end gap-2 md:flex">
                <span className="h-1 w-1 rounded-full bg-[var(--brand-400)]" />
                <span className="text-xs text-foreground/50">On time</span>
              </div>
            </div>
          ))}
        </SectionSurface>

        {/* Variant E: Full departures-style board */}
        <SectionSurface hoverLift className="md:col-span-3 relative overflow-hidden bg-[#0b0b0b] p-0">
          {/* Header bar */}
          <div className="flex items-center gap-2 border-b border-[#1f1f1f] bg-[#0e0e0e] px-5 py-3">
            <div className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-400)]/15 px-2 py-1">
              <span className="inline-block h-2 w-2 rounded-sm bg-[var(--brand-400)]" />
              <span className="type-kicker font-bold text-[var(--brand-300)]">Departures</span>
            </div>
            <span className="type-kicker text-foreground/70">Cases Board</span>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[80px_1fr_120px_80px_120px] items-stretch border-b border-[#1f1f1f] bg-[#0c0c0c] px-5 text-[12px] uppercase tracking-[0.14em] text-[color-mix(in_oklab,var(--brand-400)_85%,#d1d1d1)]">
            <div className="py-2">Time</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Destination</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Flight</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Gate</div>
            <div className="py-2 pl-4 border-l border-[#1f1f1f]">Remark</div>
          </div>

          {/* Rows */}
          {(
            [
              { time: "08:45", dest: "BARCELONA", flight: "RA405", gate: "D17", remark: "ON TIME" },
              { time: "09:57", dest: "NEW YORK", flight: "A1873", gate: "D08", remark: "ON TIME" },
              { time: "10:08", dest: "DUBAI", flight: "A2860", gate: "C05", remark: "BOARDING" },
              { time: "10:14", dest: "SHANGHAI", flight: "B0334", gate: "D14", remark: "DELAYED" },
              { time: "10:25", dest: "LONDON", flight: "C5702", gate: "G11", remark: "ON TIME" },
              { time: "10:58", dest: "PARIS", flight: "D0869", gate: "E10", remark: "ON TIME" },
            ] as const
          ).map((r, i) => (
            <div
              key={r.time + r.dest}
              className="grid grid-cols-[80px_1fr_120px_80px_120px] items-center px-5 text-sm text-foreground/90"
              style={{ background: i % 2 === 0 ? "#0a0a0a" : "#0b0b0b" }}
            >
              <div className="py-3 font-mono text-[13px] text-foreground/80">{r.time}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono text-[15px] tracking-wider" style={{
                background: "linear-gradient(#121212 0 49%, #0a0a0a 50% 100%)",
                boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04), inset 0 1px 0 rgba(0,0,0,0.35)",
              }}>{r.dest}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono">{r.flight}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono">{r.gate}</div>
              <div className="border-l border-[#1f1f1f] py-3 pl-4 font-mono tracking-[0.2em] text-[color-mix(in_oklab,var(--brand-400)_75%,#e3e3e3)]">{r.remark}</div>
            </div>
          ))}
        </SectionSurface>

      </div>
    </SectionShell>
  );
}
