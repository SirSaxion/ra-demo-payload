import { getPayload } from 'payload'
import config from '../src/payload.config.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🎯 Starting Case Studies migration...\n')

const caseStudiesData = [
  {
    id: 'paul-thijssen',
    title: 'Paul Thijssen Makelaardij',
    subtitle: 'Premium website met focus op luxe woningen en persoonlijke benadering',
    description:
      'Voor Paul Thijssen Makelaardij hebben we een premium website ontwikkeld die perfect aansluit bij hun focus op luxe woningen en persoonlijke service. De website combineert elegante vormgeving met geavanceerde functionaliteiten voor het presenteren van exclusieve woningen. Door middel van een op maat gemaakte CRM-integratie en geautomatiseerde leadnurturing hebben we hun online aanwezigheid getransformeerd tot een krachtige verkooptool die consistent hoogwaardige leads genereert.',
    websiteUrl: 'https://paulthijssen.nl',
    category: 'Premium Makelaar',
    tags: [
      { tag: 'Luxe' },
      { tag: 'Premium' },
      { tag: '€2M+ Sales' },
      { tag: 'CRM Integratie' },
      { tag: 'Lead Nurturing' },
    ],
    results: [
      {
        metric: 'Verkopen',
        value: '€2M+',
        description: 'Totale verkopen via website in eerste jaar',
      },
      {
        metric: 'Lead kwaliteit',
        value: '+180%',
        description: 'Verbetering in kwaliteit van binnenkomende leads',
      },
      {
        metric: 'Conversie',
        value: '12.5%',
        description: 'Van website bezoeker naar daadwerkelijke klant',
      },
    ],
    heroImage: '1.EmiroSmolders-Settle-DSC06894-.webp',
    galleryImages: [
      '2.EmiroSmolders-Settle-DSC06899-.webp',
      '3.EmiroSmolders-Settle-DSC06907-.webp',
      '4.EmiroSmolders-Settle-DSC06915-.webp',
      '5.EmiroSmolders-Settle-DSC06927-.webp',
    ],
    details: {
      projectDuration: '3 maanden',
      location: 'Noord-Holland',
      teamSize: '4 specialisten',
      technologies: [
        { tech: 'Next.js' },
        { tech: 'TypeScript' },
        { tech: 'Tailwind CSS' },
        { tech: 'Sanity CMS' },
        { tech: 'Vercel' },
        { tech: 'HubSpot CRM' },
      ],
    },
    testimonial: {
      quote:
        'De nieuwe website heeft onze business volledig getransformeerd. We krijgen nu consistent hoogwaardige leads binnen en onze online uitstraling past perfect bij onze premium positionering.',
      author: 'Paul Thijssen',
      role: 'Eigenaar, Paul Thijssen Makelaardij',
    },
  },
  {
    id: 'brabant-makelaar',
    title: 'De Brabant Makelaar',
    subtitle: 'Moderne website met geautomatiseerde leadnurturing en CRM integratie',
    description:
      'Voor De Brabant Makelaar hebben we een complete digitale transformatie uitgevoerd. De nieuwe website combineert moderne vormgeving met krachtige automatisering. Door slimme leadnurturing workflows en naadloze CRM-integratie hebben we hun online aanwezigheid omgetoverd tot een efficiënte lead-generatiemachine die 24/7 werkt aan het opbouwen van klantrelaties.',
    websiteUrl: 'https://debrabantmakelaar.nl',
    category: 'Moderne Makelaar',
    tags: [
      { tag: 'Website' },
      { tag: 'Automatisering' },
      { tag: 'CRM' },
      { tag: 'Lead Generation' },
      { tag: 'Workflow' },
    ],
    results: [
      {
        metric: 'Lead groei',
        value: '200%',
        description: 'Toename in gekwalificeerde leads per maand',
      },
      {
        metric: 'Automatisering',
        value: '85%',
        description: 'Van leadnurturing proces geautomatiseerd',
      },
      {
        metric: 'Response tijd',
        value: '< 2 min',
        description: 'Gemiddelde reactietijd op nieuwe leads',
      },
    ],
    heroImage: 'brabantmakelaar-website.png',
    galleryImages: [
      '6.EmiroSmolders-Settle-DSC06931-.webp',
      '7.EmiroSmolders-Settle-DSC06935-.webp',
      '8.EmiroSmolders-Settle-DSC06949-.webp',
      '9.EmiroSmolders-Settle-DSC06960-.webp',
    ],
    details: {
      projectDuration: '4 maanden',
      location: 'Noord-Brabant',
      teamSize: '5 specialisten',
      technologies: [
        { tech: 'React' },
        { tech: 'Node.js' },
        { tech: 'PostgreSQL' },
        { tech: 'Zapier' },
        { tech: 'Mailchimp' },
        { tech: 'Pipedrive CRM' },
      ],
    },
    testimonial: {
      quote:
        'Dankzij de nieuwe website en automatisering kunnen we ons nu volledig focussen op wat we het beste doen: huizen verkopen. De leads stromen binnen en worden automatisch opgevolgd.',
      author: 'Marco van den Berg',
      role: 'Eigenaar, De Brabant Makelaar',
    },
  },
  {
    id: 'makelaars-amsterdam',
    title: 'Makelaars van Amsterdam',
    subtitle: 'Hypermoderne website voor de Amsterdamse vastgoedmarkt',
    description:
      'Voor Makelaars van Amsterdam hebben we een hypermoderne website ontwikkeld die perfect aansluit bij de dynamische Amsterdamse vastgoedmarkt. Met real-time marktdata, geavanceerde zoekfunctionaliteiten en een naadloze gebruikerservaring hebben we hun digitale aanwezigheid naar een hoger niveau getild.',
    websiteUrl: 'https://makelaarsvanamsterdam.nl',
    category: 'Stedelijke Makelaar',
    tags: [
      { tag: 'Amsterdam' },
      { tag: 'Real-time Data' },
      { tag: 'Modern Design' },
      { tag: 'UX/UI' },
      { tag: 'Marktanalyse' },
    ],
    results: [
      {
        metric: 'Website traffic',
        value: '+320%',
        description: 'Toename in organische website bezoekers',
      },
      {
        metric: 'Gebruikerservaring',
        value: '4.8/5',
        description: 'Gemiddelde gebruikerstevredenheid score',
      },
      {
        metric: 'Marktpositie',
        value: 'Top 3',
        description: 'Ranking in Amsterdam voor online zichtbaarheid',
      },
    ],
    heroImage: '10.EmiroSmolders-Settle-DSC06970-.webp',
    galleryImages: [
      '11.EmiroSmolders-Settle-DSC06990-.webp',
      '12.EmiroSmolders-Settle-DSC07000-.webp',
      '13.EmiroSmolders-Settle-DSC07010-.webp',
      '14.EmiroSmolders-Settle-DSC07018-.webp',
    ],
    details: {
      projectDuration: '5 maanden',
      location: 'Amsterdam',
      teamSize: '6 specialisten',
      technologies: [
        { tech: 'Next.js' },
        { tech: 'GraphQL' },
        { tech: 'Prisma' },
        { tech: 'PostgreSQL' },
        { tech: 'Algolia Search' },
        { tech: 'Mapbox' },
      ],
    },
    testimonial: {
      quote:
        'Onze nieuwe website heeft ons geholpen om ons te onderscheiden in de competitieve Amsterdamse markt. De moderne uitstraling en functionaliteiten spreken onze doelgroep perfect aan.',
      author: 'Linda Jansen',
      role: 'Partner, Makelaars van Amsterdam',
    },
  },
]

