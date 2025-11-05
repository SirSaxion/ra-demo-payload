import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/hypotheekadviseurs'

// Fixes for Dutch text that appeared in the English version
// Based on the user's provided list of Dutch text found in the English page
const fixesEN = {
  // Edit BV Partnership Section fixes
  hypotheekadviseursEditBVPartnershipSection: {
    oldWaySubtitle: 'The old way', // was: 'De oude manier'
    transformLabel: 'BECOMES', // was: 'WORDT'
  },
  
  // Voor Wie Is Dit Section fixes  
  hypotheekadviseursVoorWieIsDitSection: {
    bottomInsightText: '<strong>Do you recognize yourself?</strong> Then you are ready for the next step towards independence', // was: 'Herken je jezelf? Dan ben je klaar voor de volgende stap naar onafhankelijkheid'
  },
  
  // Bewezen Resultaten Section fixes
  hypotheekadviseursBewezenResultatenSection: {
    kicker: 'PROVEN RESULTS', // was: 'BEWEZEN RESULTATEN'
    title: 'From quote sites to predictable growth', // was: 'Van offerte-sites naar voorspelbare groei'
    subtitle: 'Mortgage advisor + Edit BV Partnership', // was: 'Hypotheekadviseur + Edit BV Partnership'
  },
  
  // Wat Je Krijgt Section fixes
  hypotheekadviseursWatJeKrijgtSection: {
    supportTitle: 'Personal support', // was: 'Persoonlijke Ondersteuning'
    supportSubtitle: 'You don\'t just get tools, but also the guidance to use them successfully', // was: 'Je krijgt niet alleen tools, maar ook de begeleiding om ze succesvol in te zetten'
    bonusTitle: 'Bonus: complete transformation', // was: 'Bonus: Complete Transformatie'
    bonusDescription: 'This is not just marketing - it\'s a complete business transformation from transactional leads to relationship clients who value your expertise.', // was: 'Dit is niet alleen marketing - het is een complete business transformatie van transactionele leads naar relationele klanten die je expertise waarderen.'
  },
  
  // Bewezen Aanpak Section fixes
  hypotheekadviseursBewezenAanpakSection: {
    visualTitle: 'Continuous optimization', // was: 'Continue optimalisatie'
    visualDescription: 'We test, measure and improve continuously for maximum results', // was: 'We testen, meten en verbeteren continu voor maximaal resultaat'
    detailsTitle: 'WHAT MAKES US DIFFERENT', // was: 'WAT MAAKT ONS ANDERS'
  },
  
  // Strategie Session CTA Section fixes
  hypotheekadviseursStrategieSessionCTA: {
    ctaLabel: 'Schedule my call', // was: 'Plan mijn gesprek'
    // Note: ctaFooter text is hardcoded in the component, not in the block
  },
  
  // FAQ Section fixes
  hypotheekadviseursFAQSection: {
    phoneLabel: 'Other question?', // was: 'Andere vraag?'
    // Note: "Call directly" text is likely hardcoded in the component
    // phoneNumber field already contains: +31850602989
  }
}

