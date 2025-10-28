"use client";

import React from "react";
import { DollarSign, TrendingDown, AlertTriangle, Swords, Users, CheckCircle2, Target } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ProblemItem {
  text: string;
  icon: string;
}

interface SolutionItem {
  text: string;
  icon: string;
}

export interface ProblemSectionProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  oldWayTitle?: string;
  oldWaySubtitle?: string;
  problems?: ProblemItem[];
  newWayTitle?: string;
  newWaySubtitle?: string;
  solutions?: SolutionItem[];
  bottomInsight?: string;
}

export default function ProblemSection({
  kicker = "De uitdaging",
  title = "De uitdaging voor makelaarskantoren",
  subtitle = "Veel makelaarskantoren draaien volle agenda's en hebben een continue stroom telefoontjes, maar groeien toch niet door. We zien het dagelijks bij onze klanten – en we hebben het zelf ook ervaren met SETTL.",
  oldWayTitle = "HUIDIGE SITUATIE",
  oldWaySubtitle = "Waar veel kantoren tegenaan lopen",
  problems = [
    { text: "Tijd en energie gaan verloren aan ad hoc werk", icon: "AlertTriangle" },
    { text: "Dure marketingplatformen leveren weinig op", icon: "DollarSign" },
    { text: "Processen zijn versnipperd en niet schaalbaar", icon: "TrendingDown" },
    { text: "Drukte zonder duurzame groei", icon: "Swords" }
  ],
  newWayTitle = "ONZE AANPAK",
  newWaySubtitle = "Hoe wij helpen",
  solutions = [
    { text: "Bewezen strategieën en systemen", icon: "CheckCircle2" },
    { text: "Efficiëntere processen en automatisering", icon: "Target" },
    { text: "Structureel bouwen aan een schaalbaar kantoor", icon: "Users" },
    { text: "Ervaring uit de praktijk met SETTL.", icon: "CheckCircle2" }
  ],
  bottomInsight = "<strong>Wij weten hoe dat voelt –</strong> en vooral: hoe je er vanaf komt"
}: ProblemSectionProps) {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Circle;
  };
  return (
    <section id="solution" className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="problem-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#problem-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Top subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {kicker}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Problem Transformation */}
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center">
            {/* Old Way - Transactionele Leads */}
            <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--neutral-900)_25%,transparent)]">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-red-500/80 via-red-400/60 to-red-500/80 [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />
              
              <div className="text-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-[var(--brand-500)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                  {oldWayTitle}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">{oldWaySubtitle}</p>
              </div>
              
              <ul className="space-y-3 text-base text-[var(--color-text-secondary)]">
                {problems.map((problem, index) => {
                  const Icon = getIcon(problem.icon);
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                      {problem.text}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Transformation Arrow */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-2 -z-10 rounded-full bg-[color-mix(in_oklab,var(--brand-500)_15%,transparent)] blur-xl" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-3)] text-lg font-semibold text-foreground">
                  <svg className="w-6 h-6 text-[var(--brand-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* New Way - Relationele Klanten */}
            <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--brand-500)_15%,transparent)]">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[var(--brand-500)] via-[color-mix(in_oklab,var(--brand-500)_60%,var(--brand-200))] to-[var(--brand-200)] [mask-image:linear-gradient(to_right,transparent,var(--bg-section)_12%,var(--bg-section)_88%,transparent)]" />
              
              <div className="text-center mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--brand-400)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-[var(--brand-500)]" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                  {newWayTitle}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">{newWaySubtitle}</p>
              </div>
              
              <ul className="space-y-3 text-base text-[var(--color-text-secondary)]">
                {solutions.map((solution, index) => {
                  const Icon = getIcon(solution.icon);
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-500)]" />
                      {solution.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom insight */}
          <div className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center gap-3 bg-[var(--color-surface-3)] backdrop-blur-sm border border-[var(--color-border)] rounded-xl px-6 py-4 shadow-sm">
              <Target className="h-6 w-6 text-[var(--brand-500)]" />
              <p className="text-sm font-medium text-[var(--color-text-secondary)]" dangerouslySetInnerHTML={{ __html: bottomInsight }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
