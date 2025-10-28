"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart3,
  DollarSign,
  Building2,
  Rocket,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

interface ResultData {
  company: string;
  logo?: string;
  image?: string;
  mainMetric: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface ResultsBentoGridProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  results?: ResultData[];
  bottomInsight?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ResultsBentoGrid({
  kicker = "Resultaten uit de praktijk",
  title = "Bewezen resultaten van makelaars",
  subtitle = "Onze klanten zijn makelaarskantoren die slimmer willen werken en sneller willen groeien. Met onze aanpak zien ze onder andere:",
  results = [
    {
      company: "DE BRABANT MAKELAAR",
      logo: "/images/brabantmakelaar_logo.webp",
      image: "/images/1.EmiroSmolders-Settle-DSC06894-.webp",
      mainMetric: "€10k → €100k/maand",
      description: "Van 2 naar 8 werknemers in 18 maanden tijd. Complete transformatie van klein kantoor naar groeiend bedrijf.",
      icon: "DollarSign",
      featured: true
    },
    {
      company: "MARCO VAN BARNEVELD",
      image: "/images/10.EmiroSmolders-Settle-DSC06970-.jpg",
      mainMetric: "4 nieuwe franchise locaties",
      description: "Pipeline vol voor meer groei. Succesvolle uitbreiding door bewezen systeem.",
      icon: "Building2"
    },
    {
      company: "THOMA POST",
      image: "/images/teamfoto_einde.png",
      mainMetric: "31 afspraken eerste maand",
      description: "Directe resultaten vanaf dag één. Bewezen aanpak die werkt.",
      icon: "Target"
    }
  ],
  bottomInsight = "<strong>Efficiëntere processen,</strong> een sterkere merkpositionering, meer voorspelbare afspraken en omzet, en meer tijd voor klanten door automatisering",
  ctaLabel = "Lees ervaringen van makelaars",
  ctaHref = "/cases"
}: ResultsBentoGridProps) {
  const getIcon = (iconName: string) => {
    const icons: any = {
      DollarSign, TrendingUp, Users, Clock, Target, BarChart3, Building2, Rocket
    };
    return icons[iconName] || Target;
  };
  return (
    <section className="relative overflow-hidden bg-section text-foreground pt-8 md:pt-12 pb-16 md:pb-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,var(--bg-section)_0%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="results-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-400)]" />
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Results Grid with Images */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => {
            const Icon = getIcon(result.icon);
            return (
              <div
                key={index}
                className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {result.image && (
                    <Image
                      src={result.image}
                      alt={result.company}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
                  
                  {/* Logo overlay if available */}
                  {result.logo && (
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg overflow-hidden bg-white p-1.5 shadow-lg">
                      <Image
                        src={result.logo}
                        alt={result.company}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  
                  {/* Featured badge */}
                  {result.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center gap-1 bg-[var(--brand-400)] text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[var(--brand-400)]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {result.company}
                    </h3>
                  </div>
                  
                  {/* Main metric */}
                  <div className="mb-3">
                    <div className="text-2xl font-extrabold text-[var(--brand-400)]">
                      {result.mainMetric}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {result.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom insight and CTA */}
        <div className="text-center mt-12 md:mt-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            <Rocket className="h-6 w-6 text-[var(--brand-400)]" />
            <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsight }} />
          </div>
          
          {/* CTA to cases page */}
          <div>
            <Link href={ctaHref}>
              <Button
                size="lg"
                className="bg-[var(--brand-400)] text-black hover:bg-[var(--brand-500)] font-semibold group"
              >
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
