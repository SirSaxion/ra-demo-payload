/**
 * Footer Global Migration
 * Migrates footer content to Payload CMS with NL + EN support
 * 
 * Run with: pnpm tsx scripts/migrate-footer.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const footerData = {
  nl: {
    tagline: 'Voorspelbare groei voor makelaars en vastgoedteams.',
    badge: 'IQI Global Partner',
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'Over ons', href: '/over-ons' },
    ],
    targetGroups: [
      { name: 'Makelaars', href: '/makelaars' },
      { name: 'Hypotheekadviseurs', href: '/hypotheekadviseurs' },
      { name: 'Makelaars buitenland', href: '/makelaars-buitenland' },
      { name: 'Projectontwikkelaars', href: '/projectontwikkelaars' },
      { name: 'HR & Recruitment', href: '/hr-recruitment' },
    ],
    copyrightText: '© {year} Real Accelerate. Alle rechten voorbehouden.',
  },
  en: {
    tagline: 'Predictable growth for real estate agents and teams.',
    badge: 'IQI Global Partner',
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'About us', href: '/over-ons' },
    ],
    targetGroups: [
      { name: 'Real estate agents', href: '/makelaars' },
      { name: 'Mortgage advisors', href: '/hypotheekadviseurs' },
      { name: 'International agents', href: '/makelaars-buitenland' },
      { name: 'Real estate developers', href: '/projectontwikkelaars' },
      { name: 'HR & Recruitment', href: '/hr-recruitment' },
    ],
    copyrightText: '© {year} Real Accelerate. All rights reserved.',
  },
}

async function migrate() {
  console.log('🚀 Starting Footer global migration...\n')
  
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
    console.log('🇳🇱 Updating Dutch footer content...')
    await payload.updateGlobal({
      slug: 'footer',
      locale: 'nl',
      data: {
        companyName: 'Real Accelerate',
        tagline: footerData.nl.tagline,
        badge: footerData.nl.badge,
        phone: '085 060 2989',
        email: 'info@realaccelerate.nl',
        mainLinks: footerData.nl.mainLinks,
        targetGroups: footerData.nl.targetGroups,
        copyrightText: footerData.nl.copyrightText,
        showAddress: true,
        showSocial: true,
        address: {
          street: 'Daalwijkdreef 47',
          postalCode: '1103 AD',
          city: 'Amsterdam',
        },
        social: {
          linkedin: 'https://www.linkedin.com/company/realaccelerate',
          facebook: 'https://www.facebook.com/realaccelerate',
        },
      },
    })
    console.log('✅ Dutch footer content updated\n')
    
    // Update EN locale
    console.log('🇬🇧 Updating English footer content...')
    await payload.updateGlobal({
      slug: 'footer',
      locale: 'en',
      data: {
        tagline: footerData.en.tagline,
        badge: footerData.en.badge,
        mainLinks: footerData.en.mainLinks,
        targetGroups: footerData.en.targetGroups,
        copyrightText: footerData.en.copyrightText,
      },
    })
    console.log('✅ English footer content updated\n')
    
    console.log('🎉 Footer migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - NL links: ${footerData.nl.mainLinks.length}`)
    console.log(`   - EN links: ${footerData.en.mainLinks.length}`)
    console.log(`   - NL target groups: ${footerData.nl.targetGroups.length}`)
    console.log(`   - EN target groups: ${footerData.en.targetGroups.length}`)
    console.log('\n👉 Visit http://localhost:3001/admin/globals/footer to view in Payload CMS')
    console.log('👉 Switch between 🇳🇱 NL and 🇬🇧 EN using the locale selector\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
