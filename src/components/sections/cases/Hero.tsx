"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/rolling-counter";
import { SectionShell } from "@/components/sections/Section";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import Image from "next/image";
import { Users, LineChart, Globe, Briefcase, TrendingUp, type LucideIcon } from "lucide-react";

export interface HeroProps {
  badge?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  ctaPrimary?: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  stats?: Array<{
    icon: string
    label: string
    value: number
    suffix?: string
  }>
  image?: string
  imageAlt?: string
}

export default function Hero({
  badge = "Cases & Resultaten",
  title = "Bewezen resultaten van",
  titleHighlight = "honderden",
  subtitle = "Van lokale makelaars tot internationale projecten – onze beste transformaties.",
  ctaPrimary = "Claim gratis strategiesessie",
  ctaSecondary = "Bekijk top cases",
  ctaSecondaryHref = "#beste-cases",
  stats = [
    { icon: "Users", label: "Clients", value: 200, suffix: "+" },
    { icon: "LineChart", label: "Omzetgroei", value: 50, suffix: "M+" },
    { icon: "Briefcase", label: "Deals", value: 2847 },
    { icon: "Globe", label: "Landen", value: 4 }
  ],
  image = "/images/rudy-thumbs-up.png",
  imageAlt = "Rudy met duim omhoog"
}: HeroProps) {
  const { openDialog } = useStrategyDialog();

  return (
    <SectionShell
      className="bg-hero text-foreground pt-[var(--nav-h)] [--nav-h:56px] md:[--nav-h:76px]"
      background="vignette"
      containerWidth="7xl"
      paddingY="none"
    >
      {/* Subtle brand glow overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,color-mix(in_oklab,var(--brand-500)_8%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--bg-hero)_35%,transparent))]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-400)_22%,transparent),transparent_65%)] opacity-70 mix-blend-screen" />
      </div>

      <div className="h-[calc(100svh-var(--nav-h))] grid items-center xl:grid-cols-12">
        <div className="w-full xl:col-span-7 min-w-0">
          {/* Hero copy */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h1 className="mt-5 md:mt-6 max-w-full md:max-w-[24ch] text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-5xl xl:text-6xl break-words overflow-wrap-anywhere">
            {title} <span className="text-[var(--brand-400)]">{titleHighlight}</span> vastgoedprofessionals
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
            {subtitle}
          </p>

          {/* CTA buttons under headline */}
          <div className="mt-7 md:mt-9 flex flex-wrap items-center gap-4">
            <Button
              onClick={openDialog}
              className="h-auto rounded-full bg-[linear-gradient(180deg,var(--brand-400),var(--brand-500))] px-6 py-4 text-base font-semibold text-[var(--color-accent-contrast)] shadow-[0_10px_30px_rgba(245,208,39,0.25)] transition-transform hover:-translate-y-0.5 focus-visible:ring-[var(--brand-400)]/40"
            >
              {ctaPrimary}
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border border-[color-mix(in_oklab,var(--brand-400)_35%,var(--color-border))] bg-hero/30 px-6 py-4 text-base text-foreground hover:bg-hero/40 focus-visible:ring-[var(--brand-400)]/30"
            >
              <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
            </Button>
          </div>

          {/* Stats — Grid aligned like design */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl md:max-w-4xl tabular-nums text-foreground">
            {stats.map((stat, idx) => {
              const iconMap: Record<string, LucideIcon> = { Users, LineChart, Briefcase, Globe, TrendingUp }
              const Icon = iconMap[stat.icon] || Users
              
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs md:text-[13px] uppercase tracking-wider text-foreground/60">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-[var(--brand-400)]" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <AnimatedCounter
                      value={stat.value}
                      fontSize={36}
                      padding={0}
                      horizontalPadding={0}
                      borderRadius={0}
                      gradientFrom="transparent"
                      gradientTo="transparent"
                      textColor="var(--foreground)"
                      places={stat.value >= 1000 ? [1000, 100, 10, 1] : stat.value >= 100 ? [100, 10, 1] : [10, 1]}
                    />
                    {stat.suffix && (
                      <span className="text-2xl md:text-[28px] font-bold leading-none">{stat.suffix}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>


        </div>

        {/* Right: Rudy image with bottom mask shadow */}
        <div className="relative hidden xl:block xl:col-span-5 xl:h-full">
          <div className="relative w-full h-[60vh] min-h-[380px] lg:h-full">
            {/* Circular glow behind the image (shifted right, larger, softer) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 z-0 h-[52vw] w-[52vw] max-h-[720px] max-w-[720px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_60%_50%,color-mix(in_oklab,var(--brand-400)_50%,transparent)_0%,transparent_75%)] blur-[28px] opacity-90 mix-blend-screen"
            />
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1536px) 30vw, (min-width: 1280px) 28vw, (min-width: 1024px) 26vw, 90vw"
              className="relative z-[1] object-contain object-right-bottom lg:translate-y-0 xl:translate-y-0 lg:-translate-x-20 xl:-translate-x-28 lg:scale-[1] xl:scale-[1] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,var(--bg-hero)_6%,var(--bg-hero)_100%)] [mask-image:linear-gradient(to_top,transparent_0%,var(--bg-hero)_6%,var(--bg-hero)_100%)]"
              priority
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
