"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionShell, SectionHeader, SectionSurface } from "@/components/sections/Section";

type SuccessItem = {
  id: string;
  title: string;
  summary: string;
  metrics: string[];
  href?: string;
};

const ITEMS: SuccessItem[] = [
  {
    id: "marco",
    title: "Marco van Barneveld",
    summary: "4 nieuwe franchise locaties",
    metrics: ["4 nieuwe locaties", "Franchise groei"],
    href: "/cases",
  },
  {
    id: "thoma-post",
    title: "Thoma Post",
    summary: "31 afspraken in eerste maand",
    metrics: ["31 afspraken", "Maand 1"],
    href: "/cases",
  },
];

export default function MoreSuccessStories() {
  const [activeId, setActiveId] = useState<string>(ITEMS[0].id);
  const [activeLoopIndex, setActiveLoopIndex] = useState<number>(0);

  const activeIndex = useMemo(() => ITEMS.findIndex((i) => i.id === activeId), [activeId]);

  // Auto-cycle every 4 seconds until user clicks
  useEffect(() => {
    const id = setInterval(() => {
      setActiveLoopIndex((prev) => {
        const next = (prev + 1) % ITEMS.length;
        setActiveId(ITEMS[next].id);
        return next;
      });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const handleClick = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const active = ITEMS[activeIndex] ?? ITEMS[0];

  return (
    <SectionShell background="vignette" paddingY="lg" containerWidth="7xl">
      <SectionHeader kicker="MEER SUCCESVERHALEN" title="Uitgelichte succesverhalen" align="center" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        {/* Left: Tilted scroll list */}
        <div className="flex items-center justify-center md:items-start md:justify-end">
          <TiltedScroll
            items={ITEMS.map((i) => ({ id: i.id, text: i.title }))}
            activeId={activeId}
            paused={false}
            highlightFirstBatchOnly={false}
            interactive={false}
            activeLoopIndex={activeLoopIndex}
            animated={false}
            loop={false}
            className=""
          />
        </div>

        {/* Right: Details panel with accent bar (unique to stories) */}
        <div className="mx-auto w-full max-w-[560px]">
          <SectionSurface accent="bar" contentClassName="grid h-full grid-cols-1 items-center gap-6">
            <div className="flex h-full flex-col justify-center">
              <h3 className="type-h4 tracking-[-0.02em] text-foreground">{active.title}</h3>
              <p className="mt-2 type-body text-[var(--color-text-secondary)]">{active.summary}</p>

              <div className="mt-6">
                <Button
                  asChild
                  variant="link"
                  className="h-auto px-0 text-[var(--brand-700)] hover:text-[var(--brand-600)] underline-offset-4 hover:underline"
                >
                  <Link href="/cases">Alle cases</Link>
                </Button>
              </div>
            </div>
          </SectionSurface>
        </div>
      </div>
    </SectionShell>
  );
}


