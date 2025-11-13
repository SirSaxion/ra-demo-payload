"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { Heart, Shield, Users, Lightbulb, Target, Award, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface CoreValue {
  id: string
  title: string
  description: string
  icon: string
  color: string
  bgGradient: string
}

interface CoreValuesSectionProps {
  badge?: string;
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  values?: CoreValue[];
}

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
  stickyEnabled?: boolean
  /** Base offset from top of viewport to avoid navbar overlap (px) */
  baseTop?: number
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Shield,
  Users,
  Lightbulb,
  Target,
  Award,
};

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("relative w-full", className)} style={{ ...props.style }} {...props}>
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      stickyEnabled = true,
      baseTop = 88,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: stickyEnabled ? baseTop + y : undefined,
          zIndex: 10 + z,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn(stickyEnabled ? "sticky" : "relative", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

const CoreValuesSection = ({
  badge = "Onze Fundamenten",
  title = "Waarden die ons",
  highlightedWord = "onderscheiden",
  subtitle = "Wat ons onderscheidt in de vastgoedbranche. Deze waarden zijn levende principes die dagelijks tot uiting komen in onze acties, beslissingen en de manier waarop we met elkaar en onze klanten samenwerken.",
  values = [
    {
      id: "value-1",
      title: "Integriteit",
      description: "Eerlijkheid en transparantie in alles wat we doen. Onze klanten kunnen erop vertrouwen dat we onze beloftes nakomen.",
      icon: "Shield",
      color: "from-blue-500 to-blue-700",
      bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-700/20",
    },
    {
      id: "value-2",
      title: "Fun",
      description: "Werken mag leuk zijn, want energie en plezier zorgen voor betere resultaten. We vinden dat werk energie mag geven: plezier en ambitie gaan hand in hand.",
      icon: "Lightbulb",
      color: "from-amber-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
    },
    {
      id: "value-3",
      title: "Samenwerking",
      description: "De beste resultaten ontstaan door echt teamwork. We werken vanuit vertrouwen en gelijkwaardigheid met onze klanten.",
      icon: "Users",
      color: "from-green-500 to-emerald-600",
      bgGradient: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
    },
    {
      id: "value-4",
      title: "Doelgericht",
      description: "Alles draagt bij aan tastbare vooruitgang. We maken complexe zaken overzichtelijk en helpen vooruitgang boeken zonder onnodige omwegen.",
      icon: "Heart",
      color: "from-red-500 to-pink-600",
      bgGradient: "bg-gradient-to-br from-red-500/20 to-pink-600/20",
    },
    {
      id: "value-5",
      title: "Resultaatgericht",
      description: "We sturen altijd op concrete impact voor onze klanten. Jouw succes is ons succes - we focussen op meetbare resultaten die waarde toevoegen.",
      icon: "Award",
      color: "from-purple-500 to-indigo-600",
      bgGradient: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20",
    },
    {
      id: "value-6",
      title: "Ervaring",
      description: "Wij spreken niet vanaf de zijlijn. Met ons eigen makelaarskantoor SETTL. en onze activiteiten in vastgoedinvesteringen combineren we ervaring met vernieuwing.",
      icon: "Target",
      color: "from-teal-500 to-cyan-600",
      bgGradient: "bg-gradient-to-br from-teal-500/20 to-cyan-600/20",
    },
  ],
}: CoreValuesSectionProps = {}) => {
  return (
    <div className="bg-section text-foreground">
      {/* Interactive Cards Stack Section */}
      <section className="relative isolate bg-section text-foreground [--nav-h:56px] md:[--nav-h:76px] pt-[var(--nav-h)]">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24 lg:h-screen lg:flex lg:flex-col lg:justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                  {badge}
                </span>
                <h2 className="type-h2 mt-4 mb-6">
                  {title}{" "}
                  <span className="bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-200)] bg-clip-text text-transparent">
                    {highlightedWord}
                  </span>
                </h2>
                <p className="type-body text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </motion.div>
            </div>

            <ContainerScroll className="space-y-6 py-6 pb-8">
              {values.map((value, index) => {
                const Icon = iconMap[value.icon] || Shield;
                return (
                  <CardSticky
                    key={value.id}
                    index={index + 1}
                    incrementY={20}
                    stickyEnabled={index < values.length - 1}
                    className="rounded-[var(--radius-xl)] border-[var(--color-border)] bg-transparent backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--brand-500)_15%,transparent)] transition-all duration-300"
                  >
                    <div className="relative">
                      {index > 0 && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 translate-y-2 translate-x-1 rounded-[var(--radius-xl)] bg-[color-mix(in_oklab,var(--neutral-900)_30%,transparent)] opacity-[0.35] blur-[2px]"
                        />
                      )}
                      <div className="relative z-10 p-8 rounded-[var(--radius-xl)] bg-[linear-gradient(135deg,var(--brand-400)_0%,var(--brand-500)_100%)] border border-[color-mix(in_oklab,var(--brand-500)_40%,transparent)] shadow-[0_8px_24px_color-mix(in_oklab,var(--brand-500)_20%,transparent)] text-[var(--neutral-900)] min-h-[210px] md:min-h-[220px]">
                        <div className="flex items-start gap-6">
                          <div className="p-4 rounded-xl bg-[var(--neutral-900)] text-white ring-1 ring-[color-mix(in_oklab,var(--brand-500)_40%,transparent)] shadow-md">
                            <Icon className="w-8 h-8" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="type-h3 font-extrabold tracking-[-0.01em] text-[var(--neutral-900)]">{value.title}</h3>
                              <span className="text-3xl font-black text-[color-mix(in_oklab,var(--neutral-900)_35%,transparent)]">{String(index + 1).padStart(2, "0")}</span>
                            </div>

                            <p className="type-body leading-relaxed text-[color-mix(in_oklab,var(--neutral-900)_85%,transparent)]">{value.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardSticky>
                );
              })}
            </ContainerScroll>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoreValuesSection
