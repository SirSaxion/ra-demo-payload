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

// International/Buitenland blocks
import MakelaarsInternationalHero from '@/components/sections/makelaars-buitenland/MakelaarsInternationalHero'
import MakelaarsInternationalTrustStrip from '@/components/sections/makelaars-buitenland/MakelaarsInternationalTrustStrip'
import InternationalPainPointsSection from '@/components/sections/makelaars-buitenland/InternationalPainPointsSection'
import InternationalMethodologySection from '@/components/sections/makelaars-buitenland/InternationalMethodologySection'
import InternationalCasesSection from '@/components/sections/makelaars-buitenland/InternationalCasesSection'
import InternationalGlobeSection from '@/components/sections/makelaars-buitenland/InternationalGlobeSection'
import InternationalWhatYouGetSection from '@/components/sections/makelaars-buitenland/InternationalWhatYouGetSection'
import InternationalForWhoIsThisSection from '@/components/sections/makelaars-buitenland/InternationalForWhoIsThisSection'
import InternationalStrategySessionCTA from '@/components/sections/makelaars-buitenland/InternationalStrategySessionCTA'
import InternationalFAQSection from '@/components/sections/makelaars-buitenland/InternationalFAQSection'

// Hypotheekadviseurs blocks
import HypotheekadviseursHero from '@/components/sections/hypotheekadviseurs/Hero'
import HypotheekadviseursTrustStrip from '@/components/sections/hypotheekadviseurs/TrustStrip'
import HypotheekadviseursPainPointsSection from '@/components/sections/hypotheekadviseurs/PainPointsSection'
import HypotheekadviseursEditBVPartnershipSection from '@/components/sections/hypotheekadviseurs/EditBVPartnershipSection'
import HypotheekadviseursMethodologySection from '@/components/sections/hypotheekadviseurs/MethodologySection'
import HypotheekadviseursVoorWieIsDitSection from '@/components/sections/hypotheekadviseurs/VoorWieIsDitSection'
import HypotheekadviseursBewezenResultatenSection from '@/components/sections/hypotheekadviseurs/BewezenResultatenSection'
import HypotheekadviseursWatJeKrijgtSection from '@/components/sections/hypotheekadviseurs/WatJeKrijgtSection'
import HypotheekadviseursBewezenAanpakSection from '@/components/sections/hypotheekadviseurs/BewezenAanpakSection'
import HypotheekadviseursStrategieSessionCTA from '@/components/sections/hypotheekadviseurs/StrategieSessionCTA'
import HypotheekadviseursFAQSection from '@/components/sections/hypotheekadviseurs/FAQSection'

// Projectontwikkelaars blocks
import ProjectontwikkelaarsHero from '@/components/sections/projectontwikkelaars/Hero'
import ProjectontwikkelaarsTrustStrip from '@/components/sections/projectontwikkelaars/TrustStrip'
import ProjectontwikkelaarsPainPointsSection from '@/components/sections/projectontwikkelaars/PainPointsSection'
import ProjectontwikkelaarsMethodologySection from '@/components/sections/projectontwikkelaars/MethodologySection'
import ProjectontwikkelaarsBewezenAanpakSection from '@/components/sections/projectontwikkelaars/BewezenAanpakSection'
import ProjectontwikkelaarsResultatenBentoGrid from '@/components/sections/projectontwikkelaars/ResultatenBentoGrid'
import ProjectontwikkelaarsDubaiSuccessStorySection from '@/components/sections/projectontwikkelaars/DubaiSuccessStorySection'
import ProjectontwikkelaarsWatJeKrijgtSection from '@/components/sections/projectontwikkelaars/WatJeKrijgtSection'
import ProjectontwikkelaarsVoorWieIsDitSection from '@/components/sections/projectontwikkelaars/VoorWieIsDitSection'
import ProjectontwikkelaarsStrategieSessionCTA from '@/components/sections/projectontwikkelaars/StrategieSessionCTA'
import ProjectontwikkelaarsFAQSection from '@/components/sections/projectontwikkelaars/FAQSection'

