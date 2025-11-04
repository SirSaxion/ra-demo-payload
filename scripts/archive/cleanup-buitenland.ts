/**
 * Cleanup script to completely remove buitenland page and all its blocks from database
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

async function cleanup() {
  console.log('🧹 Cleaning up buitenland page from database...\n')

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

    // Find the buitenland page
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/makelaars-buitenland',
        },
      },
      limit: 1,
    })

    if (pages.docs.length > 0) {
      const pageId = pages.docs[0].id
      console.log(`📄 Found buitenland page with ID: ${pageId}`)
      
      // Delete the page completely
      await payload.delete({
        collection: 'pages',
        id: pageId,
      })
      
      console.log('✅ Buitenland page deleted successfully!\n')
    } else {
      console.log('ℹ️  No buitenland page found (already clean)\n')
    }

    console.log('🎉 Cleanup complete! You can now run: pnpm tsx scripts/migrate-buitenland.ts\n')
    process.exit(0)
  } catch (error) {
    console.error('❌ Cleanup failed:', error)
    process.exit(1)
  }
}

cleanup()
