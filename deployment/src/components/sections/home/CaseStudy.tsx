"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  TrendingUp,
  LineChart,
  Target,
  CalendarDays,
  Users2,
  BadgePercent,
  Rocket,
  Clock,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

type CaseStudyMetric = {
  label: string;
  value: string;
  emphasis?: "default" | "brand";
  sublabel?: string; // e.g., "in 18 mnd"
  delta?: string; // e.g., "+900%"
};

type Kpi = {
  label: string;
  from: number;
  to: number;
  unit?: "eur" | "number" | "text";
  sublabel?: string;
  span?: number;
};

function formatCurrencyNL(v: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(v);
}

function formatNumberNL(v: number) {
  return new Intl.NumberFormat("nl-NL", {
    maximumFractionDigits: 0,
  }).format(v);
}

function computeDelta(from: number, to: number) {
  if (from <= 0) return undefined;
  const pct = Math.round(((to - from) / from) * 100);
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct}%`;
}

type KpiCardProps = Kpi & { tone: "dark" | "light" };

function KpiCard({ label, from, to, unit = "number", sublabel, tone }: KpiCardProps) {
  const delta = computeDelta(from, to);
  const fmt = unit === "eur" ? formatCurrencyNL : formatNumberNL;
  return (
    <div
      className={cn(
        "relative overflow-visible flex h-full min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)]/60 p-4 sm:p-6 transition will-change-transform",
        "hover:shadow-lg hover:-translate-y-px motion-reduce:hover:translate-y-0 motion-reduce:transition-none",
        tone === "light" && "border-black/10 bg-black/[0.04]"
      )}
    >
      {delta ? (
        <span
          className={cn(
            "pointer-events-none absolute -right-2 -top-2 z-10 rotate-[-10deg] select-none rounded-md border px-2.5 py-1 text-sm font-extrabold shadow-md",
            "bg-[var(--brand-500)] text-[var(--color-accent-contrast)]",
            "border-[color-mix(in_oklab,var(--brand-700)_45%,transparent)]"
          )}
          aria-label={`Delta ${delta}`}
        >
          {delta}
        </span>
      ) : null}
      <div className={cn("type-small uppercase tracking-wide whitespace-nowrap truncate", tone === "light" ? "text-black" : "text-[var(--color-text-muted)]")}>{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className={cn("type-h2 !font-bold tabular-nums whitespace-nowrap", tone === "light" ? "text-black" : "text-foreground")}> 
          <span>{fmt(from)}</span>
          <ArrowRight aria-hidden className="mx-2 inline-block h-5 w-5 align-[0.06em]" />
          <span>{fmt(to)}</span>
        </div>
      </div>
      {sublabel ? (
        <div className={cn("mt-auto pt-2 type-caption", tone === "light" ? "text-black/70" : "text-[var(--color-text-muted)]")}>{sublabel}</div>
      ) : null}
    </div>
  );
}

function iconForBullet(text: string) {
  const t = text.toLowerCase();
  if (/roi|groei|stijg|omzet|winst|up|↑|→/.test(t)) return TrendingUp;
  if (/lead|klant|afspraak|appointment|bezoek|prospect/.test(t)) return Users2;
  if (/kosten|budget|prijs|%|percent/.test(t)) return BadgePercent;
  if (/tijd|snel|week|maand|dag|calendar|deadl/.test(t)) return CalendarDays;
  if (/doel|result|target|convers/.test(t)) return Target;
  if (/data|analyse|metric|cijfer|stat/.test(t)) return LineChart;
  if (/zeker|garant|veilig|trust|quality/.test(t)) return ShieldCheck;
  if (/sterk|top|beste|kwaliteit|star/.test(t)) return Star;
  if (/launch|start|kick|lanceer|scal|groei/.test(t)) return Rocket;
  if (/snel|vlot|fast|speed/.test(t)) return Zap;
  if (/innov|nieuw|uniek/.test(t)) return Sparkles;
  return CheckCircle2;
}

function renderWave(position: "top" | "bottom", fill: string) {
  // Top wave: smooth gentle curve from previous section
  const topPath = "M0,0 C250,50 850,30 1200,55 L1200,120 L0,120 Z";
  // Bottom wave: smooth flowing curve to next section
  const bottomPath = "M0,35 C 280,55 600,25 900,50 S 1120,80 1200,65 L1200,120 L0,120 Z";
  
  return (
    <div className={cn("pointer-events-none absolute inset-x-0", position === "top" ? "top-0 -mt-px" : "bottom-0 -mb-px")}>
      <svg
        className={cn("block h-[85px] w-full md:h-[121px]", position === "top" && "rotate-180")}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={position === "top" ? topPath : bottomPath} fill={fill} />
      </svg>
    </div>
  );
}

type CaseStudyProps = {
  title: string;
  kicker?: string;
  subtitle?: string;
  logoSrc?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  imageSizes?: string;
  metrics?: CaseStudyMetric[];
  kpis?: Kpi[];
  bullets?: string[];
  quote?: { text: string; author: string; role?: string; avatarSrc?: string; logoSrc?: string };
  ctaPrimary?: { label: string; href?: string };
  ctaSecondary?: { label: string; href?: string };
  tone?: "dark" | "light";
  frameless?: boolean;
  metricValueClassName?: string;
  className?: string;
  showBackdropLogo?: boolean;
  showImage?: boolean;
};

export default function CaseStudy({
  title,
  kicker = "CASE STUDY",
  subtitle,
  logoSrc,
  imageSrc = "/globe.svg",
  imageAlt = "Team De Brabant Makelaar",
  imageSizes = "(min-width: 1024px) 40vw, 90vw",
  metrics = [],
  kpis,
  bullets = [],
  quote,
  ctaPrimary = { label: "Bekijk volledige case" },
  ctaSecondary = { label: "Alle cases", href: "/cases" },
  tone = "dark",
  frameless = false,
  metricValueClassName,
  className,
  showBackdropLogo = true,
  showImage = true,
}: CaseStudyProps) {
  const headingId = `case-study-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const showAside = showImage && Boolean(imageSrc);
  const twoKpis = Boolean(kpis && kpis.length === 2);
  const content = (
    <div className="grid items-start gap-y-6 md:gap-y-10 gap-x-8 md:gap-x-12 grid-cols-1 lg:grid-cols-12">
      {/* Content column - 60% width (7/12) */}
      <div className={cn("order-1 lg:order-1", showAside ? "lg:col-span-7" : "lg:col-span-12") }>
        {/* Kicker above title */}
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]",
            tone === "light" && "border-black/10 bg-black/[0.04] text-black"
          )}
        >
          <span className={cn("inline-block h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-black" : "bg-[var(--brand-500)]")} />
          {kicker}
        </span>
        <h2 id={headingId} className={cn("mt-2 mb-6 type-h2", tone === "light" ? "text-black" : "text-foreground")}>{title}</h2>
        {subtitle ? (
          <p className={cn("-mt-3 mb-6 type-subtitle text-[var(--color-text-secondary)]", tone === "light" && "text-black/70")}>{subtitle}</p>
        ) : null}

        {/* KPIs */}
        {(
          (kpis && kpis.length > 0) || metrics.length > 0
        ) ? (
          <div
            className={cn(
              "mt-2 mb-8 grid items-stretch gap-4 sm:gap-6",
              twoKpis
                ? "grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:3fr_2fr]"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {(kpis && kpis.length > 0 ? kpis : []).map((k, idx) => (
              <div
                key={idx}
                className={cn(
                  "h-full",
                  // On larger screens, allow 2:1 layout by spanning first KPI across 2 cols
                  !twoKpis && k.span === 2 && "sm:col-span-2 lg:col-span-2"
                )}
              >
                <KpiCard {...k} tone={tone} />
              </div>
            ))}
            {/* metrics fallback (string values) */}
            {!kpis &&
              metrics.map((m, idx) => (
                <div
                  key={`m-${idx}`}
                  className={cn(
                    "flex min-h-[180px] flex-col justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-3)]/60 p-6",
                    tone === "light" && "border-black/10 bg-black/[0.04]"
                  )}
                >
                  <div className={cn("type-caption uppercase tracking-wide", tone === "light" ? "text-black" : "text-[var(--color-text-muted)]")}>{m.label}</div>
                  <div className={cn("mt-1 type-h3 !font-bold tabular-nums", tone === "light" ? "text-black" : "text-foreground")}>{m.value}</div>
                  {m.sublabel ? (
                    <div className={cn("mt-1 type-caption", tone === "light" ? "text-black/70" : "text-[var(--color-text-muted)]")}>{m.sublabel}</div>
                  ) : null}
                </div>
              ))}
          </div>
        ) : null}

        {/* Bullets (max 4) */}
        {bullets.length > 0 ? (
          <ul className={cn("mt-6 mb-6 list-none space-y-2 leading-relaxed type-body", tone === "light" ? "text-black" : "text-[var(--color-text-secondary)]")}> 
            {bullets.slice(0, 3).map((b, i) => {
              const Icon = iconForBullet(b);
              return (
                <li key={i} className="flex items-start gap-2">
                  <Icon className={cn("mt-0.5 h-5 w-5 flex-shrink-0", tone === "light" ? "text-black" : "text-[var(--brand-500)]")} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              );
            })}
          </ul>
        ) : null}

        {/* CTAs (left-aligned in one row) - Temporarily commented out */}
        {/* <div className="mt-2 flex flex-wrap items-center gap-4">
          {ctaPrimary?.href ? (
            <Button asChild className="h-12 rounded-xl bg-[var(--brand-500)] px-6 text-base font-bold text-[var(--color-accent-contrast)] shadow-[var(--shadow-brand)] hover:bg-[var(--brand-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2">
              <Link href={ctaPrimary.href} aria-label={ctaPrimary.label}>{ctaPrimary.label}</Link>
            </Button>
          ) : (
            <Button className="h-12 rounded-xl bg-[var(--brand-500)] px-6 text-base font-bold text-[var(--color-accent-contrast)] shadow-[var(--shadow-brand)] hover:bg-[var(--brand-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)] focus-visible:ring-offset-2" aria-label={ctaPrimary?.label}>
              {ctaPrimary?.label}
            </Button>
          )}
          {ctaSecondary?.href ? (
            <Button asChild variant="ghost" className="h-12 rounded-xl px-5 text-base text-[var(--neutral-900)] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-500)]">
              <Link href={ctaSecondary.href} aria-label={ctaSecondary.label}>{ctaSecondary.label}</Link>
            </Button>
          ) : (
            <Button variant="ghost" className="h-12 rounded-xl px-5 text-base text-[var(--neutral-900)] hover:bg-black/5" aria-label={ctaSecondary?.label}>{ctaSecondary?.label}</Button>
          )}
        </div> */}

        {/* Review block below content cards */}
        {quote ? (
          <div className={cn("mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]/80 p-6", tone === "light" && "border-black/10 bg-black/[0.04]")}> 
            <p className={cn("type-h4 leading-relaxed", tone === "light" ? "text-black" : "text-[var(--color-text-secondary)]")}>“{quote.text}”</p>
            <div className="mt-3 flex items-center gap-3">
              {quote.avatarSrc ? <Image src={quote.avatarSrc} alt={quote.author} width={36} height={36} className="rounded-full" /> : null}
              <div className="flex items-center gap-2">
                <span className={cn("type-caption font-semibold", tone === "light" ? "text-black" : "text-foreground")}>{quote.author}</span>
                {quote.role ? (
                  <>
                    <span className="type-caption text-[var(--color-text-muted)]">•</span>
                    <span className="type-caption text-[var(--color-text-muted)]">{quote.role}</span>
                  </>
                ) : null}
                {quote.logoSrc ? <Image src={quote.logoSrc} alt="logo" width={24} height={24} className="opacity-100" /> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Image column - 40% width (5/12) */}
      {showAside ? (
        <div className="order-2 lg:order-2 lg:col-span-5 flex items-center">
          {showImage && imageSrc ? (
            <div className="relative w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[480px] lg:h-[520px] overflow-hidden rounded-xl bg-[radial-gradient(60%_60%_at_30%_30%,color-mix(in_oklab,var(--brand-300)_18%,transparent),transparent_70%),radial-gradient(60%_60%_at_80%_70%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),radial-gradient(55%_60%_at_50%_100%,color-mix(in_oklab,var(--brand-400)_28%,transparent),transparent_65%)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes={imageSizes}
                className="object-contain object-center saturate-[0.85] contrast-[0.98]"
                priority={false}
                placeholder={typeof imageSrc === "string" ? "empty" : "blur"}
              />
              {logoSrc ? (
                <div className={cn(
                  "absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 type-caption text-foreground shadow-sm backdrop-blur",
                  tone === "light" ? "border-black/20 bg-black/[0.05] text-black" : "border-[color-mix(in_oklab,var(--brand-500)_35%,transparent)] bg-card/90"
                )}>
                  <Image src={logoSrc} alt="Logo" width={20} height={20} className="opacity-90" />
                  <span className="font-medium">{title}</span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
  return (
    <section className={cn("relative isolate overflow-hidden", tone === "light" ? "bg-[#FEE78A]" : "", className)} role="region" aria-labelledby={headingId}>
      {/* Waves - smooth transitions to adjacent sections */}
      {renderWave("top", tone === "light" ? "var(--bg-section)" : "var(--color-background)")}
      {renderWave("bottom", tone === "light" ? "var(--bg-section)" : "var(--color-background)")}
      
      {/* brand gradient backdrop */}
      {!frameless && tone !== "light" && (
        <div
          className="pointer-events-none absolute inset-0 -z-20 [mask-image:radial-gradient(75%_80%_at_50%_40%,black,transparent)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_80%_40%,color-mix(in_oklab,var(--brand-500)_8%,transparent),transparent_70%)]" />
        </div>
      )}

      {/* subtle repeating RA logo pattern (oversized to cover corners, tilted up-left) */}
      {showBackdropLogo && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-[9] h-[200vh] w-[200vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.018]"
          aria-hidden="true"
        >
          <div
            className={cn(
              "absolute inset-0 rotate-[-8deg]",
              tone === "light" ? "mix-blend-multiply" : "mix-blend-soft-light"
            )}
          >
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                {/* Tile size controls spacing; image size controls logo size */}
                <pattern id="cs-ra-logo" width="252" height="189" patternUnits="userSpaceOnUse">
                  <image href="/media/ralogosvg.svg" x="0" y="0" width="240" height="177" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cs-ra-logo)" />
            </svg>
          </div>
        </div>
      )}

      {/* background grid tint */}
      {!frameless && (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#cs-grid)"
              className={cn(tone === "light" ? "text-black" : "text-foreground")}
            />
          </svg>
        </div>
      )}

      <div className={cn(
        "relative mx-auto max-w-[1400px] px-4 sm:px-6",
        tone === "light" ? "pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px]" : "py-0"
      )}>
        {frameless ? (
          content
        ) : (
          <Card
            className={cn(
              "relative overflow-hidden border-[var(--color-border)] bg-card/95 backdrop-blur-[var(--blur-xs)] shadow-[var(--shadow-1)]",
              tone === "light" && "border-black/10 bg-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            )}
          >
            {/* inner brand glows for depth (very subtle) */}
            {tone !== "light" && (
              <div className="pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true">
                <div className="absolute -top-28 -left-28 h-[420px] w-[420px] rounded-full blur-3xl bg-[color-mix(in_oklab,var(--brand-400)_14%,transparent)]" />
                <div className="absolute -bottom-28 -right-28 h-[460px] w-[460px] rounded-full blur-3xl bg-[color-mix(in_oklab,var(--brand-600)_12%,transparent)]" />
              </div>
            )}
            <CardContent className="p-8 sm:p-10 lg:p-12">
              {content}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}


