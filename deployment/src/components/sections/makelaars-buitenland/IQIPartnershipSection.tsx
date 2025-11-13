"use client";

import SolutionTransformationSection from "../SolutionTransformationSection";

export interface IQIPartnershipSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  quote?: string
  leftImage?: string
  leftImageAlt?: string
  leftTitle?: string
  leftSubtitle?: string
  leftItems?: string[]
  rightImage?: string
  rightImageAlt?: string
  rightTitle?: string
  rightSubtitle?: string
  rightItems?: string[]
  bottomInsight?: string
}

export default function IQIPartnershipSection({
  badge = 'De oplossing',
  title = 'Van prachtig project naar verkoopklaar succes',
  subtitle = 'Real Accelerate koppelt jouw vastgoedproject aan een bewezen marketingmachine die gericht is op vertrouwen, storytelling en data. Wij combineren advertising, automation en lokale partners om kopers te vinden — en deals te sluiten.',
  quote = 'Complete internationale projectondersteuning',
  leftImage = '/media/placeholder.jpg',
  leftImageAlt = 'Lokale beperkingen',
  leftTitle = 'LOKALE BEPERKINGEN',
  leftSubtitle = 'Zelfstandig beginnen',
  leftItems = [
    'Beperkt netwerk',
    '€50k+ setup kosten',
    '70%+ failure rate',
    '2-3 jaar opbouw tijd'
  ],
  rightImage = '/media/iqiglobal.jpg',
  rightImageAlt = 'IQI Global Partnership',
  rightTitle = 'REAL ACCELERATE VOORDELEN',
  rightSubtitle = 'Bewezen marketingmachine voor jouw project',
  rightItems = [
    'Volledige leadgeneratie & opvolging',
    'Internationaal netwerk via IQI Global',
    'Lokale promotie via events & media',
    'Rapportage met volledige transparantie'
  ],
  bottomInsight = 'Het verschil: Van hoge marketingkosten zonder resultaat naar een bewezen aanpak met meetbare verkopen'
}: IQIPartnershipSectionProps) {

  return (
    <SolutionTransformationSection
      badge={badge}
      title={title}
      subtitle={subtitle}
      quote={quote}
      leftImage={leftImage}
      leftImageAlt={leftImageAlt}
      leftTitle={leftTitle}
      leftSubtitle={leftSubtitle}
      leftItems={leftItems}
      rightImage={rightImage}
      rightImageAlt={rightImageAlt}
      rightTitle={rightTitle}
      rightSubtitle={rightSubtitle}
      rightItems={rightItems}
      bottomInsight={bottomInsight}
    />
  );
}
