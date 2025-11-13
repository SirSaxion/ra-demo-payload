"use client";

import ChallengesSection from "../ChallengesSection";
import { DollarSign, Scale, TrendingDown, Clock, Award, Handshake } from "lucide-react";

export interface PainPointsSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  challenges?: Array<{ icon: string; title: string; description: string }>
  ctaIcon?: string
  ctaTitle?: string
  ctaDescription?: string
}

export default function PainPointsSection({
  badge = "Hypotheekadviseur uitdagingen",
  title = "Herken jij deze frustraties als hypotheekadviseur?",
  subtitle = "De meeste hypotheekadviseurs blijven gevangen in een cyclus van slechte leads en prijsconcurrentie. Je bent niet alleen.",
  challenges = [
    {
      icon: "DollarSign",
      title: "Afhankelijkheid van offerte-sites",
      description: "Je betaalt te veel voor gedeelde leads van lage kwaliteit.",
    },
    {
      icon: "Scale",
      title: "Prijsconcurrentie",
      description: "Je wordt vergeleken op prijs in plaats van expertise.",
    },
    {
      icon: "TrendingDown",
      title: "Lage marges",
      description: "Steeds meer werk, steeds minder winst.",
    },
    {
      icon: "Clock",
      title: "Tijdsdruk en administratie",
      description: "Minder tijd voor advies, meer voor papierwerk.",
    },
    {
      icon: "Award",
      title: "Geen waardering voor je vakmanschap",
      description: "Terwijl jij juist het verschil maakt in advies en vertrouwen.",
    },
  ],
  ctaIcon = "Handshake",
  ctaTitle = "Wij hebben de oplossing!",
  ctaDescription = "Via Edit BV partnership word je onafhankelijk van offerte-sites met duurzaamheid expertise."
}: PainPointsSectionProps) {
  
  // Map icon strings to components
  const iconMap: Record<string, any> = { DollarSign, Scale, TrendingDown, Clock, Award, Handshake };
  const mappedChallenges = challenges.map(c => ({ ...c, icon: iconMap[c.icon] || DollarSign }));
  const mappedCtaIcon = iconMap[ctaIcon] || Handshake;

  return (
    <ChallengesSection
      badge={badge}
      title={title}
      subtitle={subtitle}
      challenges={mappedChallenges}
      ctaIcon={mappedCtaIcon}
      ctaTitle={ctaTitle}
      ctaDescription={ctaDescription}
    />
  );
}