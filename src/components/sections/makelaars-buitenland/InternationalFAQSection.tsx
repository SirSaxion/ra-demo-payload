'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Globe, CreditCard, TrendingUp, Users, Target, Clock } from 'lucide-react'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: string
    question: string
    answer: string
}

export interface InternationalFAQSectionProps {
    badge?: string
    title?: string
    subtitle?: string
    subtitleSuffix?: string
    contactLinkText?: string
    contactLinkHref?: string
    phoneLabel?: string
    phoneNumber?: string
    phoneLink?: string
    phonePrefix?: string
    faqs?: FAQItem[]
}

export default function InternationalFAQSection({
    badge = 'Internationale FAQ',
    title = 'Veelgestelde vragen over internationale projectverkoop',
    subtitle = 'Heeft u nog andere vragen over het vermarkten van buitenlandse projecten? Neem contact op met ons',
    subtitleSuffix = 'of plan een vrijblijvende projectsessie in.',
    contactLinkText = 'support team',
    contactLinkHref = '/contact',
    phoneLabel = 'Internationale vraag?',
    phoneNumber = '+31850602989',
    phoneLink,
    phonePrefix = 'Bel direct:',
    faqs = [
        {
            id: 'item-1',
            icon: 'Globe',
            question: 'In welke landen zijn jullie actief?',
            answer: 'Wij hebben bewezen resultaten in Spanje, Oostenrijk, Bali en Portugal. Daarnaast werken we met lokale partners in Dubai en andere internationale markten. We richten ons specifiek op het bereiken van Nederlandse, Duitse en Belgische kopers voor jouw project.',
        },
        {
            id: 'item-2',
            icon: 'TrendingUp',
            question: 'Hoe snel zie ik resultaat van jullie campagnes?',
            answer: 'Gemiddeld genereren we binnen 30 dagen de eerste gekwalificeerde leads. Concrete afspraken volgen meestal binnen 6-8 weken. De snelheid hangt af van jouw project, markt en doelgroep. Bij eerdere projecten zagen we binnen 3 maanden 200+ warme leads en 10% conversie naar afspraak.',
        },
        {
            id: 'item-3',
            icon: 'CreditCard',
            question: 'Wat zijn de kosten van een internationale campagne?',
            answer: 'De investering is afhankelijk van jouw project, doelmarkt en ambities. Wij werken met maatwerkpakketten vanaf €25.000 voor een complete campagne inclusief lead generatie, events en opvolging. Tijdens de projectsessie bespreken we een ROI-projectie specifiek voor jouw situatie.',
        },
        {
            id: 'item-4',
            icon: 'Users',
            question: 'Hoe meten jullie het succes van campagnes?',
            answer: 'Wij werken met real-time dashboards waar je precies ziet hoeveel leads er binnenkomen, wat de conversie is naar afspraken en wat de ROI is. Je krijgt wekelijkse rapportages met concrete cijfers: aantal leads, kosten per lead, conversiepercentages en sales pipeline status.',
        },
        {
            id: 'item-5',
            icon: 'Target',
            question: 'Wat is jullie track record met buitenlandse projecten?',
            answer: 'Wij hebben verschillende internationale projecten succesvol vermarkt: 15 verkochte units in 3 maanden (Bali), 200+ leads met 10% conversie (Spanje) en een volledig uitverkocht Alpen project (Oostenrijk). Onze aanpak combineert data-gedreven campagnes met storytelling die kopers aanspreekt.',
        },
        {
            id: 'item-6',
            icon: 'Clock',
            question: 'Werken jullie ook met lokale verkoopteams?',
            answer: 'Ja, wij kunnen leads direct koppelen aan jouw lokale verkoopteam of makelaars ter plaatse. Via ons IQI Global netwerk hebben we toegang tot lokale partners in alle belangrijke markten. Wij zorgen voor warme leads, zij zorgen voor de lokale opvolging en afronding.',
        },
    ]
}: InternationalFAQSectionProps) {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Globe, CreditCard, TrendingUp, Users, Target, Clock };

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
                                {subtitleSuffix}
                            </p>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/30">
                                <div className="flex size-8 items-center justify-center rounded-full bg-brand-500/10">
                                    <Globe className="size-4 text-brand-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">{phoneLabel}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {phonePrefix}{' '}
                                        <a href={phoneLink || `tel:${phoneNumber}`} className="text-brand-500 font-medium hover:underline transition-colors">
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
                            {faqs.map((item) => {
                                const IconComponent = iconMap[item.icon] || Globe;
                                return (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
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
