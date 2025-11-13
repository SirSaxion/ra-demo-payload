"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/sections/Section";
import { Badge } from "@/components/ui/badge";
import { Play, Quote } from "lucide-react";

export interface VideoTestimonialsProps {
  badge?: string
  title?: string
  subtitle?: string
  durationBadge?: string
  activeIndicator?: string
  sidebarHeader?: string
  videos?: Array<{
    id: number
    company: string
    name: string
    role: string
    thumbnail: any // Media object from CMS
    videoUrl?: string
    quote: string
    highlight: string
  }>
}

export default function VideoTestimonials({
  badge = "Video testimonials",
  title = "Hoor het van makelaars zelf",
  subtitle = "Echte verhalen van professionals die hun business transformeerden met onze marketing machine.",
  durationBadge = "~60 sec",
  activeIndicator = "Nu aan het spelen",
  sidebarHeader = "Andere verhalen",
  videos = [
    {
      id: 1,
      company: "De Brabant Makelaar",
      name: "Amory",
      role: "Eigenaar",
      thumbnail: undefined,
      videoUrl: "/videos/testimonial-brabant.mp4",
      quote: "Van €20k naar €65k maandomzet in 18 maanden. De marketing machine werkt echt.",
      highlight: "225% omzetgroei"
    },
    {
      id: 2,
      company: "Bink & Partners",
      name: "Pieter",
      role: "Makelaar",
      thumbnail: undefined,
      videoUrl: "/videos/testimonial-bink.mp4",
      quote: "Ik betaalde €800 per maand aan slechte leads. Nu heb ik een wachtrij van ideale klanten die mij al willen.",
      highlight: "30+ afspraken per jaar"
    },
    {
      id: 3,
      company: "Thoma Post Makelaardij",
      name: "Thoma",
      role: "Eigenaar",
      thumbnail: undefined,
      videoUrl: "/videos/testimonial-thoma.mp4",
      quote: "31 kwalitatieve afspraken in de eerste maand. Ik had niet verwacht dat het zo snel zou gaan.",
      highlight: "Snelste resultaten ooit"
    }
  ]
}: VideoTestimonialsProps) {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <SectionShell
      containerWidth="7xl"
      paddingY="lg"
      background="grid"
      className="bg-section text-foreground relative overflow-hidden"
    >
      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--brand-400)] opacity-[0.06] blur-[100px]" />
      </div>

      {/* Header */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
          {badge}
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground">
          {title}
        </h2>
        <p className="mt-3 text-base md:text-lg text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      </div>

      {/* Video Player + Sidebar Grid */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:items-start">
        {/* Main Video Player */}
        <div className="lg:col-span-2 flex flex-col">
          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-surface-3)] border border-[var(--color-border)] shadow-lg flex-shrink-0">
            {/* Placeholder Image with Play Button Overlay */}
            <div className="relative w-full h-full group cursor-pointer">
              <Image
                src={activeVideo.thumbnail?.sizes?.medium?.url || activeVideo.thumbnail?.url || `/media/videothumb${activeVideo.id}-640x480.jpg`}
                alt={activeVideo.thumbnail?.alt || `${activeVideo.name} van ${activeVideo.company}`}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover transition-opacity duration-200 group-hover:opacity-90"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--brand-400)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10 md:h-12 md:w-12 text-[var(--color-accent-contrast)] ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                {durationBadge}
              </div>
            </div>

            {/* When you add real video:
            <video
              controls
              poster={activeVideo.thumbnail}
              className="w-full h-full object-cover"
              key={activeVideo.id}
            >
              <source src={activeVideo.videoUrl} type="video/mp4" />
            </video>
            */}
          </div>

          {/* Quote Card Below Video */}
          <div className="mt-6 p-6 rounded-xl bg-[var(--color-surface-3)] border border-[var(--color-border)] relative overflow-hidden flex-shrink-0">
            {/* Quote icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Quote className="h-16 w-16 text-[var(--brand-400)]" />
            </div>

            <div className="relative">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="px-3 py-1 rounded-full bg-[var(--brand-400)]/10 border border-[var(--brand-400)]/20">
                  <span className="text-sm font-bold text-[var(--brand-500)]">{activeVideo.highlight}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-4">
                "{activeVideo.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-400)]/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-[var(--brand-500)]">
                    {activeVideo.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{activeVideo.name}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {activeVideo.role} • {activeVideo.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Thumbnails */}
        <div className="lg:col-span-1 flex flex-col">
          <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">
            {sidebarHeader}
          </p>

          <div className="flex flex-col flex-1 justify-between gap-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`
                  w-full group text-left transition-all duration-300
                  ${activeVideo.id === video.id
                    ? 'opacity-100'
                    : 'opacity-70 hover:opacity-100'
                  }
                `}
              >
                <div className={`
                  relative overflow-hidden rounded-lg border-2 transition-all duration-300
                  ${activeVideo.id === video.id
                    ? 'border-[var(--brand-400)] shadow-lg'
                    : 'border-[var(--color-border)] hover:border-[var(--brand-400)]/50'
                  }
                `}>
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={video.thumbnail?.sizes?.small?.url || video.thumbnail?.url || `/media/videothumb${video.id}-640x480.jpg`}
                      alt={video.thumbnail?.alt || `${video.name} van ${video.company}`}
                      fill
                      loading="lazy"
                      sizes="200px"
                      className="object-cover"
                    />

                    {/* Play icon overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[var(--brand-400)]/90 flex items-center justify-center">
                        <Play className="h-6 w-6 text-[var(--color-accent-contrast)] ml-0.5" fill="currentColor" />
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeVideo.id === video.id && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[var(--brand-400)] text-[10px] font-bold text-[var(--color-accent-contrast)] uppercase tracking-wide">
                        {activeIndicator}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3 bg-[var(--color-surface-3)]">
                    <p className="text-sm font-semibold text-foreground line-clamp-1">
                      {video.company}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1">
                      {video.highlight}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
