"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";

interface Feature {
  icon?: string;
  title?: string;
  description?: string;
}

interface Tab {
  label?: string;
  title?: string;
  description?: string;
  features?: Feature[];
}

export interface WatJeKrijgtSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
}

export default function WatJeKrijgtSection({
  badge = "Jouw complete pakket",
  title = "Van uitverkocht project naar volgende deal",
  subtitle = "Alles onder één dak: events, marketing, leads en support om jouw projecten razendsnel te verkopen.",
  tabs = []
}: WatJeKrijgtSectionProps) {
  // Get icon component from icon name
  const getIcon = (iconName?: string, className: string = "h-5 w-5") => {
    if (!iconName) return null;
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className={className} /> : null;
  };

  // If no tabs provided, return null
  if (!tabs || tabs.length === 0) {
    return null;
  }

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
          <Tabs defaultValue="tab-0" className="w-full">
            <TabsList className={`grid w-full ${tabs.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : `grid-cols-${Math.min(tabs.length, 4)}`} gap-2 bg-transparent h-auto p-0 mb-8`}>
              {tabs.map((tab, index) => {
                const firstFeature = tab.features?.[0];
                return (
                  <TabsTrigger
                    key={index}
                    value={`tab-${index}`}
                    className="data-[state=active]:bg-[var(--brand-500)] data-[state=active]:text-black bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-[var(--color-surface-3)]/80 transition-all data-[state=active]:shadow-lg"
                  >
                    {getIcon(firstFeature?.icon)}
                    <span className="font-semibold text-sm">{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Dynamic Tab Content */}
            {tabs.map((tab, tabIndex) => (
              <TabsContent key={tabIndex} value={`tab-${tabIndex}`} className="mt-0">
                <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-xl p-8 md:p-12">
                  {/* Tab Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[var(--brand-400)]/10 rounded-xl flex items-center justify-center">
                      {getIcon(tab.features?.[0]?.icon, "h-8 w-8 text-[var(--brand-500)]")}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{tab.title}</h3>
                      <p className="text-[var(--color-text-secondary)]">
                        {tab.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  {tab.features && tab.features.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {tab.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[var(--brand-500)] mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                            <p className="text-[var(--color-text-secondary)] text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
