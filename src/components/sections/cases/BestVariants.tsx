"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionShell, SectionSurface } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Home, Globe2, TrendingUp, CheckCircle2, Users2, Target, type LucideIcon } from "lucide-react";

export interface BestVariantsProps {
  badge?: string
  title?: string
  subtitle?: string
  featuredBadge?: string
  featuredCompany?: string
  featuredSubtitle?: string
  featuredImage?: string
  featuredImageAlt?: string
  stats?: Array<{
    icon: string
    label: string
    from: string
    to: string
    suffix?: string
  }>
  results?: Array<{
    icon: string
    text: string
  }>
  otherCases?: Array<{
    company: string
    sector: string
    icon: string
    highlight: string
    bullets: string[]
    image?: string
  }>
}

function CasePoints({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-400)]" />
          {b}
        </li>
      ))}
    </ul>
  );
}

export default function BestVariants({
  badge = "Onze beste cases",
  title = "Uitgelichte transformaties",
  subtitle = "Een selectie van onze meest indrukwekkende resultaten – strak, helder en geloofwaardig.",
  featuredBadge = "FEATURED CASE",
  featuredCompany = "De Brabant Makelaar",
  featuredSubtitle = "Van 2 naar 8 werknemers in 18 maanden",
  featuredImage = "/images/case-de-brabant-makelaar.webp",
  featuredImageAlt = "Team De Brabant Makelaar",
  stats = [
    { icon: "TrendingUp", label: "Maandomzet", from: "€20k", to: "€65k", suffix: "in 18 maanden" },
    { icon: "Target", label: "Trajecten", from: "5", to: "12", suffix: "per maand" },
    { icon: "Users2", label: "Team", from: "2", to: "8", suffix: "werknemers" },
    { icon: "Building2", label: "Locaties", from: "1", to: "4", suffix: "nieuwe vestigingen" }
  ],
  results = [
    { icon: "TrendingUp", text: "Bewezen marketingmachine ingericht" },
    { icon: "Users2", text: "5 aankoopmakelaars actief" },
    { icon: "CheckCircle2", text: "Agenda's gevuld met kwalitatieve afspraken" }
  ],
  otherCases = [
    {
      company: "Thoma Post",
      sector: "Makelaars",
      icon: "Home",
      highlight: "31 afspraken in maand 1",
      bullets: ["Snelste start", "Kwalitatieve leads", "Consistente pijplijn"],
      image: "/images/thoma_thumb.png"
    },
    {
      company: "Dubai Property",
      sector: "Internationaal",
      icon: "Globe2",
      highlight: "$8.5M+ verkocht",
      bullets: ["Nationwide events", "IQI Global partner", "Snelle doorloop"],
      image: "/images/dubai_thumb.jpg"
    }
  ]
}: BestVariantsProps) {
  return (
    <SectionShell
      containerWidth="7xl"
      paddingY="lg"
      background="grid"
      className="bg-section text-foreground relative"
    >
      <div id="beste-cases" />
      {/* Header */}
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
          {badge}
        </span>
        <h3 className="mt-4 type-h2 text-foreground">{title}</h3>
        <p className="mt-2 type-body text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      </div>

      {/* Main featured case: De Brabant Makelaar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-8">
        {/* Left: Content with Post-its */}
        <div className="lg:col-span-7">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-0.5 text-[10px] md:text-xs font-semibold text-muted-foreground mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {featuredBadge}
            </div>
            <h2 className="type-h2 text-foreground mb-2">{featuredCompany}</h2>
            <p className="type-subtitle text-muted-foreground">{featuredSubtitle}</p>
          </div>

          {/* Stats Cards Grid - 1 col mobile, 2 cols tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {stats.map((stat, idx) => {
              const iconMap: Record<string, LucideIcon> = { TrendingUp, Target, Users2, Building2 }
              const Icon = iconMap[stat.icon] || TrendingUp
              
              return (
                <div key={idx} className="rounded-xl bg-[var(--brand-400)] p-5 border border-[var(--brand-500)] shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent-contrast)]/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-[var(--color-accent-contrast)]" />
                    </div>
                    <div className="text-xs font-bold text-[var(--color-accent-contrast)] uppercase tracking-wide">{stat.label}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-extrabold text-[var(--color-accent-contrast)]">{stat.from}</span>
                    <ArrowRight className="h-5 w-5 text-[var(--color-accent-contrast)]/70" />
                    <span className="text-3xl font-extrabold text-[var(--color-accent-contrast)]">{stat.to}</span>
                  </div>
                  {stat.suffix && (
                    <div className="text-xs text-[var(--color-accent-contrast)]/80">{stat.suffix}</div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Results list - styled differently */}
          <div className="grid grid-cols-1 gap-3">
            {results.map((result, idx) => {
              const iconMap: Record<string, LucideIcon> = { TrendingUp, Users2, CheckCircle2, Target, Building2 }
              const Icon = iconMap[result.icon] || CheckCircle2
              
              return (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-surface-2)]/50 border border-[var(--color-border)]">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand-500)]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-[var(--brand-500)]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{result.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 h-full">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-xl">
            {/* Single subtle glow point behind team photo */}
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-[var(--brand-400)] opacity-[0.12] blur-[80px]" />
            </div>
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain object-center saturate-[0.85] contrast-[0.98]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Other cases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherCases.map((c, idx) => {
          const iconMap: Record<string, LucideIcon> = { Home, Globe2, Building2, Users2 }
          const Icon = iconMap[c.icon] || Home
          
          return (
            <div key={idx} className="group cursor-pointer overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-400)]/60 hover:-translate-y-1 hover:shadow-xl">
            {/* Featured Image */}
            {c.image && (
              <div className="relative w-full h-48 overflow-hidden bg-[var(--color-surface-2)]">
                <Image
                  src={c.image}
                  alt={c.company}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{c.sector}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{c.company}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.highlight}</div>
                </div>
                <Icon className="h-6 w-6 text-[var(--brand-400)] flex-shrink-0" />
              </div>
              <CasePoints bullets={c.bullets.slice(0, 2)} />
            </div>
            </div>
          )
        })}
      </div>
    </SectionShell>
  );
}
