"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export default function HeroSection({
  kicker = "Voor ambitieuze vastgoedprofessionals",
  title = "Door vastgoedexperts, voor vastgoedexperts",
  subtitle = "Vanuit onze eigen ervaring helpen wij jouw bedrijf groeien en projecten sneller verkopen met slimme online marketing.",
  ctaPrimary = { label: "Plan een bakkie ☕", href: "mailto:info@realaccelerate.nl" },
  ctaSecondary = { label: "Bekijk cases", href: "/cases" },
}: HeroSectionProps = {}) {
  const { openDialog } = useStrategyDialog();
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-hero text-foreground pt-[var(--nav-h)] [--nav-h:56px] md:[--nav-h:76px]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/herofootage_34s.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/herofootage_first_frame.webp"
        aria-hidden="true"
      />

      {/* Anthracite readability gradient (soft black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-hero)]/70 via-[var(--bg-hero)]/55 to-[var(--bg-hero)]/20" />

      {/* Subtle brand glow + vignette for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,color-mix(in_oklab,var(--brand-500)_8%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--bg-hero)_35%,transparent))]" />
        {/* Yellow spotlight from bottom center, shining upward */}
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-400)_32%,transparent),transparent_65%)] opacity-70 mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 pb-0 min-h-[calc(100svh-var(--nav-h))]">
        <div className="w-full max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.025em] text-foreground">
            {title.split(', ')[0]},
            <span className="block text-foreground">{title.split(', ')[1]?.split(' ')[0]} <span className="relative inline-block">
              {title.split(' ').slice(-1)[0]}
              <svg
                className="pointer-events-none absolute left-0 right-0 -bottom-2 sm:-bottom-3 h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-full"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="scribble-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--brand-400)" />
                    <stop offset="100%" stopColor="var(--brand-200)" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 10 C 18 13, 35 6, 52 9 S 85 14, 98 8"
                  fill="none"
                  stroke="url(#scribble-gradient)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 8 C 20 11, 36 5, 53 8 S 86 12, 98 7"
                  fill="none"
                  stroke="url(#scribble-gradient)"
                  strokeOpacity="0.6"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span></span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl text-lg sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="rounded-xl bg-[var(--brand-400)] px-4 sm:px-6 py-3 sm:py-5 text-base sm:text-lg font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]"
            >
              <a href={ctaPrimary.href}>
                {ctaPrimary.label}
              </a>
            </Button>
            <Button
              asChild
              variant="link"
              className="h-12 rounded-xl px-4 text-[var(--brand-200)] hover:text-[var(--brand-100)] hover:underline underline-offset-4 focus-visible:ring-[var(--brand-400)]/40"
            >
              <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
            </Button>
          </div>

          {/* Cozy club: tiny avatar stack + trust copy */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-foreground/70">
            <div className="flex -space-x-2">
              <Image
                src="/images/brabantmakelaar_avatar.webp"
                alt="Amory - De Brabant Makelaar"
                width={40}
                height={40}
                priority
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-1 ring-[var(--color-border)] shadow-sm"
              />
              <Image
                src="/images/thomapost_avatar.webp"
                alt="Marlies - Thoma Post"
                width={40}
                height={40}
                priority
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-1 ring-[var(--color-border)] shadow-sm"
              />
              <Image
                src="/images/paulthijssen_avatar.webp"
                alt="Paul - Paul Thijssen Makelaardij"
                width={40}
                height={40}
                priority
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-1 ring-[var(--color-border)] shadow-sm"
              />
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-hero/40 text-foreground/90 ring-1 ring-[var(--color-border)] flex items-center justify-center text-sm font-medium backdrop-blur-sm">
                +
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-300)]" />
                <span className="text-xs sm:text-sm">30 minuten</span>
              </div>
              <Separator orientation="vertical" className="h-4 bg-foreground/30" />
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-300)]" />
                <span className="text-xs sm:text-sm">Vrijblijvend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


