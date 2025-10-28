"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Target, Users, AlertTriangle, Search, Zap } from "lucide-react";
import Link from "next/link";

interface FAQSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  badge = "Veelgestelde Vragen",
  title = "Vragen van HR-professionals",
  subtitle = "Heeft u nog andere vragen? Neem contact op met ons support team of plan een gratis strategiesessie in.",
}: FAQSectionProps = {}) {
  return (
    <section className="py-20 bg-section">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                  {badge}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {subtitle}
              </p>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/30">
                <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                  <svg className="size-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Andere vraag?</p>
                  <p className="text-sm text-muted-foreground">
                    Bel direct:{' '}
                    <a href="tel:+31850602989" className="text-brand-500 font-medium hover:underline transition-colors">
                      085 060 2989
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3">
              <AccordionItem
                value="item-1"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Clock className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Hoe snel kan ik resultaten verwachten?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Binnen 3 weken zijn we live met je eerste campagne. De eerste gekwalificeerde sollicitaties kun je binnen 4-6 weken verwachten. Onze klanten zien gemiddeld binnen 3 maanden een significante toename in sollicitaties en kwaliteit.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Target className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Wat kost jullie dienstverlening?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Onze investment start vanaf €2.500 per maand voor een complete recruitment marketing setup. Dit is aanzienlijk goedkoper dan traditionele recruitment fees van 15-20% per plaatsing. Daarnaast heb je advertentiebudget nodig (vanaf €1.000/maand afhankelijk van je doelstellingen).
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Users className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Werkt dit ook voor niche functies?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Absoluut. Juist voor niche functies werkt employer branding en proactieve talent attraction excellent. We hebben ervaring met tech roles, finance, healthcare, engineering en meer. De strategie passen we aan op jouw specifieke talent market.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <AlertTriangle className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Wat als ik al een recruitment team heb?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Perfect! Wij versterken je recruitment team met marketing expertise. Je recruiters krijgen een constante stroom van gekwalificeerde kandidaten om mee te werken. Wij focussen on attraction en branding, jouw team op selectie en hiring. Samen onverslaanbaar.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Search className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Vervangen jullie onze ATS/recruitment software?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Nee, we integreren juist met je bestaande tools. Of het nou Recruitee, Personio, Workday of iets anders is - wij zorgen dat kandidaten naadloos in jouw systeem terechtkomen. Onze tools vullen aan, vervangen niet.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Zap className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Werken jullie met garanties?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Ja. Als we binnen 6 maanden geen significante verbetering in sollicitatie volume en kwaliteit bereiken, werken we door tot we het wel bereiken - zonder extra kosten. We geloven in onze aanpak en staan daarachter met concrete garanties.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
