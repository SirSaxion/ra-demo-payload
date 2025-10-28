import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";

interface OfficeSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  latitude?: number;
  longitude?: number;
  address?: {
    street: string;
    city: string;
  };
  phone?: string;
  email?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}

const OfficeSection: React.FC<OfficeSectionProps> = ({
  badge = "Office & Werkwijze",
  title = "Waarom samenwerken met ons?",
  subtitle = "🏢 Bezoek ons in Amsterdam",
  latitude = 52.3239602,
  longitude = 4.9586448,
  address = {
    street: "Daalwijkdreef 47",
    city: "1103 AD Amsterdam",
  },
  phone = "085 060 2989",
  email = "info@realaccelerate.nl",
  image = "/images/joep-koffie.png",
  imageAlt = "Joep",
  className,
}) => {
  // Precompute bounding box around the HQ
  const MIN_LAT = latitude - 0.005;
  const MAX_LAT = latitude + 0.005;
  const MIN_LON = longitude - 0.008;
  const MAX_LON = longitude + 0.008;

  const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${MIN_LON}%2C${MIN_LAT}%2C${MAX_LON}%2C${MAX_LAT}&layer=mapnik&marker=${latitude}%2C${longitude}`;
  const GMAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <section className={cn("relative isolate bg-[#1A1A1A] text-foreground py-16 md:py-24", className)}>
      {/* Subtle grid background for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(75%_75%_at_50%_35%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="office-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#office-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="mt-4 type-h2 text-foreground">{title}</h2>
          <p className="type-subtitle text-foreground/80">{subtitle}</p>
        </div>

        <div className="grid gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-0 md:grid-cols-[1.1fr_0.9fr] md:grid-rows-[auto_auto] items-stretch">
          {/* Left: OSM Map */}
          <div className="relative h-full md:row-span-2 md:self-stretch">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--brand-500)]/20 to-transparent blur-[12px]" aria-hidden />
            <Card className="relative h-full overflow-hidden rounded-2xl border-[var(--color-border)] bg-[var(--color-surface-2)] py-0 gap-0">
              <div className="absolute inset-0">
                <iframe
                  title="Real Accelerate Amsterdam HQ"
                  src={OSM_EMBED}
                  className="absolute inset-0 h-full w-full border-0 filter grayscale brightness-[0.82] contrast-[1.08]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* darkening overlay over the map */}
                <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden />
                {/* Overlay Info */}
                <div className="pointer-events-none absolute bottom-3 left-3 z-20">
                  <div className="pointer-events-auto rounded-xl bg-[color-mix(in_oklab,var(--neutral-900)_80%,transparent)] text-white backdrop-blur-md ring-1 ring-white/15 shadow-lg">
                    <div className="px-4 py-3 flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                        <MapPin className="h-5 w-5 text-[var(--brand-300)]" />
                      </span>
                      <div>
                        <div className="font-semibold leading-tight">Real Accelerate</div>
                        <div className="text-white/85 text-sm leading-tight">{address.street}</div>
                        <div className="text-white/70 text-xs leading-tight">{address.city}</div>
                        <div className="mt-2 flex gap-2 text-xs">
                          <a className="rounded-full bg-white/10 px-2.5 py-1 ring-1 ring-white/15 hover:bg-white/15 transition" href={GMAPS_LINK} target="_blank" rel="noreferrer">
                            Openen in Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* Right: Image (top) + HQ card (bottom) */}
          <div className="grid gap-6">
            {/* Top: Plain image without border/card + brand glow */}
            <div className="relative">
              {/* Subtle brand glow behind the image */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[90%] w-[90%] rounded-full blur-[42px] opacity-85 bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklab,var(--brand-500)_50%,transparent)_0%,transparent_80%)]" />
              </div>
              <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
              </div>
            </div>

            {/* Bottom: Address & practicals */}
            <Card className="border-[var(--color-border)] bg-white/[0.03] shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-wider text-[var(--brand-600)]">
                    <MapPin className="h-3.5 w-3.5 text-[var(--brand-500)]" />
                    LOCATIE
                  </span>
                  <h3 className="mt-3 text-3xl font-bold md:text-4xl">Bezoekadres</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold">Adres</div>
                    <div className="text-sm text-foreground/80">{address.street}</div>
                    <div className="text-sm text-foreground/60">{address.city}</div>
                  </div>
                  <div className="space-y-2">
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-foreground/90 hover:text-foreground">
                      <Phone className="h-4 w-4 text-[var(--brand-500)]" />
                      <span>{phone}</span>
                    </a>
                    <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-foreground/90 hover:text-foreground">
                      <Mail className="h-4 w-4 text-[var(--brand-500)]" />
                      <span>{email}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
