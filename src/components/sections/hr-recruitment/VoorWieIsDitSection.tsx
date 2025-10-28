"use client";

import { CheckCircle2, X, CheckCheck, AlertTriangle } from "lucide-react";

interface VoorWieIsDitSectionProps {
  badge?: string;
  title?: string;
}

export default function VoorWieIsDitSection({
  badge = "Voor wie is dit?",
  title = "Is dit de juiste fit voor jou?",
}: VoorWieIsDitSectionProps = {}) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
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
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Perfect For */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-[var(--brand-500)]/30 bg-[var(--color-surface-3)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)]" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-500)]/10 rounded-full flex items-center justify-center">
                    <CheckCheck className="h-6 w-6 text-[var(--brand-500)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Perfect voor jou als:</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je hebt structurele recruitment uitdagingen</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Vacatures blijven maandenlang open en het kost steeds meer moeite om talent te vinden</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je bent klaar voor een strategische aanpak</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Je wilt investeren in een duurzaam systeem, niet in quick fixes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je wilt eigenaar worden van je talent pipeline</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Niet langer afhankelijk van dure recruitment bureaus</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--brand-500)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je werkgeversmerk heeft potentie</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Je hebt een goed verhaal te vertellen, het moet alleen beter gecommuniceerd worden</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Not For */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-red-500/30 bg-[var(--color-surface-3)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-red-500/80 via-red-400/60 to-red-500/80" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Niet voor jou als:</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je zoekt een magic button</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Dit is een strategische transformatie die commitment vereist, geen instant oplossing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je hebt geen budget voor recruitment marketing</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Naast onze fee heb je advertentiebudget nodig voor campagnes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je werkgeversmerk is fundamenteel niet aantrekkelijk</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Als er structurele issues zijn in de organisatiecultuur, kunnen wij niet toveren</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Je wilt alles zelf doen en beheren</p>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">Onze aanpak vereist vertrouwen en samenwerking met ons team</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
