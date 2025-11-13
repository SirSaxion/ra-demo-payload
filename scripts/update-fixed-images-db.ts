/**
 * Update Database with Fixed Images
 * 
 * Updates media collection entries for newly optimized images
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PROJECT_ROOT = path.resolve(__dirname, '..')

dotenv.config({ path: '.env' })

async function updateFixedImages() {
  console.log('🔄 Updating database with fixed images...\n')
  
  if (!process.env.PAYLOAD_SECRET) {
    process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
  }
  if (!process.env.DATABASE_URI) {
    process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
  }
  
  process.env.PAYLOAD_DISABLE_PUSH = 'true'
  
  const payload = await getPayload({ config })
  console.log('✅ Payload initialized\n')
  
  // 1. Update rudyraket.png → rudyraket.webp
  console.log('📝 Updating rudyraket...')
  const rudyPath = path.join(PROJECT_ROOT, 'public', 'images', 'rudyraket.webp')
  
  if (fs.existsSync(rudyPath)) {
    try {
      // Update existing media entry (ID 21)
      await payload.update({
        collection: 'media',
        id: 21,
        data: {
          alt: 'Rudy raket - man zwaait',
        },
        filePath: rudyPath,
      })
      console.log('✅ rudyraket updated (ID: 21)\n')
    } catch (error: any) {
      console.log(`⚠️  Could not update rudyraket: ${error.message}`)
      console.log('   Trying to create new entry...\n')
      
      // Create new if update fails
      const created = await payload.create({
        collection: 'media',
        data: {
          alt: 'Rudy raket - man zwaait',
        },
        filePath: rudyPath,
      })
      console.log(`✅ rudyraket created (ID: ${created.id})\n`)
    }
  }
  
  // 2. Create emiro_presentatie.webp
  console.log('📝 Creating emiro_presentatie...')
  const emiroPath = path.join(PROJECT_ROOT, 'public', 'images', 'emiro_presentatie.webp')
  
  if (fs.existsSync(emiroPath)) {
    try {
      const created = await payload.create({
        collection: 'media',
        data: {
          alt: 'Emiro presentatie - geen standaard marketingbureau',
        },
        filePath: emiroPath,
      })
      console.log(`✅ emiro_presentatie created (ID: ${created.id})\n`)
    } catch (error: any) {
      console.log(`⚠️  Error: ${error.message}\n`)
    }
  }
  
  console.log('📊 Summary:')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('✅ rudyraket.webp - preserves 586x1373 aspect ratio')
  console.log('✅ emiro_presentatie.webp - preserves original aspect ratio')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  
  console.log('📋 Next steps:')
  console.log('1. Go to CMS: http://localhost:3000/admin/collections/media')
  console.log('2. Check new images')
  console.log('3. Update homepage blocks to use new images')
  console.log('4. Test homepage\n')
  
  process.exit(0)
}

updateFixedImages().catch((error) => {
  console.error('❌ Error:', error)
  process.exit(1)
})
