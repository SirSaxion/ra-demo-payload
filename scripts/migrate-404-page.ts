/**
 * 404 Page Global Migration
 * Migrates 404 page content to Payload CMS with NL + EN support
 * 
 * Run with: pnpm tsx scripts/migrate-404-page.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const notFoundData = {
  nl: {
    title: 'Pagina niet gevonden',
    description: 'De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen, we helpen je graag verder!',
    helpText: 'Hulp nodig? Neem direct contact op:',
    primaryButton: {
      text: 'Naar homepage',
      href: '/',
    },
    secondaryButton: {
      text: 'Bekijk cases',
      href: '/cases',
    },
  },
  en: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved. Don\'t worry, we\'re happy to help you!',
    helpText: 'Need help? Contact us directly:',
    primaryButton: {
      text: 'Go to homepage',
      href: '/',
    },
    secondaryButton: {
      text: 'View cases',
      href: '/cases',
    },
  },
}

async function migrate() {
  console.log('🚀 Starting 404 page global migration...\n')
  
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
    console.log('🇳🇱 Updating Dutch 404 page content...')
    await payload.updateGlobal({
      slug: 'not-found-page',
      locale: 'nl',
      data: {
        title: notFoundData.nl.title,
        description: notFoundData.nl.description,
        helpText: notFoundData.nl.helpText,
        primaryButton: notFoundData.nl.primaryButton,
        secondaryButton: notFoundData.nl.secondaryButton,
      },
    })
    console.log('✅ Dutch 404 page content updated\n')
    
    // Update EN locale
    console.log('🇬🇧 Updating English 404 page content...')
    await payload.updateGlobal({
      slug: 'not-found-page',
      locale: 'en',
      data: {
        title: notFoundData.en.title,
        description: notFoundData.en.description,
        helpText: notFoundData.en.helpText,
        primaryButton: notFoundData.en.primaryButton,
        secondaryButton: notFoundData.en.secondaryButton,
      },
    })
    console.log('✅ English 404 page content updated\n')
    
    console.log('🎉 404 page migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log('   - NL content: ✅')
    console.log('   - EN content: ✅')
    console.log('   - Phone numbers will come from site-settings global')
    console.log('\n👉 Visit http://localhost:3001/admin/globals/not-found-page to edit in Payload CMS')
    console.log('👉 Visit http://localhost:3001/admin/globals/site-settings to edit phone numbers')
    console.log('👉 Switch between 🇳🇱 NL and 🇬🇧 EN using the locale selector\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
