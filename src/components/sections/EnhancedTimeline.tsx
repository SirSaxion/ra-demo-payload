"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date?: string;
  status?: "completed" | "in-progress" | "pending";
  category?: string;
  icon?: React.ElementType;
  skills?: string[];
  description?: string;
}

export interface EnhancedTimelineProps {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function EnhancedTimeline({
  data,
  title = "Timeline Journey",
  subtitle = "Track progress and milestones",
  className,
}: EnhancedTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "pending":
        return "bg-gray-400";
      default:
        return "bg-gray-300";
    }
  };

  // Parse titles like "2021 — 🏗️ OPRICHTING" into a year and a headline.
  // If the headline starts with emoji/symbols, move them to the end: "🏗️ OPRICHTING" -> "OPRICHTING 🏗️"
  const formatTitle = (title: string): { year: string; headline: string } => {
    const match = title.match(/^\s*(\d{4})\s*[—-]\s*(.+)\s*$/);
    if (!match) {
      return { year: "", headline: title };
    }
    const year = match[1];
    let rest = match[2];
    // Move any leading non-alphanumeric (ASCII) sequence (emoji/symbols) to the end
    const leading = rest.match(/^([^A-Za-z0-9]+)\s*(.*)$/);
    if (leading) {
      const symbols = leading[1].trim();
      const text = leading[2].trim();
      rest = text ? `${text} ${symbols}` : symbols;
    }
    return { year, headline: rest.trim() };
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-section py-16 md:py-24",
        className
      )}
      ref={containerRef}
    >
      {/* subtle grid background (same as mission section) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(75%_75%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="timeline-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="mt-3 type-h2">{title}</h2>
          <p className="type-body text-white/80">{subtitle}</p>
        </div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 xl:pt-40 xl:gap-10">
            <div className="sticky flex flex-col xl:flex-row z-40 items-center top-40 self-start shrink-0 xl:basis-[520px] xl:basis-[600px]">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background border border-border flex items-center justify-center">
                <div className={cn("h-4 w-4 rounded-full border p-2 transition-all duration-300", getStatusColor(item.status))} />
              </div>
              <div className="hidden xl:flex flex-col xl:pl-20">
                <span className="text-lg md:text-xl font-semibold text-white/70 tracking-wide">{formatTitle(item.title).year}</span>
                <span className="text-3xl md:text-5xl font-bold text-white/90 leading-tight">{formatTitle(item.title).headline}</span>
              </div>
            </div>

            <div className="relative pl-20 pr-4 xl:pl-6 xl:ml-8 flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4 xl:hidden">
                <h3 className="text-2xl font-bold text-white/90">{item.title}</h3>
                {item.status && (
                  <Badge variant={item.status === "completed" ? "default" : "secondary"}>{item.status}</Badge>
                )}
              </div>

              <div className="hidden xl:flex items-center gap-3 mb-6">
                {item.status && (
                  <Badge variant={item.status === "completed" ? "default" : "secondary"}>{item.status}</Badge>
                )}
                {item.date && <span className="text-sm text-muted-foreground">{item.date}</span>}
              </div>

              <div className="max-w-none text-white/80 text-lg md:text-xl leading-7 md:leading-8">{item.content}</div>

              {item.skills && item.skills.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute xl:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/80 to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default EnhancedTimeline;
