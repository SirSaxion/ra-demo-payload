'use client'

// Optimized BlockRenderer with dynamic imports for faster page loads
// Only loads the components needed for the current page

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

interface Block {
  id: string
  type: string
  order: number
  props?: Record<string, any>
}

interface BlockRendererProps {
  blocks: Block[]
}

// Loading component for blocks
const BlockLoading = () => (
  <div className="w-full animate-pulse">
    <div className="h-96 w-full bg-muted/50 rounded-lg" />
  </div>
)

// Dynamic component loader - loads components on-demand
const componentLoader = (blockType: string): ComponentType<any> | null => {
  // Cases page components
  if (blockType === 'Cases-BestVariants') return dynamic(() => import('@/components/sections/cases/BestVariants'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-Hero') return dynamic(() => import('@/components/sections/cases/Hero'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-IndustryBreakdown') return dynamic(() => import('@/components/sections/cases/IndustryBreakdown'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-Masonry') return dynamic(() => import('@/components/sections/cases/Masonry'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-ProcessShowcase') return dynamic(() => import('@/components/sections/cases/ProcessShowcase'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-ProjectsShowcase') return dynamic(() => import('@/components/sections/cases/ProjectsShowcase'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-StartYourStory') return dynamic(() => import('@/components/sections/cases/StartYourStory'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Cases-VideoTestimonials') return dynamic(() => import('@/components/sections/cases/VideoTestimonials'), { ssr: false, loading: BlockLoading })
  
  // Home page components
  if (blockType === 'Home-CaseStudy') return dynamic(() => import('@/components/sections/home/CaseStudy'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-FAQSection') return dynamic(() => import('@/components/sections/home/FAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-FinalCTA') return dynamic(() => import('@/components/sections/home/FinalCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-FlowConnector') return dynamic(() => import('@/components/sections/home/FlowConnector'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-HeroSection') return dynamic(() => import('@/components/sections/home/HeroSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-HowItWorksSection') return dynamic(() => import('@/components/sections/home/HowItWorksSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-MarketingMachine') return dynamic(() => import('@/components/sections/home/MarketingMachine'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-NumbersSection') return dynamic(() => import('@/components/sections/home/NumbersSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-ProblemSection') return dynamic(() => import('@/components/sections/home/ProblemSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-TargetGroupsOverview') return dynamic(() => import('@/components/sections/home/TargetGroupsOverview'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-TrustStrip') return dynamic(() => import('@/components/sections/home/TrustStrip'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-UniqueApproach') return dynamic(() => import('@/components/sections/home/UniqueApproach'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-TestimonialsSection') return dynamic(() => import('@/components/blocks/testimonials-with-marquee').then(mod => ({ default: mod.TestimonialsSection })), { ssr: false, loading: BlockLoading })
  if (blockType === 'Home-TargetGroupsOverviewPhotos') return dynamic(() => import('@/components/sections/home/TargetGroupsOverview').then(mod => ({ default: mod.TargetGroupsOverviewPhotos })), { ssr: false, loading: BlockLoading })
  
  // Hr-recruitment page components
  if (blockType === 'Hr-recruitment-FAQSection') return dynamic(() => import('@/components/sections/hr-recruitment/FAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-HeroSection') return dynamic(() => import('@/components/sections/hr-recruitment/HeroSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-MethodologySection') return dynamic(() => import('@/components/sections/hr-recruitment/MethodologySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-PainPointsSection') return dynamic(() => import('@/components/sections/hr-recruitment/PainPointsSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-ResultatenBentoGrid') return dynamic(() => import('@/components/sections/hr-recruitment/ResultatenBentoGrid'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-StrategieSessionCTA') return dynamic(() => import('@/components/sections/hr-recruitment/StrategieSessionCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-TransformationSection') return dynamic(() => import('@/components/sections/hr-recruitment/TransformationSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-TrustStripSection') return dynamic(() => import('@/components/sections/hr-recruitment/TrustStripSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-VoorWieIsDitSection') return dynamic(() => import('@/components/sections/hr-recruitment/VoorWieIsDitSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hr-recruitment-WatJeKrijgtSection') return dynamic(() => import('@/components/sections/hr-recruitment/WatJeKrijgtSection'), { ssr: false, loading: BlockLoading })
  
  // Hypotheekadviseurs page components
  if (blockType === 'Hypotheekadviseurs-BewezenAanpakSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/BewezenAanpakSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-BewezenResultatenSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/BewezenResultatenSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-EditBVPartnershipSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/EditBVPartnershipSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-FAQSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/FAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-Hero') return dynamic(() => import('@/components/sections/hypotheekadviseurs/Hero'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-MethodologySection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/MethodologySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-PainPointsSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/PainPointsSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-StrategieSessionCTA') return dynamic(() => import('@/components/sections/hypotheekadviseurs/StrategieSessionCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-TrustStrip') return dynamic(() => import('@/components/sections/hypotheekadviseurs/TrustStrip'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-VoorWieIsDitSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/VoorWieIsDitSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Hypotheekadviseurs-WatJeKrijgtSection') return dynamic(() => import('@/components/sections/hypotheekadviseurs/WatJeKrijgtSection'), { ssr: false, loading: BlockLoading })
  
  // Makelaars page components
  if (blockType === 'Makelaars-BewezenSysteemSection') return dynamic(() => import('@/components/sections/makelaars/BewezenSysteemSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-FAQSection') return dynamic(() => import('@/components/sections/makelaars/FAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-ForWhoIsThisSection') return dynamic(() => import('@/components/sections/makelaars/ForWhoIsThisSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-GuaranteesSection') return dynamic(() => import('@/components/sections/makelaars/GuaranteesSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-Hero') return dynamic(() => import('@/components/sections/makelaars/Hero'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-MethodologySection') return dynamic(() => import('@/components/sections/makelaars/MethodologySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-ProblemSection') return dynamic(() => import('@/components/sections/makelaars/ProblemSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-ResultsBentoGrid') return dynamic(() => import('@/components/sections/makelaars/ResultsBentoGrid'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-StrategieSessionCTA') return dynamic(() => import('@/components/sections/makelaars/StrategieSessionCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-TrustStrip') return dynamic(() => import('@/components/sections/makelaars/TrustStrip'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-WhatYouGetSection') return dynamic(() => import('@/components/sections/makelaars/WhatYouGetSection'), { ssr: false, loading: BlockLoading })
  
  // Makelaars-buitenland page components
  if (blockType === 'Makelaars-buitenland-IQIPartnershipSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/IQIPartnershipSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalCasesSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalCasesSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalFAQSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalFAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalForWhoIsThisSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalForWhoIsThisSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalGlobeSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalGlobeSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalMethodologySection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalMethodologySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalPainPointsSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalPainPointsSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalStrategySessionCTA') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalStrategySessionCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-InternationalWhatYouGetSection') return dynamic(() => import('@/components/sections/makelaars-buitenland/InternationalWhatYouGetSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-MakelaarsInternationalHero') return dynamic(() => import('@/components/sections/makelaars-buitenland/MakelaarsInternationalHero'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Makelaars-buitenland-MakelaarsInternationalTrustStrip') return dynamic(() => import('@/components/sections/makelaars-buitenland/MakelaarsInternationalTrustStrip'), { ssr: false, loading: BlockLoading })
  
  // Over-ons page components
  if (blockType === 'Over-ons-CTASection') return dynamic(() => import('@/components/sections/over-ons/CTASection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-CoreValuesSection') return dynamic(() => import('@/components/sections/over-ons/CoreValuesSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-CultureSection') return dynamic(() => import('@/components/sections/over-ons/CultureSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-HeroSection') return dynamic(() => import('@/components/sections/over-ons/HeroSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-MissionSection') return dynamic(() => import('@/components/sections/over-ons/MissionSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-OfficeSection') return dynamic(() => import('@/components/sections/over-ons/OfficeSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-PartnershipsSection') return dynamic(() => import('@/components/sections/over-ons/PartnershipsSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-TeamSection') return dynamic(() => import('@/components/sections/over-ons/TeamSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-TimelineSection') return dynamic(() => import('@/components/sections/over-ons/TimelineSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Over-ons-TrustStripSection') return dynamic(() => import('@/components/sections/over-ons/TrustStripSection'), { ssr: false, loading: BlockLoading })
  
  // Projectontwikkelaars page components
  if (blockType === 'Projectontwikkelaars-BewezenAanpakSection') return dynamic(() => import('@/components/sections/projectontwikkelaars/BewezenAanpakSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-DubaiSuccessStorySection') return dynamic(() => import('@/components/sections/projectontwikkelaars/DubaiSuccessStorySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-FAQSection') return dynamic(() => import('@/components/sections/projectontwikkelaars/FAQSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-Hero') return dynamic(() => import('@/components/sections/projectontwikkelaars/Hero'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-MethodologySection') return dynamic(() => import('@/components/sections/projectontwikkelaars/MethodologySection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-PainPointsSection') return dynamic(() => import('@/components/sections/projectontwikkelaars/PainPointsSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-ResultatenBentoGrid') return dynamic(() => import('@/components/sections/projectontwikkelaars/ResultatenBentoGrid'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-StrategieSessionCTA') return dynamic(() => import('@/components/sections/projectontwikkelaars/StrategieSessionCTA'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-TrustStrip') return dynamic(() => import('@/components/sections/projectontwikkelaars/TrustStrip'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-VoorWieIsDitSection') return dynamic(() => import('@/components/sections/projectontwikkelaars/VoorWieIsDitSection'), { ssr: false, loading: BlockLoading })
  if (blockType === 'Projectontwikkelaars-WatJeKrijgtSection') return dynamic(() => import('@/components/sections/projectontwikkelaars/WatJeKrijgtSection'), { ssr: false, loading: BlockLoading })
  
  return null
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order)

  return (
    <>
      {sortedBlocks.map((block) => {
        const Component = componentLoader(block.type)
        
        if (!Component) {
          return (
            <div key={block.id} className="p-8 bg-red-50 border border-red-200 rounded">
              <p className="text-red-600">Unknown block type: {block.type}</p>
            </div>
          )
        }

        return <Component key={block.id} {...(block.props || {})} />
      })}
    </>
  )
}
