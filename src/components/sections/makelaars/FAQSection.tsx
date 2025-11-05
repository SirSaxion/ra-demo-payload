"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertTriangle, Target, Clock, Home, Users, TrendingDown, Swords } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

export interface FAQSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  contactLinkText?: string;
  contactLinkHref?: string;
  phoneLabel?: string;
  phonePrefix?: string;
  ctaText?: string;
  phoneNumber?: string;
  phoneLink?: string;
  faqs?: FAQItem[];
}

export default function FAQSection({
  kicker = "Veelgestelde Vragen",
  title = "Vragen van makelaars",
  subtitle = "Heeft u nog andere vragen? Neem contact op met ons",
  contactLinkText = "support team",
  contactLinkHref = "/contact",
  phoneLabel = "Andere vraag?",
  phonePrefix = "Bel direct:",
  ctaText = "of plan een gratis strategiesessie in.",
  phoneNumber = "+31850602989",
  phoneLink,
  faqs = [
    {
      question: "Hoe snel zie ik resultaat?",
      answer: "Afhankelijk van je huidige situatie zien veel kantoren binnen enkele weken verbetering.",
      icon: "Clock"
    },
    {
      question: "Werkt dit ook in mijn regio?",
      answer: "Ja, onze aanpak is flexibel en aanpasbaar per marktgebied.",
      icon: "Home"
    },
    {
      question: "Wat kost het?",
      answer: "We werken met pakketten op maat. Tijdens een intake bespreken we de investering en verwachte resultaten.",
      icon: "Target"
    },
    {
      question: "Moet ik alles uit handen geven?",
      answer: "Nee, je bepaalt zelf of je volledig ontzorgd wilt worden of liever samenwerkt.",
      icon: "Users"
    },
    {
      question: "Wat maakt Real Accelerate anders?",
      answer: "Wij zijn makelaars én adviseurs. Wij praten niet vanaf de zijlijn, maar helpen met bewezen oplossingen uit de praktijk.",
      icon: "AlertTriangle"
    }
  ]
}: FAQSectionProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.AlertTriangle;
  };
  return (
    <section className="py-20 bg-section">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                  {kicker}
                </span>
              </div>
              <h2 className="type-h2 text-foreground mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground type-body mb-6">
                {subtitle}{' '}
                <Link
                  href={contactLinkHref}
                  className="text-brand-500 font-medium hover:underline transition-colors">
                  {contactLinkText}
                </Link>{' '}
                {ctaText}
              </p>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/30">
                <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                  <svg className="size-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{phoneLabel}</p>
                  <p className="text-sm text-muted-foreground">
                    {phonePrefix}{' '}
                    <a href={phoneLink || `tel:${phoneNumber}`} className="text-brand-500 font-medium hover:underline transition-colors">
                      {phoneNumber.replace('+31', '0').replace(/(.{3})/, '$1 ')}
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
              {faqs.map((faq, index) => {
                const Icon = getIcon(faq.icon);
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                    <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                      <div className="flex items-center gap-4">
                        <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                          <Icon className="size-4 text-brand-500" />
                        </div>
                        <span className="text-left font-semibold text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
