"use client";

import React from "react";
import { cn } from "@/lib/utils";

type BorderBeamProps = {
  size?: number;
  duration?: number; // seconds
  delay?: number; // seconds
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number; // 0-100
  borderWidth?: number; // px
};

export function BorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) {
  const animationName = reverse ? "border-beam-rev" : "border-beam";

  return (
    <>
      <style>
        {`
        @keyframes border-beam {
          from { offset-distance: var(--bb-start); }
          to   { offset-distance: calc(var(--bb-start) + 100%); }
        }
        @keyframes border-beam-rev {
          from { offset-distance: calc(100% - var(--bb-start)); }
          to   { offset-distance: calc(-1% - var(--bb-start)); }
        }
      `}
      </style>
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
        style={{
          borderWidth,
          ...style,
        }}
      >
        {(() => {
          const cssVars: Record<string, string> = {
            "--bb-from": colorFrom,
            "--bb-to": colorTo,
            "--bb-start": `${initialOffset}%`,
          };
          return (
            <div
          className={cn(
            "absolute aspect-square bg-gradient-to-l from-[var(--bb-from)] via-[var(--bb-to)] to-transparent",
            className,
          )}
          style={{
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            animation: `${animationName} ${duration}s linear ${-delay}s infinite`,
            ...cssVars,
          } as React.CSSProperties}
        />
          );
        })()}
      </div>
    </>
  );
}

export default BorderBeam;


