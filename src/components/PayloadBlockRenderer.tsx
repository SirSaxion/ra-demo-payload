'use client'

import dynamic from 'next/dynamic'

// Import all the section components
import HeroSection from '@/components/sections/home/HeroSection'
import TrustStrip from '@/components/sections/home/TrustStrip'
import ProblemSection from '@/components/sections/home/ProblemSection'
import CaseStudy from '@/components/sections/home/CaseStudy'
import UniqueApproach from '@/components/sections/home/UniqueApproach'
import FlowConnector from '@/components/sections/home/FlowConnector'
import MarketingMachine from '@/components/sections/home/MarketingMachine'
import TargetGroupsOverview from '@/components/sections/home/TargetGroupsOverview'
import NumbersSection from '@/components/sections/home/NumbersSection'
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee'
import FAQSection from '@/components/sections/home/FAQSection'
import HowItWorksSection from '@/components/sections/home/HowItWorksSection'
import FinalCTA from '@/components/sections/home/FinalCTA'

interface PayloadBlockRendererProps {
  blocks: any[]
}

export default function PayloadBlockRenderer({ blocks }: PayloadBlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  const renderBlock = (block: any, index: number) => {
    const { blockType } = block
    
    switch (blockType) {
      case 'heroSection':
        return (
          <HeroSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            ctaPrimary={block.ctaPrimary}
            ctaSecondary={block.ctaSecondary}
          />
        )
        
      case 'trustStrip':
        return (
          <TrustStrip
            key={index}
            items={block.items?.map((item: any) => item.text || item) || []}
            ariaLabel={block.ariaLabel}
          />
        )
        
      case 'problemSection':
        return (
          <ProblemSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            oldSituation={block.oldSituation}
            newSituation={block.newSituation}
          />
        )
        
      case 'caseStudy':
        return (
          <CaseStudy
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            tone={block.tone}
            frameless={block.frameless}
            showBackdropLogo={block.showBackdropLogo}
            imageSrc={block.image?.url || ''}
            imageAlt={block.image?.alt || ''}
            kpis={block.kpis}
            bullets={block.bullets?.map((bullet: any) => bullet.text || bullet) || []}
            ctaPrimary={block.ctaPrimary}
            ctaSecondary={block.ctaSecondary}
          />
        )
        
      case 'uniqueApproach':
        return (
          <UniqueApproach
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            metricValue={block.metricValue}
            metricLabel={block.metricLabel}
            card1Title={block.card1Title}
            card1Description={block.card1Description}
            card2Title={block.card2Title}
            card2Description={block.card2Description}
            card3Title={block.card3Title}
            card3Description={block.card3Description}
            card4Title={block.card4Title}
            card4Description={block.card4Description}
            ctaText={block.ctaText}
            ctaButtonLabel={block.ctaButtonLabel}
            ctaButtonHref={block.ctaButtonHref}
          />
        )
        
      case 'flowConnector':
        return <FlowConnector key={index} />
        
      case 'marketingMachine':
        return (
          <MarketingMachine
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            features={block.features?.map((feature: any) => ({
              ...feature,
              imageSrc: feature.image?.url || ''
            })) || []}
          />
        )
        
      case 'targetGroupsOverview':
        return (
          <TargetGroupsOverview
            key={index}
            title={block.title}
            subtitle={block.subtitle}
          />
        )
        
      case 'numbersSection':
        return (
          <NumbersSection
            key={index}
            title={block.title}
            stats={block.stats}
          />
        )
        
      case 'testimonialsSection':
        return (
          <TestimonialsSection
            key={index}
            title={block.title}
            description={block.description}
            durationSec={block.durationSec}
            testimonials={block.testimonials?.map((testimonial: any) => ({
              ...testimonial,
              imageSrc: testimonial.companyLogo?.url || '',
              author: {
                ...testimonial.author,
                avatar: testimonial.author?.avatar?.url || ''
              }
            })) || []}
          />
        )
        
      case 'faqSection':
        return (
          <FAQSection
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            items={block.items}
          />
        )
        
      case 'howItWorksSection':
        return (
          <HowItWorksSection
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps?.map((step: any) => ({
              ...step,
              bullets: step.bullets?.map((bullet: any) => bullet.text || bullet) || []
            })) || []}
          />
        )
        
      case 'finalCTA':
        return (
          <FinalCTA
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            ctaLabel={block.ctaLabel}
            ctaHref={block.ctaHref}
            bullets={block.bullets?.map((bullet: any) => bullet.text || bullet) || []}
          />
        )
        
      default:
        console.warn(`Unknown block type: ${blockType}`)
        return (
          <div key={index} className="p-8 bg-yellow-50 border border-yellow-200 rounded-lg m-4">
            <p className="text-yellow-800">Unknown block type: {blockType}</p>
          </div>
        )
    }
  }

  return (
    <>
      {blocks.map((block, index) => renderBlock(block, index))}
    </>
  )
}
