import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/hypotheekadviseurs'

const pageData = {
  nl: {
    title: 'Hypotheekadviseurs',
    seo: { metaTitle: 'Real Accelerate | Hypotheekadviseur marketing | Onafhankelijk van offerte-sites', metaDescription: 'Word onafhankelijk van offerte-sites. Bouw een voorspelbare klantenstroom met bewezen campagnes en duurzaamheid als toegevoegde waarde.' },
    blocks: [
      {
            "blockType": "hypotheekadviseursHero",
            "kicker": "Voor hypotheekadviseurs",
            "title": "Bewezen campagnes voor hypotheekadviseurs",
            "subtitle": "Word onafhankelijk van offerte-sites en bouw een voorspelbare klantenstroom met <strong>bewezen campagnes</strong> en duurzaamheid als toegevoegde waarde.",
            "ctaPrimary": {
                  "label": "Plan een gratis strategiegesprek",
                  "href": "/contact"
            },
            "ctaSecondary": {
                  "label": "Bekijk Edit BV resultaten",
                  "href": "#hypotheek-cases"
            },
            "editBVImage": "/images/editbv.jpg",
            "editBVTitle": "Edit BV Partnership",
            "editBVSubtitle": "Zwolle • Duurzaamheid expertise",
            "editBVStats": [
                  {
                        "id": 1,
                        "icon": "TrendingUp",
                        "text": "46 afspraken uit 1.300 contacten"
                  },
                  {
                        "id": 2,
                        "icon": "Users",
                        "text": "Duurzaamheid consulten als differentiator"
                  },
                  {
                        "id": 3,
                        "icon": "Award",
                        "text": "Bewezen campagne resultaten"
                  }
            ],
            "floatingStat": {
                  "value": "3.5%",
                  "label": "Conversie ratio"
            },
            "quote": "Van offerte-site afhankelijkheid naar voorspelbare groei",
            "usps": [
                  {
                        "id": 1,
                        "text": "Stop met dure, slechte leads van Independer/Priva"
                  },
                  {
                        "id": 2,
                        "text": "Word gewaardeerd voor je expertise, niet je prijs"
                  },
                  {
                        "id": 3,
                        "text": "Klanten die <strong>jou al willen</strong> in plaats van leads"
                  }
            ]
      },
      {
            "blockType": "hypotheekadviseursTrustStrip",
            "trustItems": [
                  {
                        "id": 1,
                        "text": "Edit BV partnership Zwolle"
                  },
                  {
                        "id": 2,
                        "text": "46 afspraken uit 1.300 contacten"
                  },
                  {
                        "id": 3,
                        "text": "3.5% conversie ratio bewezen"
                  },
                  {
                        "id": 4,
                        "text": "Duurzaamheid expertise"
                  },
                  {
                        "id": 5,
                        "text": "Onafhankelijk van offerte-sites"
                  },
                  {
                        "id": 6,
                        "text": "Geen Independer/Priva meer"
                  },
                  {
                        "id": 7,
                        "text": "Relationele klanten focus"
                  },
                  {
                        "id": 8,
                        "text": "Bewezen hypotheek campagnes"
                  }
            ]
      }
]
  },
  en: {
    title: 'Mortgage advisors',
    seo: { metaTitle: 'Real Accelerate | Mortgage advisor marketing | Independent from quote sites', metaDescription: 'Become independent from quote sites. Build a predictable client stream with proven campaigns and sustainability as added value.' },
    blocks: []
  }
}

async function migrate() {
  try {
    console.log('🚀 Starting /hypotheekadviseurs page migration...\n')
    if (!process.env.PAYLOAD_SECRET) process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    if (!process.env.DATABASE_URI) process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    console.log('[✓] Pulling schema from database...')
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    const existing = await payload.find({ collection: 'pages', where: { slug: { equals: PAGE_SLUG } }, locale: 'all', limit: 1 })
    if (existing.docs.length > 0) {
      console.log('📝 Page exists, updating both locales...\n')
      console.log('🇳🇱 Updating Dutch content...')
      await payload.update({ collection: 'pages', id: existing.docs[0].id, locale: 'nl', data: { title: pageData.nl.title, slug: PAGE_SLUG, blocks: pageData.nl.blocks, seo: pageData.nl.seo } })
      console.log('✅ Dutch content updated\n')
      console.log('🇬🇧 Updating English content...')
      await payload.update({ collection: 'pages', id: existing.docs[0].id, locale: 'en', data: { title: pageData.en.title, blocks: pageData.en.blocks, seo: pageData.en.seo } })
      console.log('✅ English content updated\n')
      console.log('📤 Publishing page...')
      await payload.update({ collection: 'pages', id: existing.docs[0].id, data: { _status: 'published' } })
      console.log('✅ Page published\n')
    } else {
      console.log('📝 Creating new page...\n')
      console.log('🇳🇱 Creating with Dutch content...')
      const created = await payload.create({ collection: 'pages', locale: 'nl', data: { title: pageData.nl.title, slug: PAGE_SLUG, blocks: pageData.nl.blocks, seo: pageData.nl.seo, _status: 'published' } })
      console.log('✅ Dutch content created\n')
      console.log('🇬🇧 Adding English content...')
      await payload.update({ collection: 'pages', id: created.id, locale: 'en', data: { title: pageData.en.title, blocks: pageData.en.blocks, seo: pageData.en.seo } })
      console.log('✅ English content added\n')
    }
    console.log('🎉 Migration completed successfully!\n📊 Summary:')
    console.log(`   - NL blocks: ${pageData.nl.blocks.length}`)
    console.log(`   - EN blocks: ${pageData.en.blocks.length}`)
    console.log(`   - Slug: ${PAGE_SLUG}`)
    console.log('   - Status: published\n')
    console.log('👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
