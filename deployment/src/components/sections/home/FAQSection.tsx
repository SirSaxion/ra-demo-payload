'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Clock, CreditCard, Home, Users, Target, TrendingUp, HelpCircle } from 'lucide-react'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: string
    question: string
    answer: string
}

interface FAQSectionProps {
    title?: string
    subtitle?: string
    kicker?: string
    items?: FAQItem[]
    phone?: string
    phoneLink?: string
}

// Icon mapping for CMS compatibility
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Clock,
    CreditCard,
    Home,
    Users,
    Target,
    TrendingUp,
    HelpCircle,
}

export default function FAQSection({
    title = "Frequently asked questions",
    subtitle = "Everything you need to know",
    kicker = "FREQUENTLY ASKED QUESTIONS",
    items,
    phone = "085 060 2989",
    phoneLink = "tel:+31850602989",
}: FAQSectionProps) {
    // Default FAQ items if not provided via props
    const defaultFaqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'Clock',
            question: 'Hoe snel kan ik aan de slag met jullie marketingaanpak?',
            answer: 'Wij zorgen voor een snelle implementatie van uw marketingmachine. Na onze strategiesessie starten we direct met de opzet van uw campagnes. De eerste resultaten ziet u meestal binnen enkele weken, afhankelijk van uw markt en doelgroep.',
        },
        {
            id: 'item-2',
            icon: 'CreditCard',
            question: 'Hoe werkt de samenwerking en wat kan ik verwachten?',
            answer: 'Wij werken transparant en resultaatgericht. Onze tarieven stemmen we af op uw specifieke doelen en situatie. We focussen op meetbare groei en houden u altijd op de hoogte van de voortgang. Neem contact op voor een persoonlijk gesprek over de mogelijkheden.',
        },
        {
            id: 'item-3',
            icon: 'Home',
            question: 'Voor welke vastgoedprofessionals is jullie aanpak geschikt?',
            answer: 'Onze marketingaanpak werkt voor alle vastgoedprofessionals: aankoopmakelaars, verkoopmakelaars, hypotheekadviseurs en projectontwikkelaars. Of u nu net begint of al jaren ervaring heeft, wij passen onze strategie aan uw specifieke situatie en doelgroep aan.',
        },
        {
            id: 'item-4',
            icon: 'Users',
            question: 'Hoe zorgen jullie voor focus op mijn regio?',
            answer: 'Wij werken met een selectieve aanpak per regio om optimale resultaten te behalen. Dit betekent dat we zorgvuldig kijken naar de marktdynamiek in uw gebied en onze strategie daarop afstemmen. Zo kunnen we ons volledig focussen op uw succes in uw werkgebied.',
        },
        {
            id: 'item-5',
            icon: 'Target',
            question: 'Hoe zorgen jullie voor kwalitatieve leads en afspraken?',
            answer: 'Wij richten ons op het aantrekken van kwalitatieve prospects die passen bij uw ideale klantprofiel. Door slimme targeting en bewezen strategieën zorgen we voor een constante stroom van geïnteresseerde potentiële klanten. Kwaliteit staat altijd voorop.',
        },
        {
            id: 'item-6',
            icon: 'TrendingUp',
            question: 'Wat maakt jullie aanpak uniek in de vastgoedmarkt?',
            answer: 'Wij zijn zelf actief in de vastgoedmarkt en begrijpen de uitdagingen van makelaars. Onze marketingmachine combineert bewezen strategieën met de nieuwste technieken. Als IQI Global Partner hebben we toegang tot internationale expertise en netwerken.',
        },
    ]

    const faqItems = items || defaultFaqItems

    return (
        <section className="py-20 bg-section">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                                    {kicker}
                                </span>
                            </div>
                            <h2 className="type-h2 text-foreground mb-6">
                                {title}
                            </h2>
                            <p className="text-muted-foreground type-body mb-6">
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
                                        <a href={phoneLink} className="text-brand-500 font-medium hover:underline transition-colors">
                                            {phone}
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
                            {faqItems.map((item, index) => {
                                const IconComponent = iconMap[item.icon] || HelpCircle;
                                const itemKey = item.id || `faq-${index}`;
                                return (
                                    <AccordionItem
                                        key={itemKey}
                                        value={itemKey}
                                        className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg px-6 shadow-sm hover:shadow-md hover:bg-neutral-800/70 transition-all duration-200">
                                        <AccordionTrigger className="cursor-pointer items-center py-6 hover:no-underline">
                                            <div className="flex items-center gap-4">
                                                <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                                                    <IconComponent className="size-4 text-brand-500" />
                                                </div>
                                                <span className="text-left font-semibold text-foreground">
                                                    {item.question}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div className="pl-12">
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {item.answer}
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
    )
}
