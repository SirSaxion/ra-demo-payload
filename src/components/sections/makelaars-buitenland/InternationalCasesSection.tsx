"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ArrowRight, Globe, TrendingUp, DollarSign, Target, BarChart3 } from "lucide-react";

interface InternationalCase {
  id: number;
  name: string;
  role: string;
  company: string;
  story: string;
  achievement: string;
  metric: string;
  avatar: any; // Media object from CMS
  rating: number;
  country: string;
  projectValue: string;
  span?: string;
}

const getCountryColor = (country: string) => {
  switch (country) {
    case "Dubai":
      return "bg-amber-50 text-amber-800 border-amber-200";
    case "Spanje":
      return "bg-red-50 text-red-800 border-red-200";
    case "Bali":
      return "bg-green-50 text-green-800 border-green-200";
    case "Portugal":
      return "bg-blue-50 text-blue-800 border-blue-200";
    default:
      return "bg-black/[0.04] text-black border-black/10";
  }
};

const getCountryIcon = () => <Globe className="w-4 h-4" />;

export interface InternationalCasesSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  cases?: InternationalCase[]
  bottomInsightIcon?: string
  bottomInsightText?: string
}

export default function InternationalCasesSection({
  badge = 'Internationale Cases',
  title = 'Van Nederland naar de wereld',
  subtitle = 'Ontdek hoe makelaars via IQI Global miljoenen aan internationale projecten verkopen',
  cases = [
    {
      id: 1,
      name: "Bali Resort Development",
      role: "Toeristische appartementen",
      company: "Bali Paradise Villas",
      story: "Internationale campagne gericht op investeerders. Meer dan 400 leads en 15 verkochte units binnen 3 maanden via onze bewezen aanpak.",
      achievement: "15 units verkocht",
      metric: "400+ leads",
      avatar: null,
      rating: 5,
      country: "Bali",
      projectValue: "15 units",
      span: "col-span-1"
    },
    {
      id: 2,
      name: "Costa Blanca Project", 
      role: "Nieuwbouwproject Spanje",
      company: "Mediterranean Estates",
      story: "Gerichte campagnes leverden 200+ warme leads op met een conversie van 10% naar afspraak. Real Accelerate zorgde voor de complete marketingaanpak.",
      achievement: "200+ warme leads",
      metric: "10% conversie",
      avatar: null,
      rating: 5,
      country: "Spanje", 
      projectValue: "200+ leads",
      span: "col-span-1"
    },
    {
      id: 3,
      name: "Alpen Appartementen",
      role: "Luxe project Oostenrijk", 
      company: "Alpine Residences",
      story: "Positionering rond rendement én beleving. Het project werd volledig uitverkocht dankzij slimme storytelling en gerichte campagnes in DACH-markten.",
      achievement: "Project uitverkocht",
      metric: "100% verkocht",
      avatar: null,
      rating: 5,
      country: "Oostenrijk",
      projectValue: "Uitverkocht", 
      span: "col-span-1"
    },
    {
      id: 4,
      name: "Portugal Villa Project",
      role: "Luxury villas",
      company: "Algarve Development Group", 
      story: "Complete internationale campagne met events in Nederland en België. Van concept tot verkoop in 8 maanden met 85% conversie van leads naar afspraken.",
      achievement: "85% conversie",
      metric: "8 maanden",
      avatar: null,
      rating: 5,
      country: "Portugal",
      projectValue: "85% conversie",
      span: "col-span-1"
    }
  ],
  bottomInsightIcon = 'Target',
  bottomInsightText = '<strong>Totaal verkocht:</strong> €17.7M+ via IQI Global netwerk in 2024'
}: InternationalCasesSectionProps) {
  const [selectedCase, setSelectedCase] = useState<InternationalCase | null>(null);

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 bg-section text-foreground">
      {/* Background grid pattern for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="international-cases-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#international-cases-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {cases.map((case_item, index) => (
              <motion.div
                key={case_item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {case_item.avatar && (
                        <div className="relative w-12 h-12 rounded-full border-2 border-[var(--color-border)] shadow-md overflow-hidden">
                          <Image 
                            src={case_item.avatar?.sizes?.thumbnail?.url || case_item.avatar?.url || 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=150&h=150&fit=crop&crop=face'} 
                            alt={case_item.avatar?.alt || case_item.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{case_item.name}</h3>
                        <p className="text-sm text-[var(--color-text-secondary)]">{case_item.role}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">{case_item.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-[var(--brand-400)] text-black text-xs font-semibold border-0 px-3 py-1 rounded-lg flex items-center gap-1">
                        <Target className="h-3 w-3" /> {case_item.achievement}
                      </Badge>
                      <Badge className="bg-[var(--brand-400)] text-black text-xs font-semibold border-0 px-3 py-1 rounded-lg flex items-center gap-1">
                        <DollarSign className="h-3 w-3" /> {case_item.metric}
                      </Badge>
                      <Badge className="bg-[var(--brand-400)] text-black text-xs font-semibold border-0 px-3 py-1 rounded-lg flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" /> {case_item.projectValue}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-4 relative z-10">
                    <div className="relative mb-5">
                      <Quote className="absolute -top-1 -left-1 w-6 h-6 text-[var(--brand-500)]/50" />
                      <p className="text-base text-[var(--color-text-secondary)] leading-relaxed pl-7 font-medium italic">"{case_item.story}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            <Target className="h-6 w-6 text-[var(--brand-500)]" />
            <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsightText }} />
          </div>
        </div>
      </div>
    </section>
  );
}
