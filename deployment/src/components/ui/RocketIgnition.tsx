"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Rocket as RocketIcon } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/**
 * Subtle rocket ignition + smoke using tsParticles.
 * - Keeps a tiny canvas area just under the rocket.
 * - Very low particle count, slow upward drift, soft opacity.
 * - Respects reduced motion by letting you control play from parent if needed.
 */
export default function RocketIgnition() {
  const [engineReady, setEngineReady] = useState(false);
  const [smokeColor, setSmokeColor] = useState<string>("#0a0a0a");

  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setEngineReady(true);
    });
    // Resolve CSS variable for smoke color (neutral-900) once on mount
    try {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--neutral-900")
        .trim();
      if (v) setSmokeColor(v);
    } catch {}
    return () => {
      mounted = false;
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: 30,
      detectRetina: true,
      particles: {
        number: { value: 6 },
        color: { value: smokeColor },
        opacity: {
          value: { min: 0.12, max: 0.35 },
          animation: { enable: true, speed: 0.2, startValue: "random", sync: false },
        },
        size: { value: { min: 1.4, max: 3.2 } },
        move: {
          enable: true,
          direction: "top",
          speed: { min: 0.05, max: 0.25 },
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        shape: { type: "circle" },
      },
      interactivity: { events: {}, modes: {} },
    }),
    [smokeColor]
  );

  return (
    <span aria-hidden className="relative ml-2 inline-flex items-center">
      <RocketIcon className="h-[1em] w-[1em] text-[var(--neutral-900)]/80 motion-safe:animate-[ignition_2.6s_ease-in-out_infinite] motion-reduce:animate-none will-change-transform" />
      {/* Smoke anchor at bottom-left of the rocket */}
      <span
        className="pointer-events-none absolute left-0 top-full"
        style={{ width: 16, height: 14, zIndex: -1, marginLeft: -3, marginTop: 1 }}
      >
        {engineReady && (
          <Particles id="rocket-smoke" className="absolute inset-0" options={options} />
        )}
      </span>
    </span>
  );
}
