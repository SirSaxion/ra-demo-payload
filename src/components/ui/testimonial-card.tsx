import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  title?: string
  imageSrc?: string
  badges?: string[]
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  title,
  imageSrc,
  badges
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex shrink-0 flex-col rounded-xl border border-[var(--color-border)] bg-[#1A1A1A] backdrop-blur-[var(--blur-xs)]",
        "p-5 text-start sm:p-7",
        "w-[85vw] sm:w-[60vw] lg:w-[25vw]",
        "transition-colors duration-300 shadow-[var(--shadow-1)]",
        className
      )}
    >
      {/* Header with large prominent avatar */}
      <div className="flex justify-center mb-6">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          <AvatarImage src={author.avatar && author.avatar !== "" ? author.avatar : undefined} alt={author.name} />
        </Avatar>
      </div>

      {/* Title */}
      {title ? (
        <h3 className="type-h4 text-foreground mb-3">
          {title}
        </h3>
      ) : null}

      {/* Badges */}
      {badges && badges.length > 0 ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {badges.slice(0, 3).map((b, i) => (
            <Badge key={i} variant="kicker">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {b}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Supporting text */}
      <p className="type-body text-[var(--color-text-secondary)] mb-4">
        {text}
      </p>

      {/* Footer with company logo + name/company side by side */}
      <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          {imageSrc && imageSrc !== "" ? (
            <div className="relative h-8 w-16 sm:h-10 sm:w-20 flex-shrink-0">
              <Image
                src={imageSrc}
                alt={title || author.handle}
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain object-left"
                priority={false}
              />
            </div>
          ) : null}
          <div className="type-body text-foreground">
            <div className="font-semibold">{author.name}</div>
            <div className="text-muted-foreground text-sm">{author.handle}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}