// HR Recruitment blocks
import HrRecruitmentHeroSection from '@/components/sections/hr-recruitment/HeroSection'
import HrRecruitmentTrustStripSection from '@/components/sections/hr-recruitment/TrustStripSection'
import HrRecruitmentPainPointsSection from '@/components/sections/hr-recruitment/PainPointsSection'
import HrRecruitmentTransformationSection from '@/components/sections/hr-recruitment/TransformationSection'
import HrRecruitmentMethodologySection from '@/components/sections/hr-recruitment/MethodologySection'
import HrRecruitmentResultatenBentoGrid from '@/components/sections/hr-recruitment/ResultatenBentoGrid'
import HrRecruitmentWatJeKrijgtSection from '@/components/sections/hr-recruitment/WatJeKrijgtSection'
import HrRecruitmentVoorWieIsDitSection from '@/components/sections/hr-recruitment/VoorWieIsDitSection'
import HrRecruitmentStrategieSessionCTA from '@/components/sections/hr-recruitment/StrategieSessionCTA'
import HrRecruitmentFAQSection from '@/components/sections/hr-recruitment/FAQSection'

interface PayloadBlockRendererProps {
  blocks: any[]
  siteSettings?: any
}

export default function PayloadBlockRenderer({ blocks, siteSettings }: PayloadBlockRendererProps) {
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
            kicker={block.kicker}
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
            phone={siteSettings?.phone}
            phoneLink={siteSettings?.phoneLink}
          />
        )
        
      case 'howItWorksSection':
        return (
          <HowItWorksSection
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps?.map((step: any, idx: number) => ({
              id: idx + 1,
              title: step.title,
              subtitle: step.subtitle,
              icon: step.icon,
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
            phone={siteSettings?.phone}
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
            address={block.address || siteSettings?.address}
            phone={block.phone || siteSettings?.phone}
            email={block.email || siteSettings?.email}
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
        return <MakelaarsFAQSection key={index} {...block} phoneNumber={block.phoneNumber || siteSettings?.phone} phoneLink={siteSettings?.phoneLink} />
      
      // International/Buitenland blocks
      case 'makelaarsInternationalHero':
        return <MakelaarsInternationalHero key={index} {...block} />
        
      case 'makelaarsInternationalTrustStrip':
        return (
          <MakelaarsInternationalTrustStrip
            key={index}
            trustItems={block.trustItems?.map((item: any) => item.text || item) || []}
          />
        )
        
      case 'internationalPainPointsSection':
        return <InternationalPainPointsSection key={index} {...block} />
        
      case 'internationalMethodologySection':
        return <InternationalMethodologySection key={index} {...block} />
        
      case 'internationalCasesSection':
        return <InternationalCasesSection key={index} {...block} />
        
      case 'internationalGlobeSection':
        return <InternationalGlobeSection key={index} {...block} />
        
      case 'internationalWhatYouGetSection':
        return (
          <InternationalWhatYouGetSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            services={block.services?.map((s: any) => s.text || s) || []}
            guaranteesTitle={block.guaranteesTitle}
            guarantees={block.guarantees?.map((g: any) => ({
              ...g,
              items: g.items?.map((item: any) => item.text || item) || []
            })) || []}
            bonusIcon={block.bonusIcon}
            bonusTitle={block.bonusTitle}
            bonusDescription={block.bonusDescription}
            bonusItems={block.bonusItems?.map((item: any) => item.text || item) || []}
          />
        )
        
      case 'internationalForWhoIsThisSection':
        return (
          <InternationalForWhoIsThisSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            perfectForTitle={block.perfectForTitle}
            perfectForItems={block.perfectForItems || []}
            notForTitle={block.notForTitle}
            notForItems={block.notForItems?.map((item: any) => item.text || item) || []}
            bottomInsightIcon={block.bottomInsightIcon}
            bottomInsightText={block.bottomInsightText}
          />
        )
        
      case 'internationalStrategySessionCTA':
        return (
          <InternationalStrategySessionCTA
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            benefits={block.benefits?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
            ctaFooter={block.ctaSubtext}
          />
        )
        
      case 'internationalFAQSection':
        return <InternationalFAQSection key={index} {...block} phoneNumber={block.phoneNumber || siteSettings?.phone} phoneLink={siteSettings?.phoneLink} />
      
      // Hypotheekadviseurs blocks
      case 'hypotheekadviseursHero':
        return (
          <HypotheekadviseursHero
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            ctaPrimary={block.ctaPrimary}
            ctaSecondary={block.ctaSecondary}
            editBVImage={block.editBVImage}
            editBVTitle={block.editBVTitle}
            editBVSubtitle={block.editBVSubtitle}
            editBVStats={block.editBVStats?.map((stat: any) => ({
              icon: stat.icon,
              text: stat.text
            })) || []}
            floatingStat={block.floatingStat}
            quote={block.quote}
            usps={block.usps?.map((usp: any) => ({
              text: usp.text
            })) || []}
          />
        )
        
      case 'hypotheekadviseursTrustStrip':
        return (
          <HypotheekadviseursTrustStrip
            key={index}
            trustItems={block.trustItems?.map((item: any) => item.text || item) || []}
          />
        )
        
      case 'hypotheekadviseursPainPointsSection':
        return (
          <HypotheekadviseursPainPointsSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            challenges={block.challenges?.map((c: any) => ({
              icon: c.icon,
              title: c.title,
              description: c.description
            })) || []}
            ctaIcon={block.ctaIcon}
            ctaTitle={block.ctaTitle}
            ctaDescription={block.ctaDescription}
          />
        )
        
      case 'hypotheekadviseursEditBVPartnershipSection':
        return (
          <HypotheekadviseursEditBVPartnershipSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            benefits={block.benefits?.map((b: any) => ({
              icon: b.icon,
              text: b.text
            })) || []}
            oldWayTitle={block.oldWayTitle}
            oldWaySubtitle={block.oldWaySubtitle}
            oldWayItems={block.oldWayItems || []}
            transformLabel={block.transformLabel}
            newWayTitle={block.newWayTitle}
            newWaySubtitle={block.newWaySubtitle}
            newWayItems={block.newWayItems || []}
            bottomInsight={block.bottomInsight}
          />
        )
        
      case 'hypotheekadviseursMethodologySection':
        return (
          <HypotheekadviseursMethodologySection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps?.map((s: any) => ({
              number: s.number,
              icon: s.icon,
              title: s.title,
              description: s.description
            })) || []}
          />
        )
        
      case 'hypotheekadviseursVoorWieIsDitSection':
        return (
          <HypotheekadviseursVoorWieIsDitSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            perfectForTitle={block.perfectForTitle}
            perfectForItems={block.perfectForItems?.map((i: any) => ({
              icon: i.icon,
              title: i.title,
              description: i.description
            })) || []}
            notForTitle={block.notForTitle}
            notForItems={block.notForItems?.map((i: any) => i.text || i) || []}
            bottomInsightText={block.bottomInsightText}
          />
        )
        
      case 'hypotheekadviseursBewezenResultatenSection':
        return (
          <HypotheekadviseursBewezenResultatenSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            kpis={block.kpis?.map((kpi: any) => ({
              label: kpi.label,
              from: kpi.from,
              to: kpi.to,
              unit: kpi.unit,
              sublabel: kpi.sublabel,
              span: kpi.span
            })) || []}
            bullets={block.bullets?.map((bullet: any) => bullet.text) || []}
          />
        )
        
      case 'hypotheekadviseursWatJeKrijgtSection':
        return (
          <HypotheekadviseursWatJeKrijgtSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            services={block.services?.map((s: any) => ({
              icon: s.icon,
              title: s.title,
              description: s.description,
              items: s.items?.map((i: any) => i.text || i) || []
            })) || []}
            supportTitle={block.supportTitle}
            supportSubtitle={block.supportSubtitle}
            supportItems={block.supportItems?.map((i: any) => ({
              icon: i.icon,
              title: i.title,
              description: i.description
            })) || []}
            bonusIcon={block.bonusIcon}
            bonusTitle={block.bonusTitle}
            bonusDescription={block.bonusDescription}
            bonusItems={block.bonusItems?.map((i: any) => i.text || i) || []}
          />
        )
        
      case 'hypotheekadviseursBewezenAanpakSection':
        return (
          <HypotheekadviseursBewezenAanpakSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            visualTitle={block.visualTitle}
            visualDescription={block.visualDescription}
            detailsTitle={block.detailsTitle}
            points={block.points?.map((p: any) => ({
              icon: p.icon,
              title: p.title,
              description: p.description
            })) || []}
            quote={block.quote}
          />
        )
        
      case 'hypotheekadviseursStrategieSessionCTA':
        return (
          <HypotheekadviseursStrategieSessionCTA
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            benefits={block.benefits?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
          />
        )
        
      case 'hypotheekadviseursFAQSection':
        return (
          <HypotheekadviseursFAQSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            contactLinkText={block.contactLinkText}
            contactLinkHref={block.contactLinkHref}
            phoneLabel={block.phoneLabel}
            phoneNumber={block.phoneNumber || siteSettings?.phone}
            phoneLink={siteSettings?.phoneLink}
            faqs={block.faqs?.map((f: any) => ({
              icon: f.icon,
              question: f.question,
              answer: f.answer
            })) || []}
          />
        )

      // Projectontwikkelaars blocks
      case 'projectontwikkelaarsHero':
        return (
          <ProjectontwikkelaarsHero
            key={index}
            badge={block.badge}
            title={block.title}
            titleHighlight={block.titleHighlight}
            subtitle={block.subtitle}
            bullets={block.bullets?.map((b: any) => b.text || b) || []}
            ctaPrimary={block.ctaPrimary}
            ctaSecondary={block.ctaSecondary}
            showcaseImage={block.showcaseImage}
            showcaseImageAlt={block.showcaseImageAlt}
            showcaseIcon={block.showcaseIcon}
            showcaseTitle={block.showcaseTitle}
            showcaseSubtitle={block.showcaseSubtitle}
            showcaseStats={block.showcaseStats || []}
            floatingStat={block.floatingStat}
            showcaseNote={block.showcaseNote}
          />
        )

      case 'projectontwikkelaarsTrustStrip':
        return (
          <ProjectontwikkelaarsTrustStrip
            key={index}
            trustItems={block.trustItems?.map((t: any) => t.text || t) || []}
          />
        )

      case 'projectontwikkelaarsPainPointsSection':
        return (
          <ProjectontwikkelaarsPainPointsSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            challenges={block.challenges || []}
            ctaIcon={block.ctaIcon}
            ctaTitle={block.ctaTitle}
            ctaDescription={block.ctaDescription}
          />
        )

      case 'projectontwikkelaarsMethodologySection':
        return (
          <ProjectontwikkelaarsMethodologySection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps || []}
            bottomText={block.bottomText}
          />
        )

      case 'projectontwikkelaarsBewezenAanpakSection':
        return (
          <ProjectontwikkelaarsBewezenAanpakSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            image={block.image}
            imageAlt={block.imageAlt}
            practiceTitle={block.practiceTitle}
            practicePoints={block.practicePoints || []}
            missionStatement={block.missionStatement}
          />
        )

      case 'projectontwikkelaarsResultatenBentoGrid':
        return (
          <ProjectontwikkelaarsResultatenBentoGrid
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
          />
        )

      case 'projectontwikkelaarsDubaiSuccessStorySection':
        return (
          <ProjectontwikkelaarsDubaiSuccessStorySection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            benefits={block.benefits || []}
          />
        )

      case 'projectontwikkelaarsWatJeKrijgtSection':
        return (
          <ProjectontwikkelaarsWatJeKrijgtSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            tabs={block.tabs}
          />
        )

      case 'projectontwikkelaarsVoorWieIsDitSection':
        return (
          <ProjectontwikkelaarsVoorWieIsDitSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            perfectTitle={block.perfectTitle}
            perfectFor={block.perfectFor || []}
            notSuitableTitle={block.notSuitableTitle}
            notSuitableFor={block.notSuitableFor || []}
            bottomText={block.bottomText}
          />
        )

      case 'projectontwikkelaarsStrategieSessionCTA':
        return (
          <ProjectontwikkelaarsStrategieSessionCTA
            key={index}
            title={block.title}
            titleHighlight={block.titleHighlight}
            subtitle={block.subtitle}
            bullets={block.bullets?.map((b: any) => b.text || b) || []}
            ctaLabel={block.ctaLabel}
            ctaSubtext={block.ctaSubtext}
          />
        )

      case 'projectontwikkelaarsFAQSection':
        return (
          <ProjectontwikkelaarsFAQSection
            key={index}
            kicker={block.kicker}
            title={block.title}
            subtitle={block.subtitle}
            contactLinkText={block.contactLinkText}
            contactLinkHref={block.contactLinkHref}
            contactCtaText={block.contactCtaText}
            phoneLabel={block.phoneLabel}
            phoneNumber={block.phoneNumber || siteSettings?.phone}
            phoneCallText={block.phoneCallText}
            questions={block.questions}
          />
        )

      // HR Recruitment blocks
      case 'hrRecruitmentHero':
        return (
          <HrRecruitmentHeroSection
            key={index}
            badge={block.badge}
            titleBefore={block.titleBefore}
            titleHighlight={block.titleHighlight}
            subtitle={block.subtitle}
          />
        )

      case 'hrRecruitmentTrustStrip':
        return (
          <HrRecruitmentTrustStripSection
            key={index}
            items={block.items?.map((item: any) => item.text || item) || []}
            ariaLabel={block.ariaLabel}
          />
        )

      case 'hrRecruitmentPainPoints':
        return (
          <HrRecruitmentPainPointsSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            painPoints={block.painPoints || []}
            bottomText={block.bottomText}
          />
        )

      case 'hrRecruitmentTransformation':
        return (
          <HrRecruitmentTransformationSection
            key={index}
            badge={block.badge}
            title={block.title}
            oldWayTitle={block.oldWayTitle}
            oldWaySubtitle={block.oldWaySubtitle}
            oldWayItems={block.oldWayItems || []}
            newWayTitle={block.newWayTitle}
            newWaySubtitle={block.newWaySubtitle}
            newWayItems={block.newWayItems || []}
          />
        )

      case 'hrRecruitmentMethodology':
        return (
          <HrRecruitmentMethodologySection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            steps={block.steps || []}
            bottomText={block.bottomText}
          />
        )

      case 'hrRecruitmentResultatenBentoGrid':
        return (
          <HrRecruitmentResultatenBentoGrid
            key={index}
            badge={block.badge}
            title={block.title}
            results={block.results || []}
          />
        )

      case 'hrRecruitmentWatJeKrijgt':
        return (
          <HrRecruitmentWatJeKrijgtSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            features={block.features || []}
            bonusTitle={block.bonusTitle}
            bonusItems={block.bonusItems || []}
          />
        )

      case 'hrRecruitmentVoorWieIsDit':
        return (
          <HrRecruitmentVoorWieIsDitSection
            key={index}
            badge={block.badge}
            title={block.title}
            perfectForTitle={block.perfectForTitle}
            perfectForItems={block.perfectForItems || []}
            notSuitableTitle={block.notSuitableTitle}
            notSuitableItems={block.notSuitableItems || []}
          />
        )

      case 'hrRecruitmentStrategieSessionCTA':
        return (
          <HrRecruitmentStrategieSessionCTA
            key={index}
            title={block.title}
            subtitle={block.subtitle}
            ctaLabel={block.ctaLabel}
          />
        )

      case 'hrRecruitmentFAQ':
        return (
          <HrRecruitmentFAQSection
            key={index}
            badge={block.badge}
            title={block.title}
            subtitle={block.subtitle}
            faqs={block.faqs || []}
            contactText={block.contactText}
            phoneLabel={block.phoneLabel || siteSettings?.phone}
            phoneLink={siteSettings?.phoneLink}
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
