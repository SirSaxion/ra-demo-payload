import React from "react";
import { CheckCircle, XCircle, Quote, BookOpen, Compass, Wallet, Headphones, ShieldCheck, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  aspect: string;
  aspectIcon: string;
  other: string;
  realAccelerate: string;
}

interface TestimonialData {
  quote: string;
  author: string;
  company: string;
}

interface CultureSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  comparisonRows?: ComparisonRow[];
  testimonial?: TestimonialData;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-4 h-4" />,
  Compass: <Compass className="w-4 h-4" />,
  Wallet: <Wallet className="w-4 h-4" />,
  Headphones: <Headphones className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Handshake: <Handshake className="w-4 h-4" />,
};

const CultureSection: React.FC<CultureSectionProps> = ({
  badge = "ONZE PERSOONLIJKHEID",
  title = "VAN VASTGOEDONDERNEMERS",
  subtitle = "Hoe wij werken:",
  comparisonRows = [
    {
      aspect: "Kennis & Ervaring",
      aspectIcon: "BookOpen",
      other: "Theorieën zonder praktijk",
      realAccelerate: "Ervaring uit de praktijk",
    },
    {
      aspect: "Aanpak",
      aspectIcon: "Compass",
      other: "Standaard oplossingen",
      realAccelerate: "We combineren ervaring met vernieuwing",
    },
    {
      aspect: "Kosten",
      aspectIcon: "Wallet",
      other: "Bureau op afstand",
      realAccelerate: "Ondernemers die zelf midden in de vastgoedwereld staan",
    },
    {
      aspect: "Service",
      aspectIcon: "Headphones",
      other: "Alleen advies, geen hands-on",
      realAccelerate: "We zeggen waar het op staat",
    },
    {
      aspect: "Garantie",
      aspectIcon: "ShieldCheck",
      other: "Formele relaties",
      realAccelerate: "Plezier en ambitie gaan hand in hand",
    },
    {
      aspect: "Relatie",
      aspectIcon: "Handshake",
      other: "Snelle transacties",
      realAccelerate: "Duurzame relaties boven snelle deals",
    },
  ],
  testimonial = {
    quote: "Bij ons draait het niet alleen om strategieën en processen, maar vooral om mensen. We werken vanuit vertrouwen en gelijkwaardigheid, en we bouwen liever duurzame relaties dan snelle transacties.",
    author: "Real Accelerate Team",
    company: "Over onze aanpak",
  },
  className,
}) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pb-16 md:pb-24",
        "bg-[#1A1A1A] text-foreground",
        className
      )}
    >
      {/* subtle grid background for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="cc-dark-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cc-dark-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="mt-2 mb-6 type-h2 text-foreground">{subtitle}</h2>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Comparison Table */}
          <div className="relative w-full overflow-x-auto rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm text-foreground mb-10">
            <Table className="w-full text-[16px] md:text-[17px]">
              <TableHeader className="sticky top-0 z-10 bg-black/60 backdrop-blur-sm text-foreground">
                <TableRow className="border-b border-white/20">
                  <TableHead className="py-4 md:py-5 px-2 md:px-3 whitespace-nowrap text-foreground">Aspect</TableHead>
                  <TableHead className="py-4 md:py-5 px-2 md:px-3 whitespace-nowrap">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-destructive px-3 py-1.5 text-white">
                      <XCircle className="w-4 h-4" />
                      <span>Andere bureaus</span>
                    </div>
                  </TableHead>
                  <TableHead className="py-4 md:py-5 px-2 md:px-3 whitespace-nowrap">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-[var(--brand-600)] to-[var(--brand-400)] px-3 py-1.5 text-[var(--neutral-900)]">
                      <CheckCircle className="w-4 h-4" />
                      <span>Real Accelerate</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonRows.map((row, idx) => (
                  <TableRow
                    key={idx}
                    className="border-b border-white/20 odd:bg-white/[0.05] even:bg-transparent hover:bg-white/[0.08] transition-colors"
                  >
                    <TableCell className="py-5 md:py-6 px-2 md:px-3">
                      <div className="flex items-center gap-3 font-semibold text-foreground">
                        {iconMap[row.aspectIcon]}
                        <span>{row.aspect}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 md:py-6 px-2 md:px-3">
                      <div className="flex items-center gap-2 text-foreground/80">
                        <XCircle className="w-4 h-4 text-destructive" />
                        <span>{row.other}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 md:py-6 px-2 md:px-3">
                      <div className="flex items-center gap-2 font-medium text-foreground">
                        <CheckCircle className="w-4 h-4 text-[var(--brand-600)]" />
                        <span>{row.realAccelerate}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Testimonial */}
          <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)] p-2 ring-1 ring-[color-mix(in_oklab,var(--brand-500)_40%,transparent)]">
                <Quote className="w-5 h-5 text-[var(--brand-600)]" />
              </div>
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono tracking-wider uppercase text-[var(--brand-400)]">
                    <span className="inline-block h-1 w-1 rounded-full bg-[var(--brand-500)]" />
                    💬 Testimonial
                  </span>
                </div>
                <blockquote className="italic leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="text-right">
                  <cite className="text-sm font-medium text-foreground not-italic">
                    - {testimonial.author}, {testimonial.company}
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
