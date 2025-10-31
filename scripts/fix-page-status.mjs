import { getPayload } from 'payload'
import config from '../src/payload.config.js'

const payload = await getPayload({ config })

console.log('🔧 Fixing page status fields...\n')

// Get all pages
const pages = await payload.find({
  collection: 'pages',
  limit: 100,
  draft: false, // Get published versions
})

console.log(`Found ${pages.docs.length} pages\n`)

let fixedCount = 0

for (const page of pages.docs) {
  try {
    // Check if page has old 'status' field
    if (page.status) {
      console.log(`Checking: ${page.title}`)
      
      // If old status was 'published', make sure it's published in new system
      if (page.status === 'published' && page._status === 'draft') {
        console.log(`  → Publishing: ${page.title}`)
        
        // Update to published
        await payload.update({
          collection: 'pages',
          id: page.id,
          data: {
            _status: 'published',
          },
        })
        
        fixedCount++
        console.log(`  ✅ Fixed: ${page.title}`)
      } else {
        console.log(`  ✓ Already correct`)
      }
    }
  } catch (error) {
    console.error(`  ❌ Error fixing ${page.title}:`, error.message)
  }
}

console.log('\n' + '='.repeat(50))
console.log(`✅ Fixed ${fixedCount} pages`)
console.log('='.repeat(50))

// Also check drafts
const drafts = await payload.find({
  collection: 'pages',
  limit: 100,
  draft: true, // Get draft versions
})

console.log(`\n📝 Found ${drafts.docs.length} drafts`)

process.exit(0)
