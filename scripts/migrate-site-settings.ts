import { getPayload } from 'payload'
import config from '../src/payload.config'

async function migrateSiteSettings() {
  console.log('🚀 Starting Site Settings migration...')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized')

    // NL (Dutch) Data
    console.log('\n📝 Updating Site Settings for NL locale...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        companyName: 'Real Accelerate',
        tagline: 'Voorspelbare groei voor makelaars en vastgoedteams',
        badge: 'IQI Global Partner',
        address: {
          street: 'Daalwijkdreef 47',
          postalCode: '1103 AD',
          city: 'Amsterdam',
          country: 'Nederland',
        },
        phone: '085 060 2989',
        phoneLink: 'tel:+31850602989',
        email: 'info@realaccelerate.nl',
        emailLink: 'mailto:info@realaccelerate.nl',
        social: {
          linkedin: 'https://www.linkedin.com/company/realaccelerate',
          facebook: 'https://www.facebook.com/realaccelerate',
          instagram: 'https://www.instagram.com/realaccelerate',
          twitter: '',
        },
      },
      locale: 'nl',
    })
    console.log('✅ NL Site Settings updated')

    // EN (English) Data
    console.log('\n📝 Updating Site Settings for EN locale...')
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        companyName: 'Real Accelerate',
        tagline: 'Predictable growth for real estate agents and teams',
        badge: 'IQI Global Partner',
        address: {
          street: 'Daalwijkdreef 47',
          postalCode: '1103 AD',
          city: 'Amsterdam',
          country: 'The Netherlands',
        },
        phone: '+31 85 060 2989',
        phoneLink: 'tel:+31850602989',
        email: 'info@realaccelerate.nl',
        emailLink: 'mailto:info@realaccelerate.nl',
        social: {
          linkedin: 'https://www.linkedin.com/company/realaccelerate',
          facebook: 'https://www.facebook.com/realaccelerate',
          instagram: 'https://www.instagram.com/realaccelerate',
          twitter: '',
        },
      },
      locale: 'en',
    })
    console.log('✅ EN Site Settings updated')

    console.log('\n🎉 Site Settings migration completed successfully!')
    console.log('\n📍 You can now edit these settings at:')
    console.log('   http://localhost:3001/admin/globals/site-settings')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrateSiteSettings()
