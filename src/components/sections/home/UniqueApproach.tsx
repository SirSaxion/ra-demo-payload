"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, MapPin, Gauge, Users, Coffee } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

function BackgroundLayers() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--bg-section),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ua-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ua-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Cinematic gradient beams (Linear/Aceternity-inspired) */}
      <div
        className="absolute left-1/2 top-1/3 h-56 w-[140vw] -translate-x-1/2 rotate-[8deg] bg-[linear-gradient(90deg,transparent,rgba(255,237,102,0.10),transparent)] blur-[28px] will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--ua-parallax-x,0)*-10px), calc(var(--ua-parallax-y,0)*5px), 0)",
          transition: "transform 700ms var(--ease-entrance, cubic-bezier(0.16, 1, 0.3, 1))",
        }}
      />
      

      {/* Spotlight follows cursor (progressive enhance) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,color-mix(in_oklab,var(--bg-section)_100%,transparent),color-mix(in_oklab,var(--bg-section)_40%,transparent)_60%,transparent_100%)]"
        style={{
          background:
            "radial-gradient(700px_700px_at_var(--ua-spot-x,50%)_var(--ua-spot-y,30%), color-mix(in_oklab, var(--brand-500) 18%, transparent), transparent 60%)",
        }}
      />

      {/* Vignette edges for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--bg-section)_12%,transparent))]" />
    </div>
  );
}

function FlowPath() {
  return (
    <>
      {/* Desktop version */}
      <svg
        className="pointer-events-none absolute left-8 right-8 top-1/2 -z-10 h-[120px] sm:h-[180px] lg:h-[240px] w-auto -translate-y-1/2 hidden lg:block"
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ua-flow-desktop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.0" />
            <stop offset="15%" stopColor="var(--brand-500)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="var(--brand-200)" stopOpacity="0.35" />
            <stop offset="85%" stopColor="var(--brand-500)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 130 C 200 60, 420 30, 600 80 S 980 160, 1200 90"
          fill="none"
          stroke="url(#ua-flow-desktop)"
          strokeWidth="2"
          strokeLinecap="round"
          className="[filter:drop-shadow(0_0_12px_color-mix(in_oklab,var(--brand-500)_20%,transparent))]"
        />
      </svg>

      {/* Mobile version - smaller and simpler */}
      <svg
        className="pointer-events-none absolute left-4 right-4 top-1/2 -z-10 h-[60px] w-auto -translate-y-1/2 block lg:hidden"
        viewBox="0 0 400 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ua-flow-mobile" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.0" />
            <stop offset="20%" stopColor="var(--brand-500)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--brand-200)" stopOpacity="0.25" />
            <stop offset="80%" stopColor="var(--brand-500)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 50 C 80 30, 160 20, 200 35 S 320 55, 400 40"
          fill="none"
          stroke="url(#ua-flow-mobile)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="[filter:drop-shadow(0_0_8px_color-mix(in_oklab,var(--brand-500)_15%,transparent))]"
        />
      </svg>
    </>
  );
}

interface UniqueApproachSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  metricValue?: string;
  metricLabel?: string;
  card1Title?: string;
  card1Description?: string;
  card2Title?: string;
  card2Description?: string;
  card3Title?: string;
  card3Description?: string;
  card4Title?: string;
  card4Description?: string;
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
  decorativeImage?: any; // Media object from CMS
}

