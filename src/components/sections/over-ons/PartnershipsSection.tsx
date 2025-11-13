"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface PartnershipData {
  title: string
  description: string
  image: any // Media object from CMS
  features: string[]
}

export interface PartnershipsSectionProps {
  badge?: string;
  title?: string;
  partnerships?: PartnershipData[];
  quote?: string;
  quoteAuthor?: string;
  featuresLabel?: string;
  className?: string;
}

export default function PartnershipsSection({
  badge = "Partnerships",
  title = "Onze Partnerships",
  featuresLabel = "Key Areas",
  partnerships = [
    {
      title: "IQI Global",
      description: "Internationale expansie partner. Versterkt onze slagkracht met wereldwijde aanwezigheid en expertise.",
      image: "/images/iqiglobal.jpg",
      features: [
        "Internationale expansie",
        "40.000+ agents wereldwijd",
        "Real Accelerate = IQI NL",
        "Dubai, Spanje, Bali",
      ],
    },
    {
      title: "SETTL.",
      description: "Ons eigen makelaarskantoor waar we dagelijks in de praktijk staan. Alles wat we doen voor onze klanten, hebben we zelf getest, verbeterd en bewezen.",
      image: "/images/editbv.jpg",
      features: [
        "Eigen makelaarskantoor",
        "Ervaring uit de praktijk",
        "Bewezen strategieën",
        "Real-world testing ground",
      ],
    },
  ],
  quote = "We spreken niet vanaf de zijlijn, maar met ondernemers die zelf midden in de vastgoedwereld staan en jouw doelen begrijpen.",
  quoteAuthor = "Real Accelerate",
  className,
}: PartnershipsSectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px]",
        "bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)] text-foreground",
        className
      )}
    >
      {/* subtle grid background for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ps-yellow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ps-yellow-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg
          className="block h-[84px] w-full md:h-[120px] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)"></path>
        </svg>
      </div>

      {/* bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          className="block h-[84px] w-full md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)"></path>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {badge}
          </span>
          <h2 className="mt-4 type-h2 text-black">{title}</h2>
        </div>

        <div className="grid mt-8 md:mt-12 grid-cols-1 lg:grid-cols-[1fr_2rem_1fr] gap-y-12 md:gap-y-16">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              className={cn(
                "space-y-8 md:space-y-10",
                index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-3"
              )}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", stiffness: 260, damping: 24, delay: index * 0.05 }}
            >
              {/* Visual: full-bleed image card */}
              <div className="relative rounded-[var(--radius-xl)] overflow-hidden mb-6 md:mb-8">
                <div className="relative aspect-video w-full">
                  <Image
                    src={partnership.image?.sizes?.medium?.url || partnership.image?.url}
                    alt={partnership.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="type-h3 text-black">
                  {partnership.title}
                </h3>

                <p className="type-body text-black/70 leading-relaxed">
                  {partnership.description}
                </p>

                <div className="space-y-4">
                  <h4 className="type-h4 text-black">{featuresLabel}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {partnership.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 type-body text-black/70"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: (index * 0.1) + (featureIndex * 0.05), ease: "easeOut" }}
                      >
                        <div className="w-2 h-2 rounded-full bg-black" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <blockquote className="border-l-4 border-black/80 pl-4 space-y-3">
                    <p className="type-body text-black/70 italic">
                      "{quote}"
                    </p>
                    <cite className="block type-small font-medium text-black">
                      {quoteAuthor}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
