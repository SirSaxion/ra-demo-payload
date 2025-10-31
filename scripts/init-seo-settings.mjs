import { getPayload } from 'payload'
import config from '../src/payload.config.js'

console.log('🔧 Initializing SEO settings...\n')

async function run() {
  const payload = await getPayload({ config })

  try {
    // Check if SEO settings already exist
    const existingSeo = await payload.findGlobal({
      slug: 'seo',
    })

    if (existingSeo?.siteSettings?.canonicalUrl) {
      console.log('✅ SEO settings already initialized')
      console.log(`   Canonical URL: ${existingSeo.siteSettings.canonicalUrl}`)
      process.exit(0)
    }

    // Find logo in media collection
    const logoResult = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: 'logorealaccelerate.webp',
        },
      },
      limit: 1,
    })

    const logoId = logoResult.docs[0]?.id || null

    // Initialize SEO settings with defaults
    await payload.updateGlobal({
      slug: 'seo',
      data: {
        siteSettings: {
          siteTitle: 'Real Accelerate',
          siteDescription: 'Voorspelbare groei voor makelaars en vastgoedteams',
          canonicalUrl: 'https://www.realaccelerate.nl',
          defaultOgImage: logoId,
        },
        robotsTxt: {
          enabled: true,
          disallowPaths: [{ path: '/admin' }, { path: '/api' }, { path: '/_next' }],
        },
        sitemap: {
          enabled: true,
          includePages: true,
          includeCaseStudies: true,
          defaultChangeFrequency: 'weekly',
          defaultPriority: 0.7,
        },
        structuredData: {
          organizationSchema: true,
          organization: {
            name: 'Real Accelerate',
            legalName: 'Real Accelerate B.V.',
            url: 'https://www.realaccelerate.nl',
            logo: logoId,
            description: 'Voorspelbare groei voor makelaars en vastgoedteams',
            email: 'info@realaccelerate.nl',
            telephone: '+31850602989',
            address: {
              streetAddress: 'Daalwijkdreef 47',
              postalCode: '1103 AD',
              addressLocality: 'Amsterdam',
              addressCountry: 'NL',
            },
            socialProfiles: [
              { url: 'https://www.linkedin.com/company/realaccelerate' },
              { url: 'https://www.facebook.com/realaccelerate' },
            ],
          },
        },
        performance: {
          enablePreloading: true,
          enableLazyLoading: true,
        },
      },
    })

    console.log('✅ SEO settings initialized successfully!')
    console.log('\n📋 Settings:')
    console.log('   • Sitemap: Enabled (pages + case studies)')
    console.log('   • Robots.txt: Enabled (blocks /admin, /api, /_next)')
    console.log('   • Organization Schema: Enabled')
    console.log('   • Performance optimizations: Enabled')
    console.log('\n🔗 Available at:')
    console.log('   • http://localhost:3000/sitemap.xml')
    console.log('   • http://localhost:3000/robots.txt')
    console.log('   • Admin: http://localhost:3000/admin/globals/seo')

    process.exit(0)
  } catch (error) {
    console.error('❌ Error initializing SEO settings:', error)
    process.exit(1)
  }
}

run()
