"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog";
import { CheckCircle2, TrendingUp, Users, Award, Handshake } from "lucide-react";

export interface HeroProps {
  kicker?: string
  title?: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  editBVImage?: string
  editBVTitle?: string
  editBVSubtitle?: string
  editBVStats?: Array<{ icon: string; text: string }>
  floatingStat?: { value: string; label: string }
  quote?: string
  usps?: Array<{ text: string }>
}

export default function Hero({
  kicker = "Voor hypotheekadviseurs",
  title = "Bewezen campagnes voor hypotheekadviseurs",
  subtitle = "Word onafhankelijk van offerte-sites en bouw een voorspelbare klantenstroom met bewezen campagnes en duurzaamheid als toegevoegde waarde.",
  ctaPrimary = { label: "Plan een gratis strategiegesprek", href: "/contact" },
  ctaSecondary = { label: "Bekijk Edit BV resultaten", href: "#hypotheek-cases" },
  editBVImage = "/media/editbv-640x480.jpg",
  editBVTitle = "Edit BV Partnership",
  editBVSubtitle = "Zwolle • Duurzaamheid expertise",
  editBVStats = [
    { icon: "TrendingUp", text: "46 afspraken uit 1.300 contacten" },
    { icon: "Users", text: "Duurzaamheid consulten als differentiator" },
    { icon: "Award", text: "Bewezen campagne resultaten" }
  ],
  floatingStat = { value: "3.5%", label: "Conversie ratio" },
  quote = "Van offerte-site afhankelijkheid naar voorspelbare groei",
  usps = [
    { text: "Stop met dure, slechte leads van Independer/Priva" },
    { text: "Word gewaardeerd voor je expertise, niet je prijs" },
    { text: "Klanten die jou al willen in plaats van leads" }
  ]
}: HeroProps) {
  const { openDialog } = useStrategyDialog();

  return (
    <section className="relative isolate overflow-hidden bg-hero text-foreground pt-[var(--nav-h)] [--nav-h:56px] md:[--nav-h:76px]">
      {/* Subtle brand glow overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_35%,color-mix(in_oklab,var(--brand-500)_8%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,color-mix(in_oklab,var(--bg-hero)_35%,transparent))]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-400)_22%,transparent),transparent_65%)] opacity-70 mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 pb-0 min-h-[calc(100svh-var(--nav-h))]">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Edit BV Partnership Showcase */}
          <div className="relative">
            {/* Partnership showcase container */}
            <div className="relative mb-8 mt-12 md:mt-8 lg:mt-0">
              {/* Edit BV partnership badge */}
              <div className="rounded-2xl bg-[var(--bg-hero)]/90 backdrop-blur-sm border border-[var(--color-border)] overflow-hidden shadow-lg">
                {/* Edit BV Image Thumbnail */}
                <div className="relative h-40 mb-4">
                  <Image
                    src={editBVImage}
                    alt="Edit BV - Duurzaamheid expertise partner"
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-hero)]/60 to-transparent" />
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-400)]/10 flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-[var(--brand-500)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--brand-400)] text-lg">{editBVTitle}</h3>
                      <p className="text-sm text-foreground/70">{editBVSubtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-foreground/80">
                    {editBVStats.map((stat, idx) => {
                      const Icon = stat.icon === 'TrendingUp' ? TrendingUp : stat.icon === 'Users' ? Users : Award;
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-[var(--brand-400)]" />
                          <span>{stat.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-[var(--bg-hero)]/90 backdrop-blur-sm border border-[var(--color-border)] px-4 py-2 transform rotate-2">
                <div className="text-sm font-semibold text-[var(--brand-400)]">{floatingStat.value}</div>
                <div className="text-xs text-foreground/60">{floatingStat.label}</div>
              </div>
            </div>

            <p className="text-center text-sm text-[var(--brand-200)] italic">
              "{quote}"
            </p>
          </div>

          {/* Right: Anti-commoditization Messaging */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {kicker}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.025em] text-foreground mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: subtitle }} />

            <div className="space-y-3 mb-8">
              {usps.map((usp, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-400)]" />
                  <span dangerouslySetInnerHTML={{ __html: usp.text }} />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={openDialog}
                className="rounded-xl bg-[var(--brand-400)] px-6 py-4 text-base font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]"
              >
                {ctaPrimary.label}
              </Button>
              <Button
                asChild
                variant="link"
                className="h-12 rounded-xl px-4 text-[var(--brand-200)] hover:text-[var(--brand-100)] hover:underline underline-offset-4 focus-visible:ring-[var(--brand-400)]/40"
              >
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}