"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Globe, Home, Landmark, Wallet } from "lucide-react";

export type MasonryTileProps = {
  // Visual variant of the tile. Defaults to image.
  variant?: "image" | "quote" | "stat" | "logo";
  // Common props
  label: string;
  iconKey: "home" | "building2" | "landmark" | "globe" | "wallet";
  href?: string;
  caption?: string;
  tags?: string[];
  kpi?: string;
  ctaLabel?: string;
  // Image variant
  src?: string;
  alt?: string;
  // Quote variant
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
  // Stat variant
  statValue?: string;
  statLabel?: string;
  statSubLabel?: string;
  // Logo variant
  logoSrc?: string;
  logoAlt?: string;
};

function renderIcon(key: MasonryTileProps["iconKey"]) {
  const cls = "h-4 w-4";
  switch (key) {
    case "home":
      return <Home className={cls} />;
    case "building2":
      return <Building2 className={cls} />;
    case "landmark":
      return <Landmark className={cls} />;
    case "globe":
      return <Globe className={cls} />;
    case "wallet":
      return <Wallet className={cls} />;
  }
}

export function MasonryTile({
  variant = "image",
  src,
  alt,
  label,
  iconKey,
  href,
  caption,
  tags,
  kpi,
  ctaLabel,
  quote,
  author,
  role,
  avatar,
  statValue,
  statLabel,
  statSubLabel,
  logoSrc,
  logoAlt,
}: MasonryTileProps) {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="group relative overflow-hidden rounded-2xl ring-1 ring-[color-mix(in_oklab,var(--neutral-900)_10%,transparent)] shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:ring-[color-mix(in_oklab,var(--brand-500)_30%,transparent)]">
      {/* Label + tags (top-left) */}
      <div className="absolute left-2 top-2 z-10 space-y-1">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs md:text-sm font-semibold text-[var(--neutral-900)] shadow-sm ring-1 ring-black/5 backdrop-blur">
          <span className="inline-flex h-4 w-4 items-center justify-center text-[var(--neutral-900)]">{renderIcon(iconKey)}</span>
          <span>{label}</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-white/75 px-2 py-0.5 text-[10px] text-[color-mix(in_oklab,var(--neutral-900)_90%,transparent)] ring-1 ring-black/5 shadow-xs backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* KPI (top-right) */}
      {kpi && (
        <div className="absolute right-2 top-2 z-10">
          <div className="inline-flex items-center rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold text-white/95 shadow-sm ring-1 ring-white/10 backdrop-blur">
            <span>{kpi}</span>
          </div>
        </div>
      )}

      {children}

      {/* CTA for non-image variants (bottom-right) */}
      {href && variant !== "image" && (
        <div className="absolute bottom-2 right-2 z-10">
          <div className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium text-[var(--neutral-900)] shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span>{ctaLabel ?? "Bekijk case"}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
    </div>
  );

  let content: React.ReactNode = null;

  if (variant === "image") {
    content = (
      <Wrapper>
        {src && (
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={src}
              alt={alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="block object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.02]"
            />
          </div>
        )}
        {/* Gradient + caption hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {caption && (
            <div className="rounded-md bg-black/45 px-2 py-1 text-[11px] font-medium text-white/95 backdrop-blur-sm">
              {caption}
            </div>
          )}
          {href && (
            <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-[10px] font-medium text-[var(--neutral-900)] shadow-sm ring-1 ring-black/5 backdrop-blur">
              <span>{ctaLabel ?? "Bekijk case"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          )}
        </div>
      </Wrapper>
    );
  } else if (variant === "quote") {
    content = (
      <Wrapper>
        <div className="relative z-0 grid gap-3 bg-white/75 px-4 py-5 backdrop-blur">
          <div className="text-sm leading-relaxed text-[color-mix(in_oklab,var(--neutral-900)_92%,transparent)]">
            <span className="mr-1 text-xl leading-none text-[color-mix(in_oklab,var(--neutral-900)_80%,transparent)]">“</span>
            {quote}
            <span className="ml-1 text-xl leading-none text-[color-mix(in_oklab,var(--neutral-900)_80%,transparent)]">”</span>
          </div>
          {(author || role) && (
            <div className="mt-1 flex items-center gap-3">
              {avatar && (
                <div className="relative h-8 w-8 rounded-full ring-1 ring-black/10 overflow-hidden">
                  <Image src={avatar} alt={author || "Avatar"} fill sizes="32px" className="object-cover" />
                </div>
              )}
              <div className="min-w-0">
                {author && <div className="truncate text-sm font-semibold text-[var(--neutral-900)]">{author}</div>}
                {role && <div className="truncate text-xs text-[color-mix(in_oklab,var(--neutral-900)_70%,transparent)]">{role}</div>}
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    );
  } else if (variant === "stat") {
    content = (
      <Wrapper>
        <div className="relative z-0 grid gap-2 bg-[color-mix(in_oklab,var(--brand-200)_60%,white_50%)] px-4 py-6">
          <div className="text-3xl font-extrabold tracking-tight text-[var(--neutral-900)]">{statValue}</div>
          <div className="text-sm font-medium text-[color-mix(in_oklab,var(--neutral-900)_85%,transparent)]">{statLabel}</div>
          {statSubLabel && (
            <div className="text-[11px] text-[color-mix(in_oklab,var(--neutral-900)_70%,transparent)]">{statSubLabel}</div>
          )}
        </div>
      </Wrapper>
    );
  } else if (variant === "logo") {
    content = (
      <Wrapper>
        <div className="flex items-center justify-center bg-white/80 px-4 py-6">
          {logoSrc && (
            <div className="relative h-16 w-full">
              <Image src={logoSrc} alt={logoAlt || "Logo"} fill sizes="200px" className="object-contain" />
            </div>
          )}
        </div>
      </Wrapper>
    );
  }

  const node = content ?? null;
  return href ? (
    <Link href={href} className="block" aria-label={caption || alt || label}>
      {node}
    </Link>
  ) : (
    <>{node}</>
  );
}
