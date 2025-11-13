"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface FloatingStat {
  value: string;
  label: string;
  position: 'top-left' | 'bottom-right' | 'middle-right';
  rotation: string;
}

interface TrustIndicator {
  text: string;
}

interface HeroSectionProps {
  badge?: string;
  titleBefore?: string;
  titleHighlight?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  floatingStats?: FloatingStat[];
  ctaPrimary?: {
    label: string;
    href?: string;
  };
  ctaSecondary?: {
    label: string;
    href?: string;
  };
  trustIndicators?: TrustIndicator[];
}

export default function HeroSection({
  badge,
  titleBefore,
  titleHighlight,
  subtitle,
  image = "/images/placeholder.jpg",
  imageAlt = "HR team at work",
  floatingStats = [
    { value: "73%", label: "More applications", position: "top-left", rotation: "-rotate-2" },
    { value: "3x", label: "Faster hiring", position: "bottom-right", rotation: "rotate-3" },
    { value: "Top talent", label: "", position: "middle-right", rotation: "rotate-2" },
  ],
  ctaPrimary = { label: "Start free analysis", href: "/contact" },
  ctaSecondary = { label: "View success stories", href: "/cases" },
  trustIndicators = [
    { text: "30 minutes (worth €1000)" },
    { text: "Non-binding" },
    { text: "Proven results" },
  ],
}: HeroSectionProps = {}) {
  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return '-top-6 -left-6';
      case 'bottom-right':
        return '-bottom-6 -right-6';
      case 'middle-right':
        return 'top-1/2 -right-4';
      default:
        return '';
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-section text-foreground min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-76px)] mt-14 md:mt-[76px] flex items-center">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_8%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_6%,transparent),transparent_70%)]" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      <div className="mx-auto max-w-[90rem] px-4 lg:px-6 py-8 md:py-12 grid gap-10 lg:grid-cols-2 items-center">
        {/* Hero Visual - Image Grid */}
        <div className="relative order-2 lg:order-1">
          <div className="relative max-w-2xl mx-auto">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[var(--color-border)]">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stats cards */}
            {floatingStats.map((stat, index) => (
              <div
                key={index}
                className={`absolute ${getPositionClasses(stat.position)} bg-[var(--bg-background)]/95 backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-xl transform ${stat.rotation} hover:rotate-0 transition-transform duration-300 hover:scale-105`}
              >
                {stat.label === "" ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)]" />
                    <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                  </div>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-[var(--brand-600)]">{stat.value}</div>
                    <div className="text-xs text-foreground/60">{stat.label}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>

          <h1 className="mt-5 md:mt-6 max-w-[24ch] text-5xl font-extrabold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-5xl xl:text-6xl">
            {titleBefore}{" "}
            <span className="relative inline-block">
              <span className="text-[var(--brand-400)]">{titleHighlight}</span>
              <svg
                className="pointer-events-none absolute left-0 right-0 -bottom-2 h-[12px] w-full md:h-[14px] lg:h-[16px]"
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
              </svg>
            </span>
          </h1>

          <p 
            className="mt-4 md:mt-6 max-w-xl text-lg md:text-xl text-[var(--color-text-secondary)]"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-xl bg-[var(--brand-400)] px-8 py-6 text-lg font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]"
              onClick={() => ctaPrimary.href && window.location.href === ctaPrimary.href}
            >
              {ctaPrimary.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 py-6 text-lg font-semibold border-[var(--color-border)] hover:bg-[var(--brand-400)]/10"
              onClick={() => ctaSecondary.href && window.location.href === ctaSecondary.href}
            >
              {ctaSecondary.label}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-400)]" />
                {indicator.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
