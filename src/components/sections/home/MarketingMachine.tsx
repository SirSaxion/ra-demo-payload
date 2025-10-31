"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Globe, GaugeCircle, Target, Repeat, PhoneCall, Palette, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Globe,
  GaugeCircle,
  Target,
  Repeat,
  PhoneCall,
  Palette,
};

function SectionHeader({ title, subtitle, kicker }: { title: string; subtitle: string; kicker?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
        {kicker || "Wat wij voor je doen"}
      </span>
      <h2 className="mt-4 type-h2 text-foreground">
        {title}
      </h2>
      <p className="mt-2 type-body text-[var(--color-text-secondary)]">
        {subtitle}
      </p>
    </div>
  );
}

type Feature = {
  icon: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  imageSrc?: string;
};

interface MarketingMachineSectionProps {
  title?: string;
  subtitle?: string;
  kicker?: string;
  features?: Feature[];
}

export default function MarketingMachineSection({
  title = "Complete marketing machine voor vastgoedprofessionals",
  subtitle = "Van eerste indruk tot deal: websites, leadgeneratie, vindbaarheid en opvolging in één systeem.",
  kicker = "WAT WIJ VOOR JE DOEN",
  features: propFeatures,
}: MarketingMachineSectionProps = {}) {
  const defaultFeatures: Feature[] = [
    {
      icon: "Globe",
      name: "Websites",
      description: "Professionele websites die converteren. SEO, responsive, en lead-capture ingebouwd.",
      href: "/cases",
      cta: "Bekijk voorbeelden",
      imageSrc: "/images/32.EmiroSmolders-Settle-DSC07215--compressed.webp",
    },
    {
      icon: "Target",
      name: "Leadgeneratie",
      description: "Kwalitatieve leads via Meta & Google. Slim targetten voor maximaal resultaat.",
      href: "/cases",
      cta: "Zo werkt het",
      imageSrc: "/images/leadgen.webp",
    },
    {
      icon: "GaugeCircle",
      name: "Vindbaarheid",
      description: "SEO optimalisatie, Google Business en content die je gevonden laat worden.",
      href: "/cases",
      cta: "Onze aanpak",
      imageSrc: "/images/42.EmiroSmolders-Settle-DSC07252--compressed.webp",
    },
    {
      icon: "Repeat",
      name: "Heractivatie",
      description: "Email en SMS flows die slapende leads wakker maken met relevante triggers.",
      href: "/cases",
      cta: "Voorbeeldflows",
      imageSrc: "/images/rudybrief.webp",
    },
    {
      icon: "PhoneCall",
      name: "Leads opvolgen",
      description: "CRM, automatische follow‑ups en appointment setting. Geen lead meer verloren.",
      href: "/cases",
      cta: "Zie systeem",
      imageSrc: "/images/joeptelefoon.webp",
    },
    {
      icon: "Palette",
      name: "Branding",
      description: "Sterke merkidentiteit: logo, huisstijl en contentstrategie die vertrouwen wekt.",
      href: "/cases",
      cta: "Bekijk werk",
      imageSrc: "/images/47.EmiroSmolders-Settle-DSC07264--compressed.webp",
    },
  ];
  
  const features = propFeatures || defaultFeatures;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // radial layout config
  const size = 420; // design units for SVG viewBox
  const radius = 150; // single orbit radius (original)
  const center = { x: size / 2, y: size / 2 };
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!orbitRef.current) return;
    const el = orbitRef.current;
    const update = () => {
      const width = el.getBoundingClientRect().width;
      setScale(width / size);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      // Preload first 3 images
      const imagesToPreload = features.slice(0, 3).filter(f => f.imageSrc);
      
      imagesToPreload.forEach((feature, index) => {
        if (feature.imageSrc) {
          const img = new window.Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index));
          };
          img.src = feature.imageSrc;
        }
      });
    };

    preloadImages();
  }, [features]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <section className="relative isolate overflow-hidden bg-section text-foreground">
      {/* subtle grid tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--bg-section),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mm-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-24 pb-2 md:pb-16">
        <SectionHeader title={title} subtitle={subtitle} kicker={kicker} />

        <div className="mx-auto mt-16 md:mt-10 grid max-w-6xl grid-cols-1 gap-10 items-center lg:grid-cols-[minmax(320px,520px)_1fr]">
          {/* Radial System Map */}
          <div ref={orbitRef} className="relative mx-auto aspect-square w-full max-w-[520px] overflow-visible">
            {/* Sticker above circle (does not affect layout) */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 md:-top-12 z-10">
              <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-[0_8px_26px_rgba(0,0,0,0.38)] -rotate-3 text-sm font-mono tracking-wider uppercase text-[var(--brand-400)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                <span>Onze eigen methode</span>
                <span className="pointer-events-none absolute -right-3 -top-3 h-5 w-5 rotate-45 rounded-[3px] bg-white/5 border border-white/10" />
              </div>
            </div>
            {/* Orbit content wrapper shifted down a bit to avoid overlap */}
            <div className="relative h-full w-full translate-y-4 md:translate-y-6">
            {/* Hub glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-500)_20%,transparent),transparent_62%)]" />
            {/* Single orbit ring */}
            <svg className="absolute inset-0 h-full w-full" viewBox={`${0} ${0} ${size} ${size}`} fill="none" aria-hidden>
              <circle cx={center.x} cy={center.y} r={radius} stroke="currentColor" strokeWidth="1" opacity="0.10" />
            </svg>

            {/* Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)] text-center">
                <div className="type-body font-medium leading-tight text-foreground">
                  Marketing
                  <br />
                  Machine
                </div>
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-1 ring-[var(--color-border)]/50" />
              </div>
            </div>

            {/* Nodes (slowly spinning) */}
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "50% 50%" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 90, ease: "linear", repeat: Infinity }}
            >
              {features.map((feature, idx) => {
                const angle = (idx / features.length) * Math.PI * 2 - Math.PI / 2; // start at top
                const x = center.x + radius * Math.cos(angle);
                const y = center.y + radius * Math.sin(angle);
                const isActive = activeIndex === idx;
                return (
                  <motion.div
                    key={`node-${idx}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x * scale, top: y * scale }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, ease: "linear", repeat: Infinity }}
                  >
                    <button
                      type="button"
                      aria-label={feature.name}
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        "group rounded-full border bg-[var(--color-surface-3)] p-5 transition focus-visible:outline-none",
                        isActive ? "border-[var(--brand-500)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand-500)_20%,transparent)]" : "border-[var(--color-border)]",
                      )}
                    >
                      {(() => {
                        const FeatureIcon = iconMap[feature.icon] || Globe;
                        return (
                          <FeatureIcon
                            className={cn(
                              "h-8 w-8",
                              isActive ? "text-[var(--brand-600)]" : "text-foreground/70",
                            )}
                          />
                        );
                      })()}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
            </div>
          </div>
          {/* Details panel */}
          <div className="relative isolate lg:pr-4">
            {/* Legend of modules (moved above details) */}
            <div className="mb-5 grid grid-cols-2 gap-4 md:grid-cols-3">
              {features.map((feature, idx) => (
                <button
                  key={`legend-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "flex w-full flex-col items-start gap-3 rounded-xl border px-5 py-5 text-left transition min-h-[104px]",
                    activeIndex === idx
                      ? "border-[var(--brand-500)] ring-1 ring-[color-mix(in_oklab,var(--brand-500)_28%,transparent)] bg-[var(--color-surface-3)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface-3)] hover:bg-[var(--color-surface-3)]",
                  )}
                >
                  {(() => {
                    const FeatureIcon = iconMap[feature.icon] || Globe;
                    return <FeatureIcon className="h-7 w-7 text-foreground/80" />;
                  })()}
                  <span className="type-body font-normal leading-snug text-[var(--color-text-secondary)]">{feature.name}</span>
                </button>
              ))}
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)] p-5">
              {features[activeIndex].imageSrc && features[activeIndex].imageSrc !== "" && (
                <div className="relative mb-4 h-60 w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                  {/* Loading skeleton - only show if image hasn't loaded */}
                  {!loadedImages.has(activeIndex) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-2)] via-[var(--color-surface-1)] to-[var(--color-surface-2)] animate-pulse" />
                  )}
                  <Image
                    src={features[activeIndex].imageSrc as string}
                    alt={`${features[activeIndex].name} preview`}
                    fill
                    sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover object-center transition-opacity duration-500 ${
                      loadedImages.has(activeIndex) ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={activeIndex === 0}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onLoad={() => handleImageLoad(activeIndex)}
                  />
                </div>
              )}
              <div className="mb-3 inline-flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)]">
                  {(() => {
                    const ActiveIcon = iconMap[features[activeIndex].icon] || Globe;
                    return <ActiveIcon className="h-5 w-5 text-foreground" />;
                  })()}
                </div>
                <h3 className="type-h4 tracking-[-0.01em]">
                  {features[activeIndex].name}
                </h3>
              </div>
              <p className="type-body leading-relaxed text-[var(--color-text-secondary)]">
                {features[activeIndex].description}
              </p>
              {/* CTA removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


