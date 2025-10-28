"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, Users, Award, Heart } from "lucide-react"

interface SuccessStory {
  id: number
  name: string
  role: string
  company: string
  story: string
  achievement: string
  metric: string
  avatar: string
  rating: number
  category: string
  span?: string
}

const getCategoryColor = (category: string) => {
  return "bg-[var(--color-surface-3)] text-foreground/80 border-[var(--color-border)]"
}

interface SuccessStoriesMasonryProps {
  title?: string
  subtitle?: string
  stories?: SuccessStory[]
  showHeader?: boolean
  embedded?: boolean
  className?: string
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "makelaars":
      return <TrendingUp className="w-4 h-4" />
    case "buitenland":
      return <Award className="w-4 h-4" />
    case "hypotheekadviseurs":
      return <Users className="w-4 h-4" />
    case "projectontwikkelaars":
      return <Star className="w-4 h-4" />
    default:
      return <Heart className="w-4 h-4" />
  }
}

// Badge styling handled via <Badge variant="soft" />

export const SuccessStoriesMasonry: React.FC<SuccessStoriesMasonryProps> = ({
  title = "Succesverhalen van onze klanten",
  subtitle = "Ontdek hoe onze oplossingen bedrijven hebben getransformeerd",
  stories = [],
  showHeader = true,
  embedded = false,
  className,
}) => {
  const [filter, setFilter] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(stories.map((story) => story.category)))]
  const filteredStories = filter === "all" ? stories : stories.filter((story) => story.category === filter)

  const baseContainer = "container mx-auto px-4 py-12 max-w-6xl md:max-w-7xl"
  const containerClassName = embedded
    ? className ?? ""
    : `${baseContainer}${className ? ` ${className}` : ""}`

  return (
    <section className={containerClassName} aria-labelledby="success-stories-heading">
      {/* Header */}
      {showHeader && (
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="success-stories-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
          >
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      )}


      {/* Category Filter */}
      <motion.div
        className="mb-10 -mx-4 px-4 md:mx-0 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex flex-nowrap gap-2 overflow-x-auto md:flex-wrap md:overflow-visible no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                filter === category
                  ? "bg-[var(--brand-500)] text-[var(--color-accent-contrast)] shadow-[var(--shadow-brand)] border border-[color-mix(in_oklab,var(--brand-700)_45%,transparent)] scale-105"
                  : "bg-[var(--color-surface-3)] text-foreground border border-[var(--color-border)] hover:bg-[var(--color-surface-2)] hover:border-[var(--brand-400)]/30 hover:shadow-sm"
              }`}
            >
              {category !== "all" && getCategoryIcon(category)}
              {category === "all" ? "Alle verhalen" : category === "makelaars" ? "Makelaars" : category === "buitenland" ? "Buitenland / IQI" : category === "hypotheekadviseurs" ? "Hypotheekadviseurs" : "Projectontwikkelaars"}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        className="columns-1 md:columns-2 lg:columns-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <AnimatePresence>
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              layout
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.05
                  }
                }
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="break-inside-avoid [break-inside:avoid-column] mb-6"
            >
              <Card
                className="transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-brand)] group bg-[var(--color-surface-3)] border border-[var(--color-border)] hover:border-[var(--brand-400)]/40 relative overflow-hidden backdrop-blur-sm"
              >
                {/* Subtle brand gradient overlay on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_80%_40%,color-mix(in_oklab,var(--brand-500)_10%,transparent),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="relative w-14 h-14 rounded-2xl border-2 border-[var(--color-border)] shadow-lg overflow-hidden">
                          <Image
                            src={story.avatar}
                            alt={story.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--brand-400)] rounded-full border-2 border-[var(--color-surface-3)] flex items-center justify-center">
                          <div className="w-2 h-2 bg-foreground rounded-full" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg leading-tight">{story.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{story.role}</p>
                        <p className="text-sm font-semibold text-foreground">{story.company}</p>
                      </div>
                    </div>
                    <Badge className={`text-xs font-semibold border-0 px-3 py-1 ${getCategoryColor(story.category)} flex items-center gap-1.5 rounded-lg`}>
                      {getCategoryIcon(story.category)}
                      <span className="capitalize">{story.category === "makelaars" ? "Makelaars" : story.category === "buitenland" ? "Buitenland" : story.category === "hypotheekadviseurs" ? "Hypotheken" : "Projectontwikkeling"}</span>
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: story.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-[var(--brand-400)] text-[var(--brand-400)]" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 pb-4 relative z-10">
                  <div className="relative mb-5">
                    <Quote className="absolute -top-1 -left-1 w-5 h-5 text-[var(--brand-400)]/50" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6 font-medium italic">"{story.story}"</p>
                  </div>

                  <div className="rounded-2xl p-5 bg-[radial-gradient(60%_60%_at_30%_30%,color-mix(in_oklab,var(--brand-300)_15%,transparent),transparent_70%),radial-gradient(60%_60%_at_80%_70%,color-mix(in_oklab,var(--brand-600)_10%,transparent),transparent_70%)] border border-[var(--brand-400)]/25 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Resultaat</div>
                      <div className="font-bold text-sm text-foreground mb-2">{story.achievement}</div>
                      <div className="text-2xl font-extrabold text-foreground">{story.metric}</div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[var(--brand-400)]/30 to-transparent rounded-bl-3xl" />

                    {/* Inner glow for extra depth */}
                    <div className="pointer-events-none absolute inset-0 -z-[1]">
                      <div className="absolute -top-4 -right-4 h-[80px] w-[80px] rounded-full blur-2xl bg-[color-mix(in_oklab,var(--brand-400)_25%,transparent)]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

// Demo data to render by default when used standalone
export const defaultStories: SuccessStory[] = [
  {
    id: 1,
    name: "Dennis van Beek",
    role: "NVM Makelaar",
    company: "Van Beek Vastgoed",
    story:
      "Binnen 6 maanden zijn we van 2 naar 8 verkopen per maand gegaan. De lead kwaliteit is fenomenaal - bijna elke afspraak wordt een opdracht.",
    achievement: "Verkopen verviervoudigd",
    metric: "400% meer deals",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "makelaars",
    span: "col-span-1"
  },
  {
    id: 2,
    name: "Marieke Jansen",
    role: "Makelaar o.g.",
    company: "Jansen Makelaardij Rotterdam",
    story:
      "Het CRM systeem en automatisering bespaart me 15 uur per week. Ik focus nu puur op klantcontact en verkopen, niet meer op administratie.",
    achievement: "Tijdsbesparing administratie",
    metric: "15 uur/week",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b5f8f15a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "buitenland",
    span: "col-span-1"
  },
  {
    id: 3,
    name: "Tom Bakker",
    role: "Eigenaar",
    company: "Bakker & Zn Makelaardij",
    story:
      "Onze omzet is in 8 maanden tijd verdrievoudigd. We zijn nu de grootste makelaar in onze regio en hebben 3 nieuwe medewerkers aangenomen.",
    achievement: "Omzet verdrievoudigd",
    metric: "€680k+ omzet",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "makelaars",
    span: "col-span-1"
  },
  {
    id: 4,
    name: "Sandra de Wit",
    role: "Hypotheekadviseur",
    company: "De Wit Hypotheken & Vastgoed",
    story:
      "Door de integratiepackage krijg ik nu automatisch leads van makelaars. Mijn hypotheekaanvragen zijn met 180% gestegen in 4 maanden tijd.",
    achievement: "Hypotheekaanvragen gestegen",
    metric: "180% meer leads",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "hypotheekadviseurs",
    span: "col-span-1"
  },
  {
    id: 5,
    name: "Mike van der Berg",
    role: "NVM Makelaar",
    company: "Van der Berg International",
    story:
      "We verkopen nu ook succesvol in Spanje en Portugal. De internationale marketing aanpak heeft ons 40+ transacties in het buitenland opgeleverd.",
    achievement: "Internationale uitbreiding",
    metric: "40+ int. deals",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "buitenland",
    span: "col-span-1"
  },
  {
    id: 6,
    name: "Robert Hendriks",
    role: "Projectontwikkelaar",
    company: "Hendriks Development",
    story:
      "Onze nieuwbouwprojecten zijn nu binnen 2 weken uitverkocht. De targeting en marketing voor projectontwikkeling werkt perfect voor onze doelgroep.",
    achievement: "Snellere verkoop projecten",
    metric: "2 weken uitverkocht",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    category: "projectontwikkelaars",
    span: "col-span-1"
  }
]

export default function SuccessStoriesMasonryDefault({
  title,
  subtitle
}: Partial<SuccessStoriesMasonryProps>) {
  return <SuccessStoriesMasonry title={title} subtitle={subtitle} stories={defaultStories} />
}
