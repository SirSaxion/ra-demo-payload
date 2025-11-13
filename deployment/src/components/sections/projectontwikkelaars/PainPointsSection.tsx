"use client";

import ChallengesSection from "../ChallengesSection";
import { Clock, DollarSign, Users, Building2 } from "lucide-react";

export interface PainPointsSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  challenges?: Array<{ icon: string; title: string; description: string }>;
  ctaIcon?: string;
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function PainPointsSection({
  badge = "Projectontwikkelaar uitdagingen",
  title = "Herken je deze frustraties bij projectverkoop?",
  subtitle = "Veel projectontwikkelaars lopen tegen dezelfde uitdagingen aan. Herkenbaar? Dan is er een betere manier.",
  challenges = [
    {
      icon: "Clock",
      title: "Verkooptrajecten die te veel tijd kosten",
      description: "Je projecten blijven onnodig lang op de markt staan. Elke maand vertraging kost duizenden euro's en zorgt voor extra druk.",
    },
    {
      icon: "Users",
      title: "Afhankelijkheid van losse partijen",
      description: "Geen grip op het proces. Je bent afhankelijk van externe partijen zonder duidelijke regie of voorspelbaarheid.",
    },
    {
      icon: "DollarSign",
      title: "Gebrek aan creatieve campagnes",
      description: "Standaard marketing die niet opvalt. Je project verdient campagnes die écht onderscheidend zijn en de juiste aandacht trekken.",
    },
    {
      icon: "Building2",
      title: "Onvoldoende zicht op de juiste doelgroep",
      description: "Moeilijk om de juiste kopers te vinden en bereiken op het juiste moment. Wie koopt jouw specifieke project?",
    },
    {
      icon: "Users",
      title: "Leads die niet optimaal worden opgevolgd",
      description: "Interesse komt binnen maar lekt weg. Gebrek aan systematische opvolging zorgt dat potentiële kopers verloren gaan.",
    },
  ],
  ctaIcon = "Building2",
  ctaTitle = "Wij hebben de oplossing!",
  ctaDescription = "Met onze ervaring als vastgoedondernemers combineren we marketing, beleving en slimme opvolging."
}: PainPointsSectionProps) {
  // Map icon strings to components
  const iconMap: Record<string, any> = { Clock, DollarSign, Users, Building2 };
  const mappedChallenges = challenges.map(c => ({
    ...c,
    icon: iconMap[c.icon] || Clock
  }));
  const CtaIcon = iconMap[ctaIcon] || Building2;

  return (
    <ChallengesSection
      badge={badge}
      title={title}
      subtitle={subtitle}
      challenges={mappedChallenges}
      ctaIcon={CtaIcon}
      ctaTitle={ctaTitle}
      ctaDescription={ctaDescription}
    />
  );
}