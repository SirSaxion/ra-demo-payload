"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { cn } from "@/lib/utils";
import { Lightbulb, ClipboardCheck, LineChart, CheckCircle2, Coffee, type LucideIcon } from "lucide-react";
import { SectionShell, SectionHeader, SectionSurface } from "@/components/sections/Section";
import Link from "next/link";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  bullets: string[];
};

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  kicker?: string;
  steps?: Step[];
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  ClipboardCheck,
  LineChart,
};

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <pattern id="hiw-yellow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hiw-yellow-grid)" className="text-[var(--neutral-900)]" />
      </svg>
    </div>
  );
}

function RudySticker() {
  // Source image size: 398x1110 → aspect ratio ~2.79 (tall portrait)
  // Statisch beeld dat de sectiehoogte benut aan de rechterzijde.
  return (
    <figure className="pointer-events-none select-none hidden lg:block absolute inset-y-6 right-0 z-10 w-[205px] xl:w-[230px]">
      <div className="relative h-full w-full">
        <Image
          src="/images/rudyraket.png"
          alt="Rudy raket"
          width={398}
          height={1110}
          className="h-full w-auto max-w-full object-contain [-webkit-mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)] [mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)]"
        />
      </div>
    </figure>
  );
}

export default function HowItWorksSection({
  title = "Van intake naar voorspelbare groei",
  subtitle = "Drie heldere stappen. Precies wat je van ons kan verwachten.",
  kicker = "HOE HET WERKT",
  steps: propSteps,
}: HowItWorksSectionProps = {}) {
  const { openDialog } = useStrategyDialog();
  
  const defaultSteps: Step[] = [
    {
      id: 1,
      title: "Strategische Analyse",
      subtitle: "Huidige situatie & doelen in kaart",
      icon: "Lightbulb",
      bullets: [
        "Doelgroep & regio's",
        "Huidige website, campagnes en CRM in kaart",
        "Knelpunten die groei remmen",
        "Doelen afgestemd op jouw situatie",
      ],
    },
    {
      id: 2,
      title: "Custom Marketing Systeem",
      subtitle: "Jouw ideale klanten bereiken",
      icon: "ClipboardCheck",
      bullets: [
        "Websites/landingspagina's die converteren",
        "Leadgeneratie via Meta & Google",
        "Vindbaarheid (SEO + Google Business)",
        "Heractivatie + opvolging via CRM en flows",
      ],
    },
    {
      id: 3,
      title: "Resultaten & Optimalisatie",
      subtitle: "Meetbare resultaten en groei",
      icon: "LineChart",
      bullets: [
        "Real time tracking",
        "Continu optimalisatie",
      ],
    },
  ];
  
  const steps = propSteps || defaultSteps;

  const [active, setActive] = useState(0);
  // Animated progress from 0 → 1 over 10s controls auto-advance
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duration for each step cycle in milliseconds (was 5000ms)
  const DURATION_MS = 10000;

  const handleUserSelect = (idx: number) => {
    // If switching to a different step, reset progress to 0; otherwise keep current fill
    if (idx !== active) setProgress(0);
    setActive(idx);
    // Pause for 20s
    if (pauseRef.current) clearTimeout(pauseRef.current);
    setIsPaused(true);
    pauseRef.current = setTimeout(() => setIsPaused(false), 20000);
  };

  useEffect(() => {
    // rAF loop to update progress and auto-advance when reaching 1
    const loop = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!isPaused) {
        setProgress((p) => {
          const next = p + dt / DURATION_MS; // 10s to complete
          if (next >= 1) {
            // Advance and restart bar
            setActive((prev) => (prev + 1) % steps.length);
            return 0;
          }
          return next;
        });
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (pauseRef.current) clearTimeout(pauseRef.current);
      rafRef.current = null;
      pauseRef.current = null;
      lastTsRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, steps.length]);

  return (
    <SectionShell
      className="relative light-scope bg-transparent bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]"
      background="none"
      paddingY="lg"
      containerWidth="7xl"
      topWave="arc"
      bottomWave="sine"
    >
      <BackgroundGrid />
      <RudySticker />

      <div className="relative mx-auto mt-2 max-w-6xl lg:pr-[320px]">
        <SectionHeader
          kicker={kicker}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mx-auto"
          kickerVariant="custom"
          kickerClassName="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-2.5 py-0.5 text-[10px] md:text-xs font-semibold text-black"
          kickerDotClassName="bg-black"
        />
        {/* Horizontal stepper on desktop */}
        <div className="mb-4 hidden lg:flex items-center justify-center gap-4">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleUserSelect(idx)}
                className={cn(
                  "group cursor-pointer flex items-center gap-1 rounded-full border px-3 py-2 transition shadow-sm hover:-translate-y-0.5 hover:shadow-md",
                  active === idx
                    ? "border-[var(--brand-600)] ring-1 ring-[color-mix(in_oklab,var(--brand-600)_30%,transparent)] bg-[#F5DF8C]"
                    : "border-black/10 bg-[#F5DF8C] hover:bg-[#F5DF8C] hover:ring-1 hover:ring-black/10",
                )}
                aria-current={active === idx ? "step" : undefined}
              >
                <span
                  className={cn(
                    "inline-flex h-7 w-7 aspect-square items-center justify-center rounded-full border text-sm font-semibold shadow-sm",
                    active === idx
                      ? "border-black bg-black text-white"
                      : "border-black/50 bg-black/80 text-white/90",
                  )}
                >
                  {step.id}
                </span>
                <span className="type-body font-medium text-foreground">{step.title}</span>
              </button>
              {idx < steps.length - 1 && (
                <span aria-hidden className="h-[2px] w-8 rounded-full bg-black/30" />
              )}
            </div>
          ))}
        </div>

        {/* Vertical stepper on mobile */}
        <div className="lg:hidden">
          <div className="grid gap-3">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                onClick={() => handleUserSelect(idx)}
                className={cn(
                  "group relative flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition cursor-pointer hover:-translate-y-0.5 hover:shadow-md",
                  active === idx
                    ? "border-[var(--brand-600)] ring-1 ring-[color-mix(in_oklab,var(--brand-600)_26%,transparent)] bg-[#F5DF8C]"
                    : "border-black/10 bg-[#F5DF8C] hover:bg-[#F5DF8C]",
                )}
                aria-current={active === idx ? "step" : undefined}
              >
                <div
                  className={cn(
                    "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition",
                    active === idx
                      ? "border-[var(--brand-600)] bg-black/[0.05]"
                      : "border-black/10 bg-black/[0.04]",
                  )}
                >
                  {(() => {
                    const StepIcon = iconMap[step.icon] || Lightbulb;
                    return (
                      <StepIcon
                        className={cn(
                          "h-5 w-5",
                          active === idx ? "text-black" : "text-black/80",
                        )}
                      />
                    );
                  })()}
                  <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full ring-1 ring-[var(--color-border)]/50" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "type-caption font-semibold uppercase tracking-wide",
                        active === idx ? "text-black" : "text-black/70",
                      )}
                    >
                      Stap {step.id}
                    </span>
                    <span className="hidden type-caption text-[var(--color-text-muted)] sm:inline">•</span>
                    <span className="truncate type-body font-medium text-foreground">{step.title}</span>
                  </div>
                  <div className="truncate type-small text-black/70">{step.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details panel */}
        <div className="relative isolate mt-6 lg:mt-0" role="region" aria-labelledby="hiw-active-step-heading">
          <SectionSurface
            accent="none"
            className="relative overflow-hidden border-black/15 bg-[#F5DF8C] shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-0 ring-1 ring-black/5 transition-all duration-300 will-change-transform hover:-translate-y-px hover:shadow-[0_14px_44px_rgba(0,0,0,0.12)] hover:ring-black/10 motion-reduce:hover:translate-y-0 [background:linear-gradient(180deg,rgba(0,0,0,0.04),transparent_60%),#F5DF8C]"
            contentClassName="px-6 py-3 md:px-8 md:py-4"
          >
            {/* Progress bar (10s) anchored to the very top inside the card, thinner */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-black/15">
              <div
                className="h-full bg-black/60 will-change-transform [transform-origin:left]"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-black">
                {(() => {
                  const ActiveIcon = iconMap[steps[active].icon] || Lightbulb;
                  return <ActiveIcon className="h-5 w-5 text-[#F5DF8C]" />;
                })()}
              </div>
              <div>
                <h3 className="type-h4 font-bold tracking-[-0.01em] text-foreground">{steps[active].title}</h3>
                <p className="type-body text-black/70">{steps[active].subtitle}</p>
              </div>
            </div>

            <div className="mb-2 h-px w-full bg-black/10" />

            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {steps[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 type-body text-foreground">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-600)] drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="mailto:info@realaccelerate.nl"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[var(--brand-500)] px-6 text-base font-bold text-[var(--color-accent-contrast)] shadow-[var(--shadow-brand)] transition-colors hover:bg-[var(--brand-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2"
                aria-label="Plan een bakje koffie via email"
              >
                <Coffee className="h-5 w-5" />
                Plan een bakje koffie
              </a>
              {/* Temporarily commented out - bekijk cases */}
              {/* <Button asChild variant="ghost" className="h-12 rounded-xl px-5 text-base text-[var(--neutral-900)] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-500)]">
                <Link href="/cases" aria-label="Bekijk cases">Bekijk cases</Link>
              </Button> */}
            </div>
          </SectionSurface>
        </div>
      </div>
    </SectionShell>
  );
}


