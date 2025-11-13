"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Makelaars",
    description: "Duurzame klant‑relaties ipv lead‑jacht",
    href: "/makelaars",
    img: "/images/makelaars.jpg",
    alt: "Makelaars in gesprek met klanten",
  },
  {
    name: "Buitenland",
    description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring",
    href: "/makelaars-buitenland",
    img: "/images/internationaal.webp",
    alt: "Internationale skyline met wereldbol",
  },
  {
    name: "Hypotheekadviseurs",
    description: "Onafhankelijk van offerte‑sites worden",
    href: "/hypotheekadviseurs",
    img: "/images/hypotheekadviseur.jpg",
    alt: "Hypotheekadviseur in overleg",
  },
  {
    name: "Projectontwikkelaars",
    description: "Project marketing & events",
    href: "/projectontwikkelaars",
    img: "/images/projectontwikkelaar.webp",
    alt: "Bouwplaats met kraan",
  },
];

export default function TargetGroupsSticky() {
  return (
    <section className="relative isolate bg-background text-foreground border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 type-kicker font-medium text-black/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            DOELGROEPEN — Sticky + Snap
          </div>
          <h2 className="mt-4 type-h2">Voor wie wij werken</h2>
          <p className="mt-3 type-body text-foreground/70">
            Gespecialiseerde oplossingen voor elke vastgoedprofessional
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid items-start gap-8 md:grid-cols-12">
          {/* Sticky intro */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="sticky top-20 space-y-4">
              <p className="text-balance text-sm text-foreground/70">
                Swipe of scroll door de cases. Elke doelgroep krijgt een eigen aanpak met duidelijke belofte en case‑materiaal.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="default">
                  <Link href="/contact">Plan strategie‑sessie</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/cases">Alle cases</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Snap gallery */}
          <div className="md:col-span-8 lg:col-span-8">
            <div className="relative">
              <Carousel
                className="px-2"
                opts={{ align: "start", dragFree: true, skipSnaps: true }}
              >
                <CarouselContent>
                  {items.map((item) => (
                    <CarouselItem key={item.name} className="basis-[88%] sm:basis-[70%] md:basis-[62%] lg:basis-[48%]">
                      <article className="group relative h-[420px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-card shadow-sm">
                        <div className="absolute inset-0">
                          <Image
                            src={item.img}
                            alt={item.alt}
                            fill
                            priority={false}
                            sizes="(min-width: 1024px) 50vw, 90vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                          <h3 className="text-white text-lg font-semibold">{item.name}</h3>
                          <p className="mt-1 text-white/80 text-sm">{item.description}</p>
                          <div className="mt-3">
                            <Button asChild size="sm" variant="secondary" className="backdrop-blur">
                              <Link href={item.href}>Meer info</Link>
                            </Button>
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="-left-6 hidden md:flex" />
                <CarouselNext className="-right-6 hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
