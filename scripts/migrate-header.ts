/**
 * Header Global Migration
 * Migrates header/navbar content to Payload CMS with NL + EN support
 * 
 * Run with: pnpm tsx scripts/migrate-header.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const headerData = {
  nl: {
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'Over ons', href: '/over-ons' },
      { name: 'Contact', href: '/contact' },
    ],
    targetGroups: [
      {
        name: 'Makelaars',
        href: '/makelaars',
        icon: 'Building2' as const,
        description: 'Volledige funnel: van kwalitatieve leads tot afspraken die wél doorgaan. Ontworpen voor lokale en regionale makelaars.',
        highlights: [
          { text: 'Consistente instroom van bezichtigingen' },
          { text: 'Meetbare ROI en transparante rapportage' },
          { text: 'Integratie met je huidige tools' },
        ],
      },
      {
        name: 'Buitenland / IQI',
        href: '/makelaars-buitenland',
        icon: 'Globe2' as const,
        description: 'Internationale campagnes met schaal: multi-market targeting, meertalige funnels en cross-border performance.',
        highlights: [
          { text: 'Schaalbaar naar meerdere regio\'s' },
          { text: 'Lead kwalificatie op maat' },
          { text: 'Team en tooling voor snelheid' },
        ],
      },
      {
        name: 'Hypotheekadviseurs',
        href: '/hypotheekadviseurs',
        icon: 'PiggyBank' as const,
        description: 'Gerichte aanvragen van starters, doorstromers en ondernemers. Slimme pre-kwalificatie voor minder no-shows.',
        highlights: [
          { text: 'Betere show-rate bij afspraken' },
          { text: 'Heldere intake vóór het gesprek' },
          { text: 'Sterke lokale positionering' },
        ],
      },
      {
        name: 'Projectontwikkelaars',
        href: '/projectontwikkelaars',
        icon: 'Factory' as const,
        description: 'Lanceringen met impact: leadgeneratie voor nieuwbouwprojecten met focus op snelheid en verkooptempo.',
        highlights: [
          { text: 'Snelle validatie van propositie' },
          { text: 'Datagedreven marketingmix' },
          { text: 'Content en ads volledig verzorgd' },
        ],
      },
      {
        name: 'HR & Recruitment',
        href: '/hr-recruitment',
        icon: 'Users' as const,
        description: 'Van reactief zoeken naar proactief aantrekken: bouw een talent pipeline die zorgt voor een constante stroom gekwalificeerde kandidaten.',
        highlights: [
          { text: '73% meer sollicitaties binnen 3 maanden' },
          { text: '3x sneller vacatures vullen' },
          { text: 'Sterk werkgeversmerk opbouwen' },
        ],
      },
    ],
  },
  en: {
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'About us', href: '/over-ons' },
      { name: 'Contact', href: '/contact' },
    ],
    targetGroups: [
      {
        name: 'Real estate agents',
        href: '/makelaars',
        icon: 'Building2' as const,
        description: 'Complete funnel: from qualified leads to appointments that actually happen. Designed for local and regional agents.',
        highlights: [
          { text: 'Consistent flow of viewings' },
          { text: 'Measurable ROI and transparent reporting' },
          { text: 'Integration with your current tools' },
        ],
      },
      {
        name: 'International / IQI',
        href: '/makelaars-buitenland',
        icon: 'Globe2' as const,
        description: 'International campaigns at scale: multi-market targeting, multilingual funnels and cross-border performance.',
        highlights: [
          { text: 'Scalable to multiple regions' },
          { text: 'Custom lead qualification' },
          { text: 'Team and tools for speed' },
        ],
      },
      {
        name: 'Mortgage advisors',
        href: '/hypotheekadviseurs',
        icon: 'PiggyBank' as const,
        description: 'Targeted requests from starters, movers and entrepreneurs. Smart pre-qualification for fewer no-shows.',
        highlights: [
          { text: 'Better show-rate at appointments' },
          { text: 'Clear intake before the meeting' },
          { text: 'Strong local positioning' },
        ],
      },
      {
        name: 'Real estate developers',
        href: '/projectontwikkelaars',
        icon: 'Factory' as const,
        description: 'High-impact launches: lead generation for new construction projects with focus on speed and sales tempo.',
        highlights: [
          { text: 'Fast proposition validation' },
          { text: 'Data-driven marketing mix' },
          { text: 'Content and ads fully managed' },
        ],
      },
      {
        name: 'HR & Recruitment',
        href: '/hr-recruitment',
        icon: 'Users' as const,
        description: 'From reactive searching to proactive attraction: build a talent pipeline that ensures a constant stream of qualified candidates.',
        highlights: [
          { text: '73% more applications within 3 months' },
          { text: 'Fill vacancies 3x faster' },
          { text: 'Build strong employer brand' },
        ],
      },
    ],
  },
}

async function migrate() {
  console.log('🚀 Starting Header global migration...\n')
  
  try {
    // Set defaults if not in environment
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Update NL locale
    console.log('🇳🇱 Updating Dutch header content...')
    await payload.updateGlobal({
      slug: 'header',
      locale: 'nl',
      data: {
        phone: '085 060 2989',
        phoneLink: 'tel:+31850602989',
        email: 'info@realaccelerate.nl',
        emailLink: 'mailto:info@realaccelerate.nl',
        mainLinks: headerData.nl.mainLinks,
        targetGroups: headerData.nl.targetGroups,
      },
    })
    console.log('✅ Dutch header content updated\n')
    
    // Update EN locale
    console.log('🇬🇧 Updating English header content...')
    await payload.updateGlobal({
      slug: 'header',
      locale: 'en',
      data: {
        mainLinks: headerData.en.mainLinks,
        targetGroups: headerData.en.targetGroups,
      },
    })
    console.log('✅ English header content updated\n')
    
    console.log('🎉 Header migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - NL main links: ${headerData.nl.mainLinks.length}`)
    console.log(`   - EN main links: ${headerData.en.mainLinks.length}`)
    console.log(`   - NL target groups: ${headerData.nl.targetGroups.length}`)
    console.log(`   - EN target groups: ${headerData.en.targetGroups.length}`)
    console.log('\n👉 Visit http://localhost:3001/admin/globals/header to view in Payload CMS')
    console.log('👉 Switch between 🇳🇱 NL and 🇬🇧 EN using the locale selector\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
