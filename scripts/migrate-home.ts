/**
 * Migration script: Import homepage data from old CMS to Payload
 * 
 * Usage: tsx scripts/migrate-home.ts
 */

import { getPayload } from 'payload'
import config from '../src/payload.config'

// Import the old homepage data
const oldHomeData = {
  "metadata": {
    "metaTitle": "Real Accelerate | Online marketing voor vastgoedprofessionals | Door experts, voor experts",
    "metaDescription": "Groei je vastgoedbedrijf met bewezen online marketing strategieën. Van 2 naar 8 werknemers in 18 maanden. Makelaar marketing, leadgeneratie en automatisering door vastgoedexperts."
  },
  "content": {
    "nl": {
      "blocks": [
        {
          "id": "hero_1",
          "type": "Home-HeroSection",
          "order": 0,
          "props": {
            "kicker": "Voor ambitieuze vastgoedprofessionals",
            "title": "Door vastgoedexperts, voor vastgoedexperts",
            "subtitle": "Vanuit onze eigen ervaring helpen wij jouw bedrijf groeien en projecten sneller verkopen met slimme online marketing.",
            "ctaPrimary": {
              "label": "Plan een bakkie ☕",
              "href": "mailto:info@realaccelerate.nl"
            },
            "ctaSecondary": {
              "label": "Bekijk cases",
              "href": "/cases"
            }
          }
        },
        {
          "id": "trust_strip_1",
          "type": "Home-TrustStrip",
          "order": 1,
          "props": {
            "items": [
              "IQI Global partner",
              "Recreatie",
              "Samen 30+ jaar marketing ervaring",
              "Wereldwijd actief",
              "Nieuwbouw",
              "Projecten",
              "Samen 40+ jaar vastgoed ervaring",
              "Makelaar",
              "Zelf actief in de vastgoedmarkt",
              "Wereldwijd netwerk"
            ],
            "ariaLabel": "Vertrouwen en ervaring"
          }
        }
        // ... more blocks will be added
      ]
    }
  },
  "slug": "/",
  "title": "Homepage",
  "status": "published"
}

async function migrateHomePage() {
  console.log('🚀 Starting homepage migration...')
  
  try {
    // Initialize Payload
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized')
    
    // Map old block types to new Payload block slugs
    const blockTypeMap: Record<string, string> = {
      'Home-HeroSection': 'heroSection',
      'Home-TrustStrip': 'trustStrip',
      'Home-ProblemSection': 'problemSection',
      'Home-CaseStudy': 'caseStudy',
      'Home-UniqueApproach': 'uniqueApproach',
      'Home-FlowConnector': 'flowConnector',
      'Home-MarketingMachine': 'marketingMachine',
      'Home-TargetGroupsOverview': 'targetGroupsOverview',
      'Home-TargetGroupsOverviewPhotos': 'targetGroupsOverview',
      'Home-NumbersSection': 'numbersSection',
      'Home-TestimonialsSection': 'testimonialsSection',
      'Home-FAQSection': 'faqSection',
      'Home-HowItWorksSection': 'howItWorksSection',
      'Home-FinalCTA': 'finalCTA',
    }
    
    // Transform old blocks to new format
    const transformedBlocks = oldHomeData.content.nl.blocks.map((block: any) => {
      const blockType = blockTypeMap[block.type]
      
      if (!blockType) {
        console.warn(`⚠️  Unknown block type: ${block.type}`)
        return null
      }
      
      // Transform props based on block type
      let transformedProps = { ...block.props }
      
      // Special handling for TrustStrip - convert array of strings to array of objects
      if (blockType === 'trustStrip' && Array.isArray(block.props.items)) {
        transformedProps.items = block.props.items.map((item: string) => ({ text: item }))
      }
      
      return {
        blockType,
        ...transformedProps
      }
    }).filter(Boolean)
    
    console.log(`📦 Transformed ${transformedBlocks.length} blocks`)
    
    // Check if homepage already exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/',
        },
      },
    })
    
    if (existing.docs.length > 0) {
      console.log('⚠️  Homepage already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          title: oldHomeData.title,
          slug: oldHomeData.slug,
          status: oldHomeData.status as 'published' | 'draft',
          blocks: transformedBlocks,
          seo: {
            metaTitle: oldHomeData.metadata.metaTitle,
            metaDescription: oldHomeData.metadata.metaDescription,
          },
        },
      })
      console.log('✅ Homepage updated successfully!')
    } else {
      // Create new homepage
      await payload.create({
        collection: 'pages',
        data: {
          title: oldHomeData.title,
          slug: oldHomeData.slug,
          status: oldHomeData.status as 'published' | 'draft',
          blocks: transformedBlocks,
          seo: {
            metaTitle: oldHomeData.metadata.metaTitle,
            metaDescription: oldHomeData.metadata.metaDescription,
          },
        },
      })
      console.log('✅ Homepage created successfully!')
    }
    
    console.log('\n🎉 Migration completed!')
    console.log('👉 Visit http://localhost:3000/admin to see your new homepage in Payload CMS')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateHomePage()
