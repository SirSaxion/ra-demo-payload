"use client";

import SolutionTransformationSection from "../SolutionTransformationSection";

export interface IQIPartnershipSectionProps {
  badge?: string
  title?: string
  subtitle?: string
  quote?: string
  leftImage?: any // Media object from CMS
  leftTitle?: string
  leftSubtitle?: string
  leftItems?: string[]
  rightImage?: any // Media object from CMS
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
  leftImage,
  leftTitle = 'LOKALE BEPERKINGEN',
  leftSubtitle = 'Zelfstandig beginnen',
  leftItems = [
    'Beperkt netwerk',
    '€50k+ setup kosten',
    '70%+ failure rate',
    '2-3 jaar opbouw tijd'
  ],
  rightImage,
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
      leftImage={leftImage?.sizes?.medium?.url || leftImage?.url || '/media/placeholder.jpg'}
      leftImageAlt={leftImage?.alt || 'Lokale beperkingen'}
      leftTitle={leftTitle}
      leftSubtitle={leftSubtitle}
      leftItems={leftItems}
      rightImage={rightImage?.sizes?.medium?.url || rightImage?.url || '/media/iqiglobal.jpg'}
      rightImageAlt={rightImage?.alt || 'IQI Global Partnership'}
      rightTitle={rightTitle}
      rightSubtitle={rightSubtitle}
      rightItems={rightItems}
      bottomInsight={bottomInsight}
    />
  );
}