export default function UniqueApproachSection({
  kicker = "Onze unieke aanpak",
  title = "Wij zijn geen standaard marketingbureau. Wij zijn vastgoedondernemers én marketingexperts",
  subtitle = "Complete marketingaanpak, meetbare groei en ruimte om te ondernemen.",
  metricValue = "99%",
  metricLabel = "klanttevredenheid",
  card1Title = "Nieuwste technieken",
  card1Description = "Altijd voorop met de laatste marketing innovaties en tools.",
  card2Title = "Marketing van A tot Z",
  card2Description = "Complete marketingoplossing zonder gedoe of verborgen kosten.",
  card3Title = "Voorspelbare groei",
  card3Description = "Consistente resultaten door bewezen systemen en processen.",
  card4Title = "Onze eigen ervaring",
  card4Description = "Vanuit eigen vastgoedervaring weten wij wat werkt in de praktijk.",
  ctaText = "Klinkt als de juiste fit?",
  ctaButtonLabel = "Claim gratis strategiesessie",
  ctaButtonHref = "mailto:info@realaccelerate.nl",
  decorativeImage,
}: UniqueApproachSectionProps = {}) {
  const { openDialog } = useStrategyDialog();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x - rect.width / 2) / rect.width; // -0.5..0.5
      const py = (y - rect.height / 2) / rect.height;
      el.style.setProperty("--ua-spot-x", `${x}px`);
      el.style.setProperty("--ua-spot-y", `${y}px`);
      el.style.setProperty("--ua-parallax-x", `${px}`);
      el.style.setProperty("--ua-parallax-y", `${py}`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-section text-foreground">
      <BackgroundLayers />
      <FlowPath />

      <div className="mx-auto max-w-[90rem] px-2 md:px-4 lg:px-6 pt-6 pb-18 md:py-24">
        {/* Centered header above both columns */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h2 className="mt-4 type-h2 text-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-3 type-body text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 items-stretch gap-3 lg:gap-4 lg:grid-cols-6">
          {/* Left: image (no shadow) */}
          <div className="order-last lg:order-first lg:col-span-2 h-full lg:-ml-6 xl:-ml-8 2xl:-ml-12">
            <div className="relative w-full h-full lg:min-h-full">
              {/* Centered circular glow originating from image center */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[34vw] w-[34vw] max-h-[540px] max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--brand-400)_55%,transparent)_0%,transparent_70%)] blur-[24px] opacity-95 mix-blend-screen"
              />
              <Image
                src={decorativeImage?.url || "/media/emiro_pointing_right-400x300.png"}
                alt={decorativeImage?.alt || "Emiro wijst naar rechts"}
                fill
                loading="lazy"
                sizes="(min-width: 1536px) 24vw, (min-width: 1280px) 23vw, (min-width: 1024px) 22vw, 90vw"
                className="relative z-[1] object-contain object-left-bottom lg:-translate-x-2 xl:-translate-x-4 lg:translate-y-6 xl:translate-y-8 lg:scale-[0.72] xl:scale-[0.70] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)] [mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)]"
              />
            </div>
          </div>

          {/* Right: all existing content */}
          <div className="lg:col-span-4 lg:-ml-10 xl:-ml-14 2xl:-ml-20">
            {/* Header moved above grid */}

            {/* Grid (Bento-style) */}
            <div className="mx-auto mt-10 grid w-full max-w-none grid-cols-1 gap-6 lg:grid-cols-6">
              {/* A: Emphasis metric (like 100%) */}
              <Card className="relative border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-[var(--blur-xs)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)] lg:col-span-2">
                <CardContent className="p-4 md:p-5 min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center">
                  <div className="relative mx-auto flex max-w-xs flex-col items-center justify-center text-center">
                    {/* Scribble ring centered behind */}
                    <svg className="absolute left-1/2 top-1/2 -z-10 h-24 w-56 -translate-x-1/2 -translate-y-1/2 opacity-40" viewBox="0 0 220 90" aria-hidden="true">
                      <ellipse cx="110" cy="45" rx="90" ry="28" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="6" />
                      <ellipse cx="110" cy="45" rx="86" ry="22" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="4" />
                    </svg>
                    <div className="type-h1 leading-none tracking-[-0.02em] text-foreground">{metricValue}</div>
                    <div className="mt-2 type-h4">{metricLabel}</div>
                  </div>
                </CardContent>
              </Card>

              {/* B: Secure by default -> Exclusiviteit per regio */}
              <Card className="relative border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-[var(--blur-xs)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)] lg:col-span-2">
                <CardContent className="p-4 md:p-5 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                    <MapPin className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="mt-4 type-h4">{card1Title}</div>
                  <p className="mx-auto mt-2 max-w-xs type-body text-[var(--color-text-secondary)]">
                    {card1Description}
                  </p>
                </CardContent>
              </Card>

              {/* C: Faster than light -> Snelle implementatie */}
              <Card className="relative border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-[var(--blur-xs)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)] lg:col-span-2">
                <CardContent className="p-4 md:p-5 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                    <Gauge className="h-8 w-8 text-foreground" />
                  </div>
                  <div className="mt-4 type-h4">{card2Title}</div>
                  <p className="mx-auto mt-2 max-w-xs type-body text-[var(--color-text-secondary)]">
                    {card2Description}
                  </p>
                </CardContent>
              </Card>

              {/* D: Wide card with chart preview */}
              <Card className="relative border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-[var(--blur-xs)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)] lg:col-span-4">
                <CardContent className="p-0 md:p-0">
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                    <div className="p-4 md:p-5 text-center md:text-left">
                      <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                        <BriefcaseBusiness className="h-8 w-8" />
                      </div>
                      <div className="type-h4">{card3Title}</div>
                      <p className="mt-2 type-body text-[var(--color-text-secondary)]">
                        {card3Description}
                      </p>
                    </div>
                    <div className="relative flex items-center">
                      {/* smooth oscillating upward trend with subtle fill */}
                      <svg className="h-32 w-full" viewBox="0 0 400 180" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="ua-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0 140 C 40 150, 80 120, 120 135 S 200 125, 240 110 S 320 115, 360 90 S 390 75, 400 70" fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0 180 L 0 140 C 40 150, 80 120, 120 135 S 200 125, 240 110 S 320 115, 360 90 S 390 75, 400 70 L 400 180 Z" fill="url(#ua-fill)" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* E: Social proof / Ontzorging with avatars */}
              <Card className="relative border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-[var(--blur-xs)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-brand)] lg:col-span-2">
                <CardContent className="p-4 md:p-5 text-center md:text-left">
                  <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="type-h4">{card4Title}</div>
                  <p className="mt-2 type-body text-[var(--color-text-secondary)]">
                    {card4Description}
                  </p>

                  {/* Social proof list removed per request */}
                </CardContent>
              </Card>
            </div>

            {/* CTA moved below grid */}
          </div>
        </div>

        {/* CTA centered below both columns */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] px-4 py-3 shadow-sm backdrop-blur overflow-hidden">
            <BorderBeam
              duration={14}
              size={120}
              colorFrom="var(--brand-500)"
              colorTo="var(--brand-200)"
              className="from-transparent via-[var(--brand-500)] to-transparent"
              borderWidth={1}
              initialOffset={0}
              reverse={false}
            />
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-500)]" />
              <span className="type-body text-foreground">{ctaText}</span>
            </div>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <Separator orientation="horizontal" className="w-full sm:hidden" />
            <a
              href={ctaButtonHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-500)] px-5 py-5 text-sm font-bold text-[var(--color-accent-contrast)] shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2"
              aria-label="Schedule a coffee via email"
            >
              <Coffee className="h-4 w-4" />
              {ctaButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


