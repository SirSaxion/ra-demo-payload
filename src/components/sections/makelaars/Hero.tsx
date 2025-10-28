"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Avatar {
  src: string;
  alt: string;
  tilt: string;
}

interface FloatingStat {
  title: string;
  subtitle: string;
}

interface TrustIndicator {
  text: string;
}

export interface HeroProps {
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
  trustIndicators?: TrustIndicator[];
  avatarsTitle?: string;
  avatars?: Avatar[];
  floatingStats?: FloatingStat[];
  testimonialQuote?: string;
}

export default function Hero({
  kicker = "Voor groeiende makelaarskantoren",
  title = "Groei slimmer met je makelaarskantoor",
  subtitle = "Bij Real Accelerate helpen wij makelaarskantoren groeien met bewezen strategieën, efficiëntere processen en praktische ondersteuning. Geen theorie, maar aanpakken wat écht werkt – rechtstreeks uit de praktijk van ons eigen makelaarskantoor SETTL. en de klanten die wij dagelijks begeleiden.",
  ctaPrimary = { label: "Plan een gratis strategiesessie", href: "/contact" },
  ctaSecondary = { label: "Ontdek onze aanpak", href: "#methodologie" },
  trustIndicators = [
    { text: "30 minuten strategiesessie" },
    { text: "Volledig vrijblijvend" },
    { text: "Direct bruikbare inzichten" }
  ],
  avatarsTitle = "Sluit je aan bij 200+ succesvolle makelaars",
  avatars = [
    { src: "/images/brabantmakelaar_avatar.webp", alt: "Amory - De Brabant Makelaar", tilt: "-rotate-1" },
    { src: "/images/binkpartners_avatar.webp", alt: "Pieter - Bink & Partners", tilt: "rotate-3" },
    { src: "/images/paulthijssen_avatar.webp", alt: "Paul - Paul Thijssen Makelaardij", tilt: "-rotate-2" },
    { src: "/images/cat1.jpeg", alt: "Makelaar 5", tilt: "rotate-1" },
    { src: "/images/cat2.jpeg", alt: "Makelaar 6", tilt: "-rotate-3" },
    { src: "/images/cat3.png", alt: "Makelaar 7", tilt: "rotate-2" },
    { src: "/images/cat1.jpeg", alt: "Makelaar 8", tilt: "-rotate-1" },
    { src: "/images/cat2.jpeg", alt: "Makelaar 9", tilt: "rotate-3" },
    { src: "/images/cat3.png", alt: "Makelaar 10", tilt: "-rotate-2" },
    { src: "/images/cat1.jpeg", alt: "Makelaar 11", tilt: "rotate-1" },
    { src: "/images/cat2.jpeg", alt: "Makelaar 12", tilt: "-rotate-1" },
  ],
  floatingStats = [
    { title: "30+ jaar", subtitle: "Gecombineerde ervaring" },
    { title: "SETTL.", subtitle: "Eigen makelaarskantoor" }
  ],
  testimonialQuote = "Honderden makelaars geholpen sinds 2021"
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-section text-foreground min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-76px)] mt-14 md:mt-[76px] flex items-center">
      {/* Background gradient similar to homepage */}
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
        {/* Floating Testimonial Avatars Grid */}
        <div className="relative order-2 lg:order-1">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-foreground/80 mb-8">
              {avatarsTitle}
            </h3>
              
              {/* Avatar Grid with floating animation */}
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="grid grid-cols-5 lg:grid-cols-6 gap-2 lg:gap-3 mb-8">
                  {avatars.map((avatar, i) => (
                    <div 
                      key={i} 
                      className={`relative group transform transition-all duration-300 hover:scale-110 hover:z-10 ${avatar.tilt}`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        width={80}
                        height={80}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover ring-2 ring-[var(--brand-400)]/20 shadow-lg transition-all duration-300 group-hover:ring-[var(--brand-400)]/60 group-hover:shadow-xl"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Floating stats */}
                {floatingStats.length > 0 && (
                  <div className="absolute -top-8 -left-8 bg-[var(--bg-background)]/90 backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-3 py-2 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 hover:scale-105">
                    <div className="text-sm font-semibold text-[var(--brand-600)]">{floatingStats[0].title}</div>
                    <div className="text-xs text-foreground/60">{floatingStats[0].subtitle}</div>
                  </div>
                )}
                
                {floatingStats.length > 1 && (
                  <div className="absolute -bottom-6 -right-8 bg-[var(--bg-background)]/90 backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-3 py-2 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-105">
                    <div className="text-sm font-semibold text-[var(--brand-600)]">{floatingStats[1].title}</div>
                    <div className="text-xs text-foreground/60">{floatingStats[1].subtitle}</div>
                  </div>
                )}
              </div>
              
              <p className="text-center text-sm font-medium text-foreground/70 mt-4">
                "{testimonialQuote}"
              </p>
            </div>
          </div>

        {/* Hero Content */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          
          <h1 className="mt-5 md:mt-6 max-w-[24ch] text-5xl font-extrabold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          
          <p className="mt-4 md:mt-6 max-w-xl text-lg md:text-xl text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: subtitle }} />
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-xl bg-[var(--brand-400)] px-8 py-6 text-lg font-bold text-[var(--color-accent-contrast)] shadow-[0_8px_24px_rgba(255,215,0,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--brand-500)]"
              onClick={() => window.location.href = ctaPrimary.href}
            >
              {ctaPrimary.label}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 py-6 text-lg font-semibold border-[var(--color-border)] hover:bg-[var(--brand-400)]/10"
              onClick={() => window.location.href = ctaSecondary.href}
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
