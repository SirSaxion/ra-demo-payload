"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface FAQQuestion {
  icon?: string;
  question?: string;
  answer?: string;
}

export interface FAQSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  contactLinkText?: string;
  contactLinkHref?: string;
  contactCtaText?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneCallText?: string;
  questions?: FAQQuestion[];
}

export default function FAQSection({
  kicker = "VEELGESTELDE VRAGEN",
  title = "Frequently Asked Questions",
  subtitle = "Heeft u nog andere vragen? Neem contact op met ons",
  contactLinkText = "support team",
  contactLinkHref = "/contact",
  contactCtaText = "of plan een gratis strategiesessie in.",
  phoneLabel = "Andere vraag?",
  phoneNumber = "085 060 2989",
  phoneCallText = "Bel direct:",
  questions = []
}: FAQSectionProps) {
  // Get icon component from icon name
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="size-4 text-brand-500" /> : null;
  };

  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-section">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <div className="mb-4">
                <div className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500 border border-brand-500/20">
                  {kicker}
                </div>
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
                {contactCtaText}
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
                    {phoneCallText}{' '}
                    <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-brand-500 font-medium hover:underline transition-colors">
                      {phoneNumber}
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
              {questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                  <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                        {getIcon(faq.icon)}
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
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
