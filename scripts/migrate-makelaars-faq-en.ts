import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

// Nederlandse FAQ content (bestaand)
const faqDataNL = {
  kicker: "Veelgestelde Vragen",
  title: "Vragen van makelaars",
  subtitle: "Heeft u nog andere vragen? Neem contact op met ons",
  contactLinkText: "support team",
  phoneLabel: "Andere vraag?",
  phonePrefix: "Bel direct:",
  ctaText: "of plan een gratis strategiesessie in.",
  faqs: [
    {
      question: "Hoe snel zie ik resultaat?",
      answer: "Afhankelijk van je huidige situatie zien veel kantoren binnen enkele weken verbetering.",
      icon: "Clock"
    },
    {
      question: "Werkt dit ook in mijn regio?",
      answer: "Ja, onze aanpak is flexibel en aanpasbaar per marktgebied.",
      icon: "Home"
    },
    {
      question: "Wat kost het?",
      answer: "We werken met pakketten op maat. Tijdens een intake bespreken we de investering.",
      icon: "Target"
    },
    {
      question: "Moet ik alles uit handen geven?",
      answer: "Nee, je bepaalt zelf of je volledig ontzorgd wilt worden.",
      icon: "Users"
    },
    {
      question: "Wat maakt Real Accelerate anders?",
      answer: "Wij zijn makelaars én adviseurs. Wij helpen met bewezen oplossingen uit de praktijk.",
      icon: "AlertTriangle"
    }
  ]
}

// Engelse FAQ content
const faqDataEN = {
  kicker: "Frequently Asked Questions",
  title: "Questions from agents",
  subtitle: "Do you have other questions? Contact our",
  contactLinkText: "support team",
  phoneLabel: "Other question?",
  phonePrefix: "Call directly:",
  ctaText: "or schedule a free strategy session.",
  faqs: [
    {
      question: "How quickly do I see results?",
      answer: "Depending on your current situation, many agencies see improvement within a few weeks.",
      icon: "Clock"
    },
    {
      question: "Does this work in my region?",
      answer: "Yes, our approach is flexible and adaptable per market area.",
      icon: "Home"
    },
    {
      question: "What does it cost?",
      answer: "We work with customized packages. During an intake we discuss the investment and expected results.",
      icon: "Target"
    },
    {
      question: "Do I have to hand over everything?",
      answer: "No, you decide whether you want to be fully unburdened or prefer to collaborate.",
      icon: "Users"
    },
    {
      question: "What makes Real Accelerate different?",
      answer: "We are agents and advisors. We don't talk from the sidelines, but help with proven solutions from practice.",
      icon: "AlertTriangle"
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting FAQ section migration for /makelaars page...\n')
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Find the /makelaars page
    console.log('🔍 Finding /makelaars page...')
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: '/makelaars' } },
      locale: 'nl',
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ /makelaars page not found!')
      process.exit(1)
    }
    
    const page = existing.docs[0]
    const pageId = page.id
    console.log(`✅ Found page with ID: ${pageId}\n`)
    
    // Get existing blocks
    const blocks = (page.blocks || []) as any[]
    
    // Find the FAQ section block
    const faqBlockIndex = blocks.findIndex((b: any) => b.blockType === 'makelaarsFAQSection')
    
    if (faqBlockIndex === -1) {
      console.error('❌ FAQ section block not found in page!')
      process.exit(1)
    }
    
    console.log('📝 Found FAQ section block at index:', faqBlockIndex)
    
    // Update the FAQ block with NL content
    blocks[faqBlockIndex] = {
      ...blocks[faqBlockIndex],
      ...faqDataNL,
      blockType: 'makelaarsFAQSection',
    }
    
    // Update Dutch version
    console.log('📝 Updating Dutch FAQ content...')
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: blocks as any,
      },
      locale: 'nl',
    })
    console.log('✅ Dutch content updated\n')
    
    // Update English version with translated content
    console.log('📝 Updating English FAQ content...')
    
    // Get the English version blocks
    const pageEN = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const blocksEN = (pageEN.blocks || []) as any[]
    
    // Update the FAQ block with EN content
    blocksEN[faqBlockIndex] = {
      ...blocksEN[faqBlockIndex],
      ...faqDataEN,
      blockType: 'makelaarsFAQSection',
    }
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      data: {
        blocks: blocksEN as any,
      },
      locale: 'en',
    })
    console.log('✅ English content updated\n')
    
    console.log('✅ Migration completed!\n')
    console.log('👉 Test the results:')
    console.log('   NL: http://localhost:3001/makelaars')
    console.log('   EN: http://localhost:3001/en/makelaars')
    console.log('\n📝 Check in Payload CMS:')
    console.log('   http://localhost:3001/admin/collections/pages')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
