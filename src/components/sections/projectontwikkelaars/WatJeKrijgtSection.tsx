"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Sparkles, Users, Trophy, Check, Zap, Target, Gem } from "lucide-react";

export interface WatJeKrijgtSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function WatJeKrijgtSection({
  badge = "Jouw complete pakket",
  title = "Van uitverkocht project naar volgende deal",
  subtitle = "Alles onder één dak: events, marketing, leads en support om jouw projecten razendsnel te verkopen."
}: WatJeKrijgtSectionProps) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wat-krijg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wat-krijg-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Top subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

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

        {/* Tabs Interface */}
        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-[var(--brand-500)] data-[state=active]:text-black bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-surface-3)]/80 transition-all data-[state=active]:shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                <span className="font-semibold text-sm">Event Organisatie</span>
              </TabsTrigger>
              <TabsTrigger
                value="marketing"
                className="data-[state=active]:bg-[var(--brand-500)] data-[state=active]:text-black bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-surface-3)]/80 transition-all data-[state=active]:shadow-lg"
              >
                <Zap className="h-5 w-5" />
                <span className="font-semibold text-sm">Marketing Power</span>
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="data-[state=active]:bg-[var(--brand-500)] data-[state=active]:text-black bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-surface-3)]/80 transition-all data-[state=active]:shadow-lg"
              >
                <Users className="h-5 w-5" />
                <span className="font-semibold text-sm">Expert Support</span>
              </TabsTrigger>
              <TabsTrigger
                value="guarantee"
                className="data-[state=active]:bg-[var(--brand-500)] data-[state=active]:text-black bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-surface-3)]/80 transition-all data-[state=active]:shadow-lg"
              >
                <Trophy className="h-5 w-5" />
                <span className="font-semibold text-sm">Garanties</span>
              </TabsTrigger>
            </TabsList>

            {/* Event Organisatie Content */}
            <TabsContent value="events" className="mt-0">
              <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-[var(--brand-500)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Evenementen door heel Nederland</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      Wij organiseren professionele evenementen voor jouw projecten - van concept tot uitvoering
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Complete Event Planning</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Locatie, catering, presentaties - alles geregeld</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Landelijk Netwerk</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Events in Amsterdam, Rotterdam, Utrecht en meer</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Bewezen Track Record</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Dubai projecten uitverkocht via events</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Lead Capture Systemen</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Moderne tools om bezoekers direct te converteren</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Follow-up Management</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Geautomatiseerde opvolging na het event</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Event Marketing Campagnes</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Marketing om bezoekers te trekken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Marketing Power Content */}
            <TabsContent value="marketing" className="mt-0">
              <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-[var(--brand-500)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Bewezen Marketing Strategieën</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      Van maanden naar weken verkoop met onze getest marketing machine
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Dubai-property.nl Strategieën</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Bewezen aanpak voor snelle projectverkoop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Multi-Channel Campagnes</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Online + offline voor maximale bereik</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Doelgroep Targeting</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Bereik exact de juiste kopers voor jouw project</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Content Creatie</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Video's, foto's en copy die verkopen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">ROI Tracking</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Real-time inzicht in campagne prestaties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Internationale Expertise</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Ervaring met Dubai, Spanje, Bali projecten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Expert Support Content */}
            <TabsContent value="support" className="mt-0">
              <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-[var(--brand-500)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Persoonlijke Begeleiding & Community</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      Je staat er niet alleen voor - ons team en community staan voor je klaar
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Customer Success Manager</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Dedicated contact persoon met vastgoed ervaring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Wekelijkse Q&A Sessies</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Live Zoom calls met project marketing experts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Online Trainingsportaal</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Toegang tot alle Real Accelerate modules</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Maandelijkse Bijeenkomsten</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Netwerk events met andere ontwikkelaars</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Exclusieve Community</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Kennisdeling met succesvolle ontwikkelaars</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Implementatie Support</h4>
                        <p className="text-[var(--color-text-secondary)] text-sm">Hands-on hulp bij opzetten van systemen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Garanties Content */}
            <TabsContent value="guarantee" className="mt-0">
              <div className="bg-gradient-to-br from-[var(--brand-400)]/10 via-[var(--brand-500)]/5 to-[var(--brand-600)]/10 border-2 border-[var(--brand-400)]/30 rounded-xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-500)] rounded-xl flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Risk-Free Samenwerking</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      We staan zo achter onze aanpak dat we garanties bieden - iets wat geen traditioneel bureau doet
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-[var(--color-surface-3)] border border-[var(--brand-400)]/20 rounded-xl p-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-[var(--brand-500)]" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Resultaatgarantie</h4>
                    <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                      <li>✓ Gegarandeerde leadgeneratie</li>
                      <li>✓ Geen resultaat = geen betaling</li>
                      <li>✓ Afspraken garanderen we</li>
                      <li>✓ Transparante KPI's</li>
                    </ul>
                  </div>

                  <div className="bg-[var(--color-surface-3)] border border-[var(--brand-400)]/20 rounded-xl p-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-[var(--brand-500)]" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">Snelheidsgarantie</h4>
                    <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
                      <li>✓ Eerste event binnen 4-6 weken</li>
                      <li>✓ Leads vanaf dag 1 van campagne</li>
                      <li>✓ Van maanden naar weken verkoop</li>
                      <li>✓ Snelle ROI realisatie</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-[var(--brand-500)] rounded-xl p-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Gem className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-black font-bold text-lg">
                      BONUS: Dubai-property.nl strategieën voor internationale projecten
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}