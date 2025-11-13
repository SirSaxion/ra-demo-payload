"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const items = [
  {
    value: "makelaars",
    name: "Makelaars",
    description: "Duurzame klant‑relaties ipv lead‑jacht",
    href: "/makelaars",
    img: "/images/makelaars.jpg",
    alt: "Makelaars in gesprek met klanten",
  },
  {
    value: "buitenland",
    name: "Buitenland",
    description: "IQI Global Partnership • Dubai, Spanje, Bali ervaring",
    href: "/makelaars-buitenland",
    img: "/images/internationaal.webp",
    alt: "Internationale skyline met wereldbol",
  },
  {
    value: "hypotheekadviseurs",
    name: "Hypotheekadviseurs",
    description: "Onafhankelijk van offerte‑sites worden",
    href: "/hypotheekadviseurs",
    img: "/images/hypotheekadviseur.jpg",
    alt: "Hypotheekadviseur in overleg",
  },
  {
    value: "projectontwikkelaars",
    name: "Projectontwikkelaars",
    description: "Project marketing & events",
    href: "/projectontwikkelaars",
    img: "/images/projectontwikkelaar.webp",
    alt: "Bouwplaats met kraan",
  },
];

export default function TargetGroupsTabs() {
  return (
    <section className="relative isolate bg-background text-foreground border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 type-kicker font-medium text-black/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            DOELGROEPEN — Tabs + Crossfade
          </div>
          <h2 className="mt-4 type-h2">Voor wie wij werken</h2>
          <p className="mt-3 type-body text-foreground/70">
            Gespecialiseerde oplossingen voor elke vastgoedprofessional
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={items[0].value} className="mx-auto mt-8 max-w-6xl">
          <TabsList className="mx-auto">
            {items.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-6">
            {items.map((item) => (
              <TabsContent
                key={item.value}
                value={item.value}
                forceMount
                className="relative h-[440px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-card shadow-sm data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 transition-opacity duration-500"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    priority={false}
                    sizes="(min-width: 1024px) 60vw, 94vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                </div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="max-w-xl">
                    <h3 className="text-white text-2xl font-semibold md:text-3xl">{item.name}</h3>
                    <p className="mt-2 text-white/85 md:text-lg">{item.description}</p>
                    <div className="mt-4 flex gap-3">
                      <Button asChild size="sm" variant="secondary" className="backdrop-blur">
                        <Link href={item.href}>Meer info</Link>
                      </Button>
                      <Button asChild size="sm" variant="ghost" className="text-white">
                        <Link href="/contact">Plan strategie‑sessie</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