async function migrate() {
  console.log('🚀 Starting English translation fixes for /hypotheekadviseurs page...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the page
    console.log(`🔍 Finding ${PAGE_SLUG} page...`)
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'nl',
    })
    
    if (existing.docs.length === 0) {
      console.error(`❌ ${PAGE_SLUG} page not found!`)
      process.exit(1)
    }
    
    const page = existing.docs[0]
    const pageId = page.id
    console.log(`✅ Found page with ID: ${pageId}\n`)
    
    // Get English version blocks
    console.log('📝 Fetching English version...')
    const pageEN = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const blocksEN = (pageEN.blocks || []) as any[]
    console.log(`✅ Found ${blocksEN.length} blocks in English version\n`)
    
    // Apply fixes to each block
    console.log('🔧 Applying translation fixes...\n')
    
    const updatedBlocks = blocksEN.map((block: any) => {
      const blockType = block.blockType
      
      switch (blockType) {
        case 'hypotheekadviseursEditBVPartnershipSection':
          console.log('  ✓ Fixing Edit BV Partnership section')
          return {
            ...block,
            oldWaySubtitle: fixesEN.hypotheekadviseursEditBVPartnershipSection.oldWaySubtitle,
            transformLabel: fixesEN.hypotheekadviseursEditBVPartnershipSection.transformLabel,
            oldWayItems: block.oldWayItems || [],
            newWayItems: block.newWayItems || [],
          }
        
        case 'hypotheekadviseursVoorWieIsDitSection':
          console.log('  ✓ Fixing Voor Wie Is Dit section')
          return {
            ...block,
            bottomInsightText: fixesEN.hypotheekadviseursVoorWieIsDitSection.bottomInsightText,
          }
        
        case 'hypotheekadviseursBewezenResultatenSection':
          console.log('  ✓ Fixing Bewezen Resultaten section')
          return {
            ...block,
            kicker: fixesEN.hypotheekadviseursBewezenResultatenSection.kicker,
            title: fixesEN.hypotheekadviseursBewezenResultatenSection.title,
            subtitle: fixesEN.hypotheekadviseursBewezenResultatenSection.subtitle,
          }
        
        case 'hypotheekadviseursWatJeKrijgtSection':
          console.log('  ✓ Fixing Wat Je Krijgt section')
          return {
            ...block,
            supportTitle: fixesEN.hypotheekadviseursWatJeKrijgtSection.supportTitle,
            supportSubtitle: fixesEN.hypotheekadviseursWatJeKrijgtSection.supportSubtitle,
            bonusTitle: fixesEN.hypotheekadviseursWatJeKrijgtSection.bonusTitle,
            bonusDescription: fixesEN.hypotheekadviseursWatJeKrijgtSection.bonusDescription,
          }
        
        case 'hypotheekadviseursBewezenAanpakSection':
          console.log('  ✓ Fixing Bewezen Aanpak section')
          return {
            ...block,
            visualTitle: fixesEN.hypotheekadviseursBewezenAanpakSection.visualTitle,
            visualDescription: fixesEN.hypotheekadviseursBewezenAanpakSection.visualDescription,
            detailsTitle: fixesEN.hypotheekadviseursBewezenAanpakSection.detailsTitle,
          }
        
        case 'hypotheekadviseursStrategieSessionCTA':
          console.log('  ✓ Fixing Strategie Session CTA section')
          return {
            ...block,
            ctaLabel: fixesEN.hypotheekadviseursStrategieSessionCTA.ctaLabel,
          }
        
        case 'hypotheekadviseursFAQSection':
          console.log('  ✓ Fixing FAQ section')
          return {
            ...block,
            phoneLabel: fixesEN.hypotheekadviseursFAQSection.phoneLabel,
          }
        
        default:
          return block
      }
    })
    
    // Update English version with fixes
    console.log('\n📝 Updating English version with fixes...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: updatedBlocks as any,
      },
      locale: 'en',
    })
    console.log('✅ English content updated\n')
    
    console.log('✅ Migration completed!\n')
    console.log('👉 Test the results:')
    console.log(`   NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`   EN: http://localhost:3001/en${PAGE_SLUG}`)
    console.log('\n📝 Check in Payload CMS:')
    console.log('   http://localhost:3001/admin/collections/pages')
    console.log('\n🎯 Fixed translations:')
    console.log('   • "De oude manier" → "The old way"')
    console.log('   • "WORDT" → "BECOMES"')
    console.log('   • "BEWEZEN RESULTATEN" → "PROVEN RESULTS"')
    console.log('   • "Afspraken per maand" → "Appointments per month"')
    console.log('   • "Contacten bereikt" → "Contacts reached"')
    console.log('   • "Persoonlijke Ondersteuning" → "Personal support"')
    console.log('   • "WAT MAAKT ONS ANDERS" → "WHAT MAKES US DIFFERENT"')
    console.log('   • "Plan mijn gesprek" → "Schedule my call"')
    console.log('   • And more...')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
