"use client";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Check } from "lucide-react";

export default function HowWeStartSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 bg-section">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="howwestart-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#howwestart-grid)" className="text-foreground" />
          </svg>
        </div>
        {/* Glow strip */}
        <div className="absolute left-1/2 top-[22%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.12),transparent)] blur-[26px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            Onze werkwijze
          </span>
          <h2 className="max-w-4xl text-center text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground">
            Transparante samenwerking vanaf dag één
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4">
            Zo werken wij samen aan jouw groei:
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-[var(--color-surface-3)] border border-[var(--color-border)] rounded-[20px] p-8 max-w-4xl mx-auto shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <ul className="mx-auto max-w-2xl space-y-4 type-body text-[var(--color-text-secondary)]">
            {[
              {
                title: "Persoonlijke aanpak",
                text: "Elk makelaarskantoor is uniek. Wij passen onze strategie aan jouw specifieke situatie en doelen."
              },
              {
                title: "Continue communicatie",
                text: "Je bent altijd op de hoogte. Wekelijkse updates en directe toegang tot je vaste contactpersoon."
              },
              {
                title: "Transparante resultaten",
                text: "Real-time dashboards en heldere rapportages. Je ziet precies wat werkt en waar we optimaliseren."
              },
              {
                title: "Praktische implementatie",
                text: "Geen theorieën, maar hands-on begeleiding. Wij pakken aan wat nodig is voor jouw groei."
              },
              {
                title: "Langdurig partnerschap",
                text: "Wij bouwen mee aan je succes. Niet voor een project, maar voor duurzame groei op lange termijn."
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-[var(--brand-500)] flex-shrink-0" />
                <div>
                  <strong className="text-foreground">{item.title}:</strong> <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
