"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Badge } from "@/components/ui/badge"

interface WordProps {
  children: string
  progress: any
  range: number[]
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mt-2 mr-2 text-xl md:text-2xl font-semibold">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}

export interface MagicTextProps {
  text: string
}

const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = React.useRef<HTMLParagraphElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = text.split(" ")

  return (
    <p ref={container} className="flex flex-wrap justify-center leading-tight px-4 max-w-3xl mx-auto text-foreground/80">
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

/**
 * This preserves the old hero from CoreValuesSection.
 * Not in use on any page by design.
 */
export default function TextScrollComponent_NOTINUSE() {
  return (
    <section className="relative isolate bg-section text-foreground [--nav-h:56px] md:[--nav-h:76px] flex items-center justify-center pt-[var(--nav-h)] min-h-[calc(60vh-var(--nav-h))] py-8 md:py-12">
      <div className="container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            Onze Kernwaarden
          </Badge>
          <h1 className="type-h1 mt-4 mb-6 text-foreground">Wat ons drijft</h1>
        </motion.div>

        <MagicText text="Deze waarden vormen de basis van alles wat we doen. Ze bepalen hoe we samenwerken, hoe we onze klanten behandelen en hoe we onze doelen bereiken. Elke beslissing die we nemen wordt getoetst aan deze fundamentele principes." />
      </div>
    </section>
  )
}
