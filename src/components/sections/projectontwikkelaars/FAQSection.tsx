"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from "next/link";
import { Calendar, Target, Clock, Globe, TrendingUp, DollarSign, Shield, Users } from "lucide-react";

export interface FAQSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  contactLinkText?: string;
  contactLinkHref?: string;
  phoneLabel?: string;
  phoneNumber?: string;
}

export default function FAQSection({
  kicker = "VEELGESTELDE VRAGEN",
  title = "Frequently Asked Questions",
  subtitle = "Heeft u nog andere vragen? Neem contact op met ons",
  contactLinkText = "support team",
  contactLinkHref = "/contact",
  phoneLabel = "Andere vraag?",
  phoneNumber = "085 060 2989"
}: FAQSectionProps) {
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
                of plan een gratis strategiesessie in.
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
                    Bel direct:{' '}
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
              <AccordionItem
                value="item-1"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Calendar className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Hoe zorgen jullie voor snellere projectverkoop?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      We combineren creatieve online campagnes met offline beleving en slimme opvolgsystemen. Door gerichte marketing, sterke positionering en automatische én persoonlijke opvolging zorgen we dat jouw project sneller en effectiever in de markt komt. Onze ervaring als vastgoedondernemers zorgt dat we precies weten wat werkt.
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
                      <Globe className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Wat maakt jullie anders dan andere marketingbureaus?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Wij zijn geen traditioneel marketingbureau - we zijn vastgoedondernemers en investeerders. We begrijpen de uitdagingen van binnenuit omdat we ze zelf ervaren. Wat we voor klanten doen, hebben we zelf getest en bewezen. Dit geeft ons een uniek perspectief en zorgt voor betere resultaten dan bureaus die alleen vanuit theorie werken.
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
                      Afhankelijk van je huidige situatie zie je binnen enkele weken tot maanden concrete verbetering. Onze aanpak is gericht op snellere verkoopcycli dan traditionele marketing. We starten met een grondige analyse, implementeren daarna creatieve campagnes en slimme opvolging, en optimaliseren continu voor maximaal resultaat.
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
                      <DollarSign className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Hoe zit het met de investering en ROI?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      We werken met pakketten op maat die aansluiten bij jouw project en budget. De investering hangt af van de scope, maar we focussen op snelle ROI door efficiëntere verkoop. Tijdens de strategiesessie bespreken we transparant de investering en verwachte resultaten. Veel klanten zien de investering snel terugverdiend door verkortte verkoopcycli.
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
                      <Target className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Helpen jullie ook met branding en positionering?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Absoluut. Sterke branding en positionering zijn essentieel voor succesvolle projectverkoop. We helpen met het scherp neerzetten van je project, het creëren van een onderscheidende propositie en het ontwikkelen van marketing materialen die resoneren met jouw doelgroep. Of het nu Nederlandse of internationale projecten zijn, we zorgen dat je boodschap aankomt.
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
                      <Users className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Kunnen jullie meerdere projecten tegelijk managen?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Ja, we kunnen meerdere projecten tegelijk managen, elk met een dedicated aanpak. Elk project krijgt eigen strategie, marketing campagnes en opvolging. Door onze ervaring met verschillende projecten delen we best practices en creëren efficiëntie. Je vaste contactpersoon coördineert alles zodat projecten elkaar versterken in plaats van hinderen.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <TrendingUp className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Wat onderscheidt jullie van traditionele bureaus?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Het grootste verschil: wij zijn zelf vastgoedondernemers en investeerders. Traditionele bureaus werken vanuit theorie, wij vanuit praktijkervaring. We combineren creatieve marketing met slimme opvolging en moderne automatisering. Waar traditionele bureaus losse diensten leveren, bieden wij een complete verkoopmachine met transparante resultaten en continue optimalisatie.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                      <Shield className="size-4 text-brand-500" />
                    </div>
                    <span className="text-left font-semibold text-foreground">
                      Hoe gaan jullie om met verschillende doelgroepen per project?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      Elke doelgroep vraagt om een unieke aanpak en dat begrijpen we. Voor starter woningen zetten we andere marketing in dan voor luxury apartments. Voor internationale projecten richten we ons op investeerders, voor Nederlandse projecten vaak op eigen bewoners. We analyseren jouw specifieke project en doelgroep, en ontwikkelen een complete maatwerk strategie met passende campagnes en opvolging.
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