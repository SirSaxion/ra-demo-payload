/**
 * Create admin user for Payload CMS
 * Run with: node scripts/create-user.mjs
 */

import { getPayload } from 'payload'
import config from '../dist/payload.config.js'

async function createUser() {
  console.log('👤 Creating admin user...\n')
  
  try {
    const payload = await getPayload({ config })
    
    // Check if user already exists
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })
    
    if (users.docs.length > 0) {
      console.log('✅ Admin user already exists')
      console.log(`   Email: ${users.docs[0].email}\n`)
      process.exit(0)
    }
    
    // Create new admin user
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@realaccelerate.nl',
        password: 'admin123',
      },
    })
    
    console.log('✅ Admin user created!')
    console.log('   Email: admin@realaccelerate.nl')
    console.log('   Password: admin123')
    console.log('\n⚠️  Please change this password after first login!\n')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Failed to create user:', error)
    process.exit(1)
  }
}

createUser()
