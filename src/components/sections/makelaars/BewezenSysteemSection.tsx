"use client";

import React from "react";
import Image from "next/image";
import { Target } from "lucide-react";

interface BenefitItem {
  text: string;
}

export interface BewezenSysteemSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  decorativeImage?: any; // Media object from CMS
  imageSrc?: string; // Fallback URL
  imageAlt?: string;
  benefitsTitle?: string;
  benefits?: BenefitItem[];
  quote?: string;
}

export default function BewezenSysteemSection({
  kicker = "Onze ervaring",
  title = "Ervaring uit de branche – wij staan er zelf middenin",
  subtitle = "Real Accelerate is geen traditioneel marketingbureau. Wij zijn makelaars. Met <strong>SETTL.</strong> staan we dagelijks in de markt. Alles wat wij doen voor onze klanten, hebben we zelf getest, verbeterd en bewezen.",
  decorativeImage,
  imageSrc = "/media/emiro_working_at_desk-640x480.png",
  imageAlt = "Emiro aan het werk achter zijn laptop",
  benefitsTitle = "WAAROM DIT VERSCHIL MAAKT",
  benefits = [
    { text: "Ervaring uit de praktijk – wij zijn zelf makelaars" },
    { text: "Transparant, no-nonsense samenwerken" },
    { text: "Bewezen strategieën en systemen" },
    { text: "Altijd gericht op duurzame groei" },
    { text: "Persoonlijk en menselijk in onze aanpak" }
  ],
  quote = "Daarom begrijpen wij makelaarskantoren beter dan wie dan ook: we kennen de uitdagingen én de oplossingen."
}: BewezenSysteemSectionProps) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24 pb-8 md:pb-12">
      {/* Background grid pattern - zoals The Real Problem */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_100%)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="system-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#system-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {kicker}
            </span>
          </div>
          
          {/* Two column layout: text left, image right */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-6">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />
            </div>
            
            {/* Emiro working image */}
            <div className="lg:order-last">
              <div className="relative overflow-hidden rounded-xl shadow-lg max-w-md mx-auto lg:mx-0 lg:max-w-none aspect-[4/3]">
                <Image
                  src={decorativeImage?.sizes?.medium?.url || decorativeImage?.url || imageSrc}
                  alt={decorativeImage?.alt || imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach Details */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-[var(--brand-400)]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{benefitsTitle}</h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[var(--brand-400)] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mission Statement */}
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg p-6 text-center">
              <p className="text-lg font-medium text-[var(--color-text-secondary)] italic leading-relaxed">
                "{quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
