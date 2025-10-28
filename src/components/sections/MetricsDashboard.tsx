"use client";

import { SectionHeader, SectionShell, SectionSurface } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/rolling-counter";
import StatsWidget from "@/components/ui/stats-widget";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { Activity, Coins, Star, Users } from "lucide-react";

function KpiCard({
  label,
  value,
  suffix,
  icon: Icon,
  places,
  className,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: any;
  places: number[];
  className?: string;
}) {
  return (
    <SectionSurface className={cn("h-full", className)} contentClassName="p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon className="size-4" />
          <span className="text-xs uppercase tracking-wide">{label}</span>
        </div>
      </div>
      <div className="mt-3 flex items-end gap-2">
        <AnimatedCounter
          value={value}
          fontSize={36}
          padding={0}
          horizontalPadding={0}
          borderRadius={0}
          gradientFrom="transparent"
          gradientTo="transparent"
          textColor="var(--foreground)"
          places={places}
        />
        {suffix ? <span className="text-2xl font-bold leading-none">{suffix}</span> : null}
      </div>
    </SectionSurface>
  );
}

export default function MetricsDashboard() {
  return (
    <SectionShell
      background="grid"
      paddingY="lg"
      topWave="swoop"
      bottomWave="arc"
      className="text-foreground [--card:var(--soft-black)] [--color-surface-1:var(--soft-black)]"
    >
      <SectionHeader
        kicker="DASHBOARD"
        title="Real Accelerate Impact Dashboard"
        subtitle="Live gegevens"
      />

      {/* Top KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Totale omzetgroei" value={50} suffix="M+" icon={Coins} places={[10, 1]} />
        <KpiCard label="Nieuwe werknemers" value={127} suffix="+" icon={Users} places={[100, 10, 1]} />
        <KpiCard label="Gemiddelde groei" value={340} suffix="%" icon={Activity} places={[100, 10, 1]} />
        <KpiCard label="Client rating" value={4} suffix=".9/5" icon={Star} places={[1]} />
      </div>

      {/* Globe + growth widgets */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Globe card */}
        <SectionSurface className="relative overflow-hidden" contentClassName="p-0">
          <div className="relative h-[360px] sm:h-[420px]">
            <Globe />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.25),rgba(255,255,255,0))]" />
            <div className="absolute left-5 top-5 rounded-full bg-card/75 px-3 py-1 text-xs text-foreground backdrop-blur-md ring-1 ring-[var(--color-border)]/60">
              🌍 Geografische spreiding
            </div>
            {/* Live indicator bottom-left */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-card/70 px-2.5 py-1 text-xs backdrop-blur-sm ring-1 ring-[var(--color-border)]/60">
              <span
                className="inline-block size-2.5 rounded-full bg-[#22c55e] animate-pulse"
                style={{ animationDuration: "3.5s" }}
                aria-hidden
              />
              <span className="text-foreground/80">Live</span>
            </div>
          </div>
          {/* Kaarten onder de globe, binnen dezelfde card */}
          <div className="grid grid-cols-2 gap-3 p-4 text-xs text-foreground/85 sm:gap-4 sm:p-5">
            <div className="rounded-lg bg-card/80 p-3 backdrop-blur-sm ring-1 ring-[var(--color-border)]/60">
              Nederland: <b>180+</b> clients
            </div>
            <div className="rounded-lg bg-card/80 p-3 backdrop-blur-sm ring-1 ring-[var(--color-border)]/60">
              Dubai: <b>12+</b> projecten
            </div>
            <div className="rounded-lg bg-card/80 p-3 backdrop-blur-sm ring-1 ring-[var(--color-border)]/60">
              Spanje: <b>8+</b> makelaars
            </div>
            <div className="rounded-lg bg-card/80 p-3 backdrop-blur-sm ring-1 ring-[var(--color-border)]/60">
              Bali: <b>4+</b> ontwikkelaars
            </div>
          </div>
        </SectionSurface>

        {/* Growth - single monthly widget + minimal overview/results */}
        <div className="grid grid-cols-1 gap-4">
          <StatsWidget timeframeLabel="Per maand" />
          <SectionSurface className="p-0" contentClassName="p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Groeioverzicht (indicatief)</div>
            </div>
            {/* Minimal year stats */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center justify-between rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">
                <span className="text-muted-foreground">2021</span>
                <span className="font-medium">10 clients</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">
                <span className="text-muted-foreground">2022</span>
                <span className="font-medium">45 clients</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">
                <span className="text-muted-foreground">2023</span>
                <span className="font-medium">120 clients</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">
                <span className="text-muted-foreground">2024</span>
                <span className="font-medium">200+ clients</span>
              </div>
            </div>
            <div className="my-5 h-px w-full bg-[var(--color-border)]/80" />
            <div className="mb-2 text-sm text-muted-foreground">Top resultaten</div>
            <ul className="grid grid-cols-1 gap-2 text-sm text-foreground/90">
              <li className="rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">1000% omzetgroei (Brabant Makelaar)</li>
              <li className="rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">31 afspraken eerste maand</li>
              <li className="rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">4 nieuwe locaties (franchise)</li>
              <li className="rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">3 nieuwe teamleden per maand</li>
              <li className="rounded-md bg-card/60 px-3 py-2 ring-1 ring-[var(--color-border)]/60">€6 ROI per €1 investering</li>
            </ul>
          </SectionSurface>
        </div>
      </div>
    </SectionShell>
  );
}
