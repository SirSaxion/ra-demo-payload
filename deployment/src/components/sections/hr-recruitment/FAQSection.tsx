"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Target, Users, Zap, Shield, Phone, HelpCircle, DollarSign } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface FAQ {
  icon: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
  contactText?: string;
  phoneLabel?: string;
  phoneLink?: string;
}

const iconMap: Record<string, any> = {
  HelpCircle,
  DollarSign,
  Users,
  Target,
  Zap,
  Shield,
  Clock,
  Phone,
};

export default function FAQSection({
  badge,
  title,
  subtitle,
  faqs = [],
  contactText,
  phoneLabel,
  phoneLink,
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
              {contactText && phoneLabel && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/30">
                  <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                    <Phone className="size-4 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{contactText}</p>
                    <p className="text-sm text-muted-foreground">
                      <a href={phoneLink || `tel:${phoneLabel?.replace(/\s/g, '')}`} className="text-brand-500 font-medium hover:underline transition-colors">
                        {phoneLabel}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3">
              {faqs.map((faq, index) => {
                const IconComponent = iconMap[faq.icon] || HelpCircle;
                
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                    <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                      <div className="flex items-center gap-4">
                        <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                          <IconComponent className="size-4 text-brand-500" />
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
