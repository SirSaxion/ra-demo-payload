"use client";

import { useMemo } from "react";
import { AnimatedCounter, CounterDisplayProps } from "@/components/ui/rolling-counter";
import { SectionShell, SectionHeader } from "@/components/sections/Section";

type Metric = {
  label: string;
  value: number;
  places: number[];
  prefix?: string;
  suffix?: string;
  delayMs?: number;
};

interface NumbersSectionProps {
  title?: string;
  kicker?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export default function NumbersSection({
  title = "Resultaten in cijfers",
  kicker = "WAAR WE TROTS OP ZIJN",
  stats = [
    { value: "30+", label: "jaar marketing ervaring team" },
    { value: "40+", label: "jaar vastgoed ervaring team" },
    { value: "600k+", label: "ad spend" },
    { value: "1375", label: "bakken koffie" },
  ],
}: NumbersSectionProps = {}) {
  // Parse stats from CMS format to metrics format
  const metrics: Metric[] = useMemo(
    () =>
      stats.map((stat, idx) => {
        // Extract number from value string (e.g., "50+", "95%", "200k")
        const numMatch = stat.value.match(/\d+/);
        const value = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = stat.value.replace(/\d+/, "");
        
        // Generate places array based on value
        const places: number[] = [];
        let divisor = 1;
        while (divisor <= value) {
          divisor *= 10;
        }
        divisor /= 10;
        while (divisor >= 1) {
          places.push(divisor);
          divisor /= 10;
        }
        
        return {
          label: stat.label,
          value,
          places: places.length > 0 ? places : [1],
          suffix,
          delayMs: idx * 100,
        };
      }),
    [stats],
  );

  const counterBase: Partial<CounterDisplayProps> = {
    fontSize: 64,
    borderRadius: 16,
    horizontalPadding: 10,
    gap: 6,
    gradientFrom: "#161616",
    gradientTo: "transparent",
    textColor: "var(--foreground)",
    digitStyle: { width: "0.8ch" },
  };

  return (
    <SectionShell background="grid" paddingY="lg" containerWidth="7xl">
      <SectionHeader kicker={kicker} title={title} align="center" />
      <NumbersGrid metrics={metrics} counterBase={counterBase} />
    </SectionShell>
  );
}

import { useEffect, useRef, useState } from "react";

function useInViewOnce<T extends HTMLElement>(margin = "0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: margin, threshold: 0.2 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, margin]);

  return { ref, inView } as const;
}

function NumbersGrid({
  metrics,
  counterBase,
}: {
  metrics: Metric[];
  counterBase: Partial<CounterDisplayProps>;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>("-60px");

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4"
    >
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#161616] p-5 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex flex-col items-center gap-2 py-3 text-center">
            <div className="flex items-end gap-2">
              {m.prefix ? (
                <span className="translate-y-1 type-h3 text-foreground/80">{m.prefix}</span>
              ) : null}
              <AnimatedCounter
                value={m.value}
                start={0}
                delayMs={m.delayMs}
                places={m.places}
                play={inView}
                {...counterBase}
              />
              {m.suffix ? (
                <span className="translate-y-1 type-h3 text-foreground/80">{m.suffix}</span>
              ) : null}
            </div>
            <div className="type-caption font-medium text-[var(--color-text-secondary)]">{m.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}