// Helper to find media by filename
async function findMediaByFilename(payload, filename) {
  // Try exact match first
  let result = await payload.find({
    collection: 'media',
    where: {
      filename: {
        equals: filename,
      },
    },
    limit: 1,
  })
  
  if (result.docs.length > 0) {
    return result.docs[0].id
  }
  
  // Try without extension variations (--large, --medium, etc)
  const baseFilename = filename.replace(/-(large|medium|small|thumbnail|xlarge|compressed)\./, '.')
  if (baseFilename !== filename) {
    result = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: baseFilename,
        },
      },
      limit: 1,
    })
  }
  
  return result.docs[0]?.id || null
}

async function run() {
  const payload = await getPayload({ config })

  console.log('📊 Migrating case studies...\n')

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (const caseData of caseStudiesData) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'case-studies',
        where: {
          id: {
            equals: caseData.id,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`⏭️  Skipped (exists): ${caseData.title}`)
        skipCount++
        continue
      }

      // Find hero image
      const heroMedia = await findMediaByFilename(payload, caseData.heroImage)
      if (!heroMedia) {
        console.log(`⚠️  Hero image not found for ${caseData.title}: ${caseData.heroImage}`)
      }

      // Find gallery images
      const galleryMedia = []
      for (const imgFilename of caseData.galleryImages) {
        const mediaId = await findMediaByFilename(payload, imgFilename)
        if (mediaId) {
          galleryMedia.push({ image: mediaId })
        }
      }

      // Create case study
      await payload.create({
        collection: 'case-studies',
        data: {
          id: caseData.id,
          title: caseData.title,
          subtitle: caseData.subtitle,
          description: caseData.description,
          websiteUrl: caseData.websiteUrl,
          category: caseData.category,
          tags: caseData.tags,
          results: caseData.results,
          images: {
            hero: heroMedia,
            gallery: galleryMedia,
          },
          details: caseData.details,
          testimonial: caseData.testimonial,
          seo: {
            metaTitle: `${caseData.title} - Case Study | Real Accelerate`,
            metaDescription: caseData.subtitle,
          },
        },
      })

      console.log(`✅ Migrated: ${caseData.title}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error migrating ${caseData.title}:`, error.message)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log('📊 Case Studies Migration Summary:')
  console.log('='.repeat(50))
  console.log(`✅ Successfully migrated: ${successCount}`)
  console.log(`⏭️  Skipped (already exist): ${skipCount}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log('='.repeat(50))

  if (successCount > 0) {
    console.log('\n✨ Case studies are now available in Payload!')
    console.log('   Go to: http://localhost:3000/admin/collections/case-studies')
  }

  process.exit(0)
}

run()
