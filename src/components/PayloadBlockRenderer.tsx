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
import TargetGroupsOverview, { TargetGroupsOverviewPhotos } from '@/components/sections/home/TargetGroupsOverview'
import NumbersSection from '@/components/sections/home/NumbersSection'
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee'
import FAQSection from '@/components/sections/home/FAQSection'
import HowItWorksSection from '@/components/sections/home/HowItWorksSection'
import FinalCTA from '@/components/sections/home/FinalCTA'

// Over-ons blocks
import OverOnsHeroSection from '@/components/sections/over-ons/HeroSection'
import OverOnsTrustStripSection from '@/components/sections/over-ons/TrustStripSection'
import OverOnsMissionSection from '@/components/sections/over-ons/MissionSection'
import OverOnsTimelineSection from '@/components/sections/over-ons/TimelineSection'
import OverOnsTeamSection from '@/components/sections/over-ons/TeamSection'
import OverOnsCoreValuesSection from '@/components/sections/over-ons/CoreValuesSection'
import OverOnsPartnershipsSection from '@/components/sections/over-ons/PartnershipsSection'
import OverOnsCultureSection from '@/components/sections/over-ons/CultureSection'
import OverOnsOfficeSection from '@/components/sections/over-ons/OfficeSection'
import OverOnsCTASection from '@/components/sections/over-ons/CTASection'

// Cases blocks
import CasesHero from '@/components/sections/cases/Hero'
import CasesBestVariants from '@/components/sections/cases/BestVariants'
import CasesVideoTestimonials from '@/components/sections/cases/VideoTestimonials'
import CasesMasonry from '@/components/sections/cases/Masonry'
import CasesProjectsShowcase from '@/components/sections/cases/ProjectsShowcase'
import CasesIndustryBreakdown from '@/components/sections/cases/IndustryBreakdown'
import CasesProcessShowcase from '@/components/sections/cases/ProcessShowcase'
import CasesStartYourStory from '@/components/sections/cases/StartYourStory'

