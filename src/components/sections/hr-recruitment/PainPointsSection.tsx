"use client";

import { UserX, XCircle, FileQuestion, AlertTriangle } from "lucide-react";
import Image from "next/image";

interface PainPointsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function PainPointsSection({
  badge = "De 3 grootste frustraties",
  title = "Herken je dit?",
  subtitle = "Als HR-professional loop je vast in dezelfde patronen",
}: PainPointsSectionProps = {}) {
  return (
    <section id="solution" className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="problem-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#problem-grid)" className="text-foreground" />
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

        {/* Pain Points Grid with Images */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Pain Point 1 */}
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Sollicitaties blijven uit"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <UserX className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Sollicitaties blijven uit
                </h3>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Je vacatures staan online, maar de kwaliteitskandidaten reageren niet. Je bereik is te klein en je werkgeversmerk niet sterk genoeg.
              </p>
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Kandidaten haken af"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Kandidaten haken af
                </h3>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Je komt ver in het proces, maar op het laatste moment kiezen kandidaten toch voor de concurrent. Je employee value proposition is niet overtuigend genoeg.
              </p>
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/placeholder.jpg"
                alt="Kwaliteit sluit niet aan"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-3)] to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <FileQuestion className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Kwaliteit sluit niet aan
                </h3>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Je krijgt sollicitaties, maar de kandidaten matchen niet met je eisen. Je screening proces is inefficiënt en kost te veel tijd.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
            <AlertTriangle className="h-6 w-6 text-[var(--brand-400)]" />
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              <strong className="text-foreground">Het gevolg:</strong> Vacatures blijven maandenlang open, teams raken overbelast en groei stagneert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
