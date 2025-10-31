import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
    title?: string
    imageSrc?: string
    badges?: string[]
  }>
  className?: string
  cardClassName?: string
  durationSec?: number
  fadeFromWhite?: boolean
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className,
  cardClassName,
  durationSec,
  fadeFromWhite,
}: TestimonialsSectionProps) {
  const duration = durationSec ?? 40
  return (
    <section 
      className={cn(
        "relative text-foreground py-20 md:py-28",
        className
      )}
      style={{ backgroundColor: '#121212' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {description}
            </span>
          </div>
          <h2 className="mt-6 type-h2 text-foreground">
            {title}
          </h2>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="relative mt-6 left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className={cn(
            "group flex overflow-hidden px-4 py-3 md:px-6 md:py-4 [--gap:1.5rem] [gap:var(--gap)] flex-row"
          )}
          style={{ ["--duration" as any]: `${duration}s` }}
        >
          <div className="flex shrink-0 [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {/* Render testimonials 4x for seamless infinite scroll */}
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`set1-${i}`}
                {...testimonial}
                className={cardClassName}
              />
            ))}
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`set2-${i}`}
                {...testimonial}
                className={cardClassName}
              />
            ))}
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`set3-${i}`}
                {...testimonial}
                className={cardClassName}
              />
            ))}
            {testimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`set4-${i}`}
                {...testimonial}
                className={cardClassName}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r sm:block z-10",
          fadeFromWhite ? "from-[#fafafa]" : "from-[#121212]"
        )}
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l sm:block z-10",
          fadeFromWhite ? "from-[#fafafa]" : "from-[#121212]"
        )}
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />
    </section>
  )
}