// Makelaars blocks
import MakelaarsHero from '@/components/sections/makelaars/Hero'
import MakelaarsTrustStrip from '@/components/sections/makelaars/TrustStrip'
import MakelaarsProblemSection from '@/components/sections/makelaars/ProblemSection'
import MakelaarsMethodologySection from '@/components/sections/makelaars/MethodologySection'
import MakelaarsBewezenSysteemSection from '@/components/sections/makelaars/BewezenSysteemSection'
import MakelaarsResultsBentoGrid from '@/components/sections/makelaars/ResultsBentoGrid'
import MakelaarsGuaranteesSection from '@/components/sections/makelaars/GuaranteesSection'
import MakelaarsWhatYouGetSection from '@/components/sections/makelaars/WhatYouGetSection'
import MakelaarsForWhoIsThisSection from '@/components/sections/makelaars/ForWhoIsThisSection'
import MakelaarsStrategieSessionCTA from '@/components/sections/makelaars/StrategieSessionCTA'
import MakelaarsFAQSection from '@/components/sections/makelaars/FAQSection'

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
            imageSrc={block.imageSrc || block.image?.url || null}
            imageAlt={block.imageAlt || block.image?.alt || ''}
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
              imageSrc: feature.imageSrc || feature.image?.url || null
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
        
      case 'targetGroupsOverviewPhotos':
        return (
          <TargetGroupsOverviewPhotos
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            items={block.items?.map((item: any) => ({
              ...item,
              img: item.img || item.image?.url || null,
              alt: item.alt || item.name,
            })) || []}
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
              imageSrc: testimonial.imageSrc || testimonial.companyLogo?.url || null,
              badges: testimonial.badges?.map((badge: any) => badge.text || badge) || [],
              author: {
                ...testimonial.author,
                avatar: testimonial.author?.avatar || testimonial.author?.avatar?.url || null
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
        
      // Over-ons blocks
      case 'overOnsHeroSection':
        return (
          <OverOnsHeroSection
            key={index}
            badge={block.badge}
            title={block.title}
            highlightedWord={block.highlightedWord}
            subtitle={block.subtitle}
            description={block.description}
            image={block.image}
            imageAlt={block.imageAlt}
            stats={block.stats}
          />
        )
        
      case 'overOnsTrustStripSection':
        return (
          <OverOnsTrustStripSection
            key={index}
            items={block.items?.map((item: any) => item.text || item) || []}
          />
        )
        
      case 'overOnsMissionSection':
        return (
          <OverOnsMissionSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            cards={block.cards}
            tagline={block.tagline}
          />
        )
        
      case 'overOnsTimelineSection':
        return (
          <OverOnsTimelineSection
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            items={block.items?.map((item: any) => ({
              ...item,
              bullets: item.bullets?.map((b: any) => b.text || b) || []
            })) || []}
          />
        )
        
      case 'overOnsTeamSection':
        return (
          <OverOnsTeamSection
            key={index}
            badge={block.badge}
            title={block.title}
            members={block.members}
          />
        )
        
      case 'overOnsCoreValuesSection':
        return (
          <OverOnsCoreValuesSection
            key={index}
            badge={block.badge}
            title={block.title}
            highlightedWord={block.highlightedWord}
            subtitle={block.subtitle}
            values={block.values}
          />
        )
        
      case 'overOnsPartnershipsSection':
        return (
          <OverOnsPartnershipsSection
            key={index}
            badge={block.badge}
            title={block.title}
            partnerships={block.partnerships?.map((p: any) => ({
              ...p,
              features: p.features?.map((f: any) => f.text || f) || []
            })) || []}
            quote={block.quote}
            quoteAuthor={block.quoteAuthor}
            featuresLabel={block.featuresLabel}
          />
        )
        
      case 'overOnsCultureSection':
        return (
          <OverOnsCultureSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            comparisonRows={block.comparisonRows}
            testimonial={block.testimonial}
            tableHeaderAspect={block.tableHeaderAspect}
            tableHeaderOthers={block.tableHeaderOthers}
            tableHeaderRealAccelerate={block.tableHeaderRealAccelerate}
            testimonialLabel={block.testimonialLabel}
          />
        )
        
      case 'overOnsOfficeSection':
        return (
          <OverOnsOfficeSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            latitude={block.latitude}
            longitude={block.longitude}
            address={block.address}
            phone={block.phone}
            email={block.email}
            image={block.image}
            imageAlt={block.imageAlt}
            openInMapsLabel={block.openInMapsLabel}
            locationBadge={block.locationBadge}
            addressHeading={block.addressHeading}
          />
        )
        
      case 'overOnsCTASection':
        return (
          <OverOnsCTASection
            key={index}
            title={block.title}
            highlightedWord={block.highlightedWord}
            subtitle={block.subtitle}
            benefits={block.benefits?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
            ctaSubtext={block.ctaSubtext}
          />
        )
        
      // Cases blocks
      case 'casesHero':
        return (
          <CasesHero
            key={index}
            badge={block.badge}
            title={block.title}
            titleHighlight={block.titleHighlight}
            subtitle={block.subtitle}
            ctaPrimary={block.ctaPrimary}
            ctaSecondary={block.ctaSecondary}
            ctaSecondaryHref={block.ctaSecondaryHref}
            stats={block.stats}
            image={block.image}
            imageAlt={block.imageAlt}
          />
        )
        
      case 'casesBestVariants':
        return (
          <CasesBestVariants
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            featuredBadge={block.featuredBadge}
            featuredCompany={block.featuredCompany}
            featuredSubtitle={block.featuredSubtitle}
            featuredImage={block.featuredImage}
            featuredImageAlt={block.featuredImageAlt}
            stats={block.stats}
            results={block.results}
            otherCases={block.otherCases?.map((c: any) => ({
              ...c,
              bullets: c.bullets?.map((b: any) => b.item || b) || []
            })) || []}
          />
        )
        
      case 'casesVideoTestimonials':
        return (
          <CasesVideoTestimonials
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            durationBadge={block.durationBadge}
            activeIndicator={block.activeIndicator}
            sidebarHeader={block.sidebarHeader}
            videos={block.videos}
          />
        )
        
      case 'casesMasonry':
        return (
          <CasesMasonry
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            filterAllLabel={block.filterAllLabel}
            resultLabel={block.resultLabel}
            categories={block.categories}
            stories={block.stories}
          />
        )
        
      case 'casesProjectsShowcase':
        return (
          <CasesProjectsShowcase
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
          />
        )
        
      case 'casesIndustryBreakdown':
        return (
          <CasesIndustryBreakdown
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            chatHeader={block.chatHeader}
            chatStatus={block.chatStatus}
            messages={block.messages}
            inputPlaceholder={block.inputPlaceholder}
            indicator1={block.indicator1}
            indicator2={block.indicator2}
            indicator3={block.indicator3}
            footerText={block.footerText}
            footerAttribution={block.footerAttribution}
          />
        )
        
      case 'casesProcessShowcase':
        return (
          <CasesProcessShowcase
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps?.map((step: any) => ({
              ...step,
              items: step.items?.map((item: any) => item.text || item) || []
            })) || []}
          />
        )
        
      case 'casesStartYourStory':
        return (
          <CasesStartYourStory
            key={index}
            badge={block.badge}
            title={block.title}
            titleHighlight={block.titleHighlight}
            benefits={block.benefits?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
            ctaSubtext={block.ctaSubtext}
            ctaFootnote={block.ctaFootnote}
          />
        )
      
      // Makelaars blocks
      case 'makelaarsHero':
        return <MakelaarsHero key={index} {...block} />
        
      case 'makelaarsTrustStrip':
        return (
          <MakelaarsTrustStrip
            key={index}
            trustItems={block.trustItems?.map((item: any) => item.text || item) || []}
          />
        )
        
      case 'makelaarsProblemSection':
        return <MakelaarsProblemSection key={index} {...block} />
        
      case 'makelaarsMethodologySection':
        return <MakelaarsMethodologySection key={index} {...block} />
        
      case 'makelaarsBewezenSysteemSection':
        return <MakelaarsBewezenSysteemSection key={index} {...block} />
        
      case 'makelaarsResultsBentoGrid':
        return <MakelaarsResultsBentoGrid key={index} {...block} />
        
      case 'makelaarsGuaranteesSection':
        return (
          <MakelaarsGuaranteesSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            cards={block.cards?.map((card: any) => ({
              ...card,
              items: card.items?.map((item: any) => item.text || item) || []
            })) || []}
          />
        )
        
      case 'makelaarsWhatYouGetSection':
        return (
          <MakelaarsWhatYouGetSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            services={block.services?.map((s: any) => s.text || s) || []}
            bonusTitle={block.bonusTitle}
            bonusDescription={block.bonusDescription}
          />
        )
        
      case 'makelaarsForWhoIsThisSection':
        return (
          <MakelaarsForWhoIsThisSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            perfectFor={block.perfectFor?.map((item: any) => item.text || item) || []}
            notForTitle={block.notForTitle}
            notFor={block.notFor?.map((item: any) => item.text || item) || []}
            bottomInsight={block.bottomInsight}
          />
        )
        
      case 'makelaarsStrategieSessionCTA':
        return (
          <MakelaarsStrategieSessionCTA
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            benefits={block.benefits?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
            ctaSubtext={block.ctaSubtext}
            ctaHref={block.ctaHref}
          />
        )
        
      case 'makelaarsFAQSection':
        return <MakelaarsFAQSection key={index} {...block} />
        
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
