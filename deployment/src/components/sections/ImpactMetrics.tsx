"use client";

import { SectionHeader, SectionShell, SectionSurface } from "@/components/sections/Section";
import { AnimatedCounter } from "@/components/ui/rolling-counter";
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

export default function ImpactMetrics() {
  return (
    <SectionShell
      background="grid"
      paddingY="lg"
      topWave="swoop"
      bottomWave="arc"
      className="text-foreground [--card:var(--soft-black)] [--color-surface-1:var(--soft-black)]"
    >
      <SectionHeader
        kicker="Impact in cijfers"
        title="Bewezen resultaten"
        subtitle="De impact die we samen met onze klanten hebben gerealiseerd"
      />

      {/* Top KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Totale omzetgroei" value={50} suffix="M+" icon={Coins} places={[10, 1]} />
        <KpiCard label="Nieuwe werknemers" value={127} suffix="+" icon={Users} places={[100, 10, 1]} />
        <KpiCard label="Gemiddelde groei" value={340} suffix="%" icon={Activity} places={[100, 10, 1]} />
        <KpiCard label="Client rating" value={4} suffix=".9/5" icon={Star} places={[1]} />
      </div>
    </SectionShell>
  );
}
