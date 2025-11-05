/**
 * Migrate FAQ questions to database for Projectontwikkelaars
 * 
 * Run with: pnpm tsx scripts/migrate-projectontwikkelaars-faq-full.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const faqData = {
  nl: [
    {
      icon: 'Calendar',
      question: 'Hoe zorgen jullie voor snellere projectverkoop?',
      answer: 'We combineren creatieve online campagnes met offline beleving en slimme opvolgsystemen. Door gerichte marketing, sterke positionering en automatische én persoonlijke opvolging zorgen we dat jouw project sneller en effectiever in de markt komt. Onze ervaring als vastgoedondernemers zorgt dat we precies weten wat werkt.'
    },
    {
      icon: 'Globe',
      question: 'Wat maakt jullie anders dan andere marketingbureaus?',
      answer: 'Wij zijn geen traditioneel marketingbureau - we zijn vastgoedondernemers en investeerders. We begrijpen de uitdagingen van binnenuit omdat we ze zelf ervaren. Wat we voor klanten doen, hebben we zelf getest en bewezen. Dit geeft ons een uniek perspectief en zorgt voor betere resultaten dan bureaus die alleen vanuit theorie werken.'
    },
    {
      icon: 'Clock',
      question: 'Hoe snel kan ik resultaten verwachten?',
      answer: 'Afhankelijk van je huidige situatie zie je binnen enkele weken tot maanden concrete verbetering. Onze aanpak is gericht op snellere verkoopcycli dan traditionele marketing. We starten met een grondige analyse, implementeren daarna creatieve campagnes en slimme opvolging, en optimaliseren continu voor maximaal resultaat.'
    },
    {
      icon: 'DollarSign',
      question: 'Hoe zit het met de investering en ROI?',
      answer: 'We werken met pakketten op maat die aansluiten bij jouw project en budget. De investering hangt af van de scope, maar we focussen op snelle ROI door efficiëntere verkoop. Tijdens de strategiesessie bespreken we transparant de investering en verwachte resultaten. Veel klanten zien de investering snel terugverdiend door verkortte verkoopcycli.'
    },
    {
      icon: 'Target',
      question: 'Helpen jullie ook met branding en positionering?',
      answer: 'Absoluut. Sterke branding en positionering zijn essentieel voor succesvolle projectverkoop. We helpen met het scherp neerzetten van je project, het creëren van een onderscheidende propositie en het ontwikkelen van marketing materialen die resoneren met jouw doelgroep. Of het nu Nederlandse of internationale projecten zijn, we zorgen dat je boodschap aankomt.'
    },
    {
      icon: 'Users',
      question: 'Kunnen jullie meerdere projecten tegelijk managen?',
      answer: 'Ja, we kunnen meerdere projecten tegelijk managen, elk met een dedicated aanpak. Elk project krijgt eigen strategie, marketing campagnes en opvolging. Door onze ervaring met verschillende projecten delen we best practices en creëren efficiëntie. Je vaste contactpersoon coördineert alles zodat projecten elkaar versterken in plaats van hinderen.'
    },
    {
      icon: 'TrendingUp',
      question: 'Wat onderscheidt jullie van traditionele bureaus?',
      answer: 'Het grootste verschil: wij zijn zelf vastgoedondernemers en investeerders. Traditionele bureaus werken vanuit theorie, wij vanuit praktijkervaring. We combineren creatieve marketing met slimme opvolging en moderne automatisering. Waar traditionele bureaus losse diensten leveren, bieden wij een complete verkoopmachine met transparante resultaten en continue optimalisatie.'
    },
    {
      icon: 'Shield',
      question: 'Hoe gaan jullie om met verschillende doelgroepen per project?',
      answer: 'Elke doelgroep vraagt om een unieke aanpak en dat begrijpen we. Voor starter woningen zetten we andere marketing in dan voor luxury apartments. Voor internationale projecten richten we ons op investeerders, voor Nederlandse projecten vaak op eigen bewoners. We analyseren jouw specifieke project en doelgroep, en ontwikkelen een complete maatwerk strategie met passende campagnes en opvolging.'
    }
  ],
  en: [
    {
      icon: 'Calendar',
      question: 'How do you ensure faster project sales?',
      answer: 'We combine creative online campaigns with offline experiences and smart follow-up systems. Through targeted marketing, strong positioning, and automatic and personal follow-up, we ensure your project comes to market faster and more effectively. Our experience as real estate entrepreneurs means we know exactly what works.'
    },
    {
      icon: 'Globe',
      question: 'What makes you different from other marketing agencies?',
      answer: 'We are not a traditional marketing agency - we are real estate entrepreneurs and investors. We understand the challenges from within because we experience them ourselves. What we do for clients, we have tested and proven ourselves. This gives us a unique perspective and ensures better results than agencies that only work from theory.'
    },
    {
      icon: 'Clock',
      question: 'How quickly can I expect results?',
      answer: 'Depending on your current situation, you will see concrete improvement within a few weeks to months. Our approach is focused on faster sales cycles than traditional marketing. We start with a thorough analysis, then implement creative campaigns and smart follow-up, and continuously optimize for maximum results.'
    },
    {
      icon: 'DollarSign',
      question: 'What about the investment and ROI?',
      answer: 'We work with customized packages that fit your project and budget. The investment depends on the scope, but we focus on fast ROI through more efficient sales. During the strategy session, we transparently discuss the investment and expected results. Many clients see the investment quickly paid back through shortened sales cycles.'
    },
    {
      icon: 'Target',
      question: 'Do you also help with branding and positioning?',
      answer: 'Absolutely. Strong branding and positioning are essential for successful project sales. We help with sharply positioning your project, creating a distinctive proposition, and developing marketing materials that resonate with your target group. Whether Dutch or international projects, we ensure your message resonates.'
    },
    {
      icon: 'Users',
      question: 'Can you manage multiple projects simultaneously?',
      answer: 'Yes, we can manage multiple projects simultaneously, each with a dedicated approach. Each project gets its own strategy, marketing campaigns, and follow-up. Through our experience with different projects, we share best practices and create efficiency. Your dedicated contact person coordinates everything so projects strengthen rather than hinder each other.'
    },
    {
      icon: 'TrendingUp',
      question: 'What distinguishes you from traditional agencies?',
      answer: 'The biggest difference: we are real estate entrepreneurs and investors ourselves. Traditional agencies work from theory, we work from practical experience. We combine creative marketing with smart follow-up and modern automation. Where traditional agencies deliver separate services, we offer a complete sales machine with transparent results and continuous optimization.'
    },
    {
      icon: 'Shield',
      question: 'How do you deal with different target groups per project?',
      answer: 'Each target group requires a unique approach and we understand that. For starter homes, we use different marketing than for luxury apartments. For international projects, we target investors, for Dutch projects often owner-occupiers. We analyze your specific project and target group, and develop a complete customized strategy with matching campaigns and follow-up.'
    }
  ]
}

async function migrate() {
  const PAGE_SLUG = '/projectontwikkelaars'
  
  console.log(`🚀 Migrating FAQ questions to database...\n`)
  
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: PAGE_SLUG,
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length === 0) {
      console.error('❌ Page not found!')
      process.exit(1)
    }
    
    const pageId = existing.docs[0].id
    console.log(`📝 Found page with ID: ${pageId}\n`)
    
    // Update NL version
    console.log('🇳🇱 Updating Dutch version...')
    const nlVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
    })
    
    const updatedNlBlocks = nlVersion.blocks?.map((block: any) => {
      if (block.blockType === 'projectontwikkelaarsFAQSection') {
        return {
          ...block,
          questions: faqData.nl,
          contactCtaText: 'of plan een gratis strategiesessie in.',
          phoneCallText: 'Bel direct:'
        }
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'nl',
      data: {
        blocks: updatedNlBlocks,
      },
    })
    console.log('✅ Dutch version updated\n')
    
    // Update EN version
    console.log('🇬🇧 Updating English version...')
    const enVersion = await payload.findByID({
      collection: 'pages',
      id: pageId,
      locale: 'en',
    })
    
    const updatedEnBlocks = enVersion.blocks?.map((block: any) => {
      if (block.blockType === 'projectontwikkelaarsFAQSection') {
        return {
          ...block,
          questions: faqData.en,
          contactCtaText: 'or schedule a free strategy session.',
          phoneCallText: 'Call directly:'
        }
      }
      return block
    })
    
    await payload.update({
      collection: 'pages',
      id: pageId,
      locale: 'en',
      data: {
        blocks: updatedEnBlocks,
      },
    })
    console.log('✅ English version updated\n')
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Added 8 FAQ questions per locale`)
    console.log(`   - Updated CTA text for both locales`)
    console.log('\n👉 NL: http://localhost:3001/projectontwikkelaars')
    console.log(`👉 EN: http://localhost:3001/en/projectontwikkelaars\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
