/**
 * Makelaars Page Migration Script
 * Migrates all data from old makelaars.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:makelaars
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables FIRST before importing config
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// NOW import Payload after env vars are set
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

// Debug: Check if env vars are loaded
console.log('Environment check:')
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? '✓ Loaded' : '✗ Missing')
console.log('DATABASE_URI:', process.env.DATABASE_URI ? '✓ Loaded' : '✗ Missing')
console.log()

// Full makelaars page data from old CMS
const makelaarsPageData = {
  metadata: {
    metaTitle: "Real Accelerate | Makelaar marketing | Groei je makelaarskantoor",
    metaDescription: "Groei je makelaarskantoor met bewezen marketing strategieën uit de praktijk. Van drukte naar structurele groei. Door makelaars, voor makelaars."
  },
  blocks: [
    {
      blockType: 'makelaarsHero',
      kicker: 'Voor groeiende makelaarskantoren',
      title: 'Groei slimmer met je makelaarskantoor',
      subtitle: 'Bij Real Accelerate helpen wij makelaarskantoren groeien met bewezen strategieën, efficiëntere processen en praktische ondersteuning. Geen theorie, maar aanpakken wat écht werkt – rechtstreeks uit de praktijk van ons eigen makelaarskantoor SETTL. en de klanten die wij dagelijks begeleiden.',
      ctaPrimary: {
        label: 'Plan een gratis strategiesessie',
        href: '/contact'
      },
      ctaSecondary: {
        label: 'Ontdek onze aanpak',
        href: '#methodologie'
      },
      trustIndicators: [
        { text: '30 minuten strategiesessie' },
        { text: 'Volledig vrijblijvend' },
        { text: 'Direct bruikbare inzichten' }
      ],
      avatarsTitle: 'Sluit je aan bij 200+ succesvolle makelaars',
      avatars: [
        {
          src: '/images/brabantmakelaar_avatar.webp',
          alt: 'Amory - De Brabant Makelaar',
          tilt: '-rotate-1'
        },
        {
          src: '/images/binkpartners_avatar.webp',
          alt: 'Pieter - Bink & Partners',
          tilt: 'rotate-3'
        },
        {
          src: '/images/paulthijssen_avatar.webp',
          alt: 'Paul - Paul Thijssen Makelaardij',
          tilt: '-rotate-2'
        }
      ],
      floatingStats: [
        {
          title: '30+ jaar',
          subtitle: 'Gecombineerde ervaring'
        },
        {
          title: 'SETTL.',
          subtitle: 'Eigen makelaarskantoor'
        }
      ],
      testimonialQuote: 'Honderden makelaars geholpen sinds 2021'
    },
    {
      blockType: 'makelaarsTrustStrip',
      trustItems: [
        { text: '30+ jaar marketing ervaring' },
        { text: 'Zelf actief als makelaars met SETTL.' },
        { text: '€10k → €100k omzet met onze klanten' },
        { text: 'Bewezen strategieën uit de praktijk' },
        { text: 'Van 2 naar 8 werknemers in 18 maanden' },
        { text: 'Geen afhankelijkheid van dure leadplatformen' },
        { text: 'Transparant en resultaatgericht' },
        { text: 'Complete ondersteuning van A tot Z' }
      ]
    },
    {
      blockType: 'makelaarsProblemSection',
      kicker: 'De uitdaging',
      title: 'De uitdaging voor makelaarskantoren',
      subtitle: 'Veel makelaarskantoren draaien volle agenda\'s en hebben een continue stroom telefoontjes, maar groeien toch niet door. We zien het dagelijks bij onze klanten – en we hebben het zelf ook ervaren met SETTL.',
      oldWayTitle: 'HUIDIGE SITUATIE',
      oldWaySubtitle: 'Waar veel kantoren tegenaan lopen',
      problems: [
        {
          text: 'Tijd en energie gaan verloren aan ad hoc werk',
          icon: 'AlertTriangle'
        },
        {
          text: 'Dure marketingplatformen leveren weinig op',
          icon: 'DollarSign'
        },
        {
          text: 'Processen zijn versnipperd en niet schaalbaar',
          icon: 'TrendingDown'
        },
        {
          text: 'Drukte zonder duurzame groei',
          icon: 'Swords'
        }
      ],
      newWayTitle: 'ONZE AANPAK',
      newWaySubtitle: 'Hoe wij helpen',
      solutions: [
        {
          text: 'Bewezen strategieën en systemen',
          icon: 'CheckCircle2'
        },
        {
          text: 'Efficiëntere processen en automatisering',
          icon: 'Target'
        },
        {
          text: 'Structureel bouwen aan een schaalbaar kantoor',
          icon: 'Users'
        },
        {
          text: 'Ervaring uit de praktijk met SETTL.',
          icon: 'CheckCircle2'
        }
      ],
      bottomInsight: '<strong>Wij weten hoe dat voelt –</strong> en vooral: hoe je er vanaf komt'
    },
    {
      blockType: 'makelaarsMethodologySection',
      kicker: 'Onze werkwijze',
      title: 'Van drukte naar duurzame groei',
      subtitle: 'Met Real Accelerate zetten we makelaarskantoren om van reactief werken naar voorspelbare groei. Dat doen we in 3 stappen:',
      steps: [
        {
          title: 'INZICHT KRIJGEN',
          subtitle: 'Stap 1',
          description: 'Analyse van je huidige processen, marketing en resultaten.',
          icon: 'Target'
        },
        {
          title: 'SLIMMER WERKEN',
          subtitle: 'Stap 2',
          description: 'Bewezen systemen en automatisering inzetten.',
          icon: 'Target'
        },
        {
          title: 'SAMEN DOORGROEIEN',
          subtitle: 'Stap 3',
          description: 'Structureel bouwen aan een sterker kantoor.',
          icon: 'TrendingUp'
        }
      ]
    },
    {
      blockType: 'makelaarsBewezenSysteemSection',
      kicker: 'Onze ervaring',
      title: 'Ervaring uit de branche – wij staan er zelf middenin',
      subtitle: 'Real Accelerate is geen traditioneel marketingbureau. Wij zijn makelaars. Met <strong>SETTL.</strong> staan we dagelijks in de markt. Alles wat wij doen voor onze klanten, hebben we zelf getest, verbeterd en bewezen.',
      imageSrc: '/images/emiro_working_at_desk.png',
      imageAlt: 'Emiro aan het werk achter zijn laptop',
      benefitsTitle: 'WAAROM DIT VERSCHIL MAAKT',
      benefits: [
        { text: 'Ervaring uit de praktijk – wij zijn zelf makelaars' },
        { text: 'Transparant, no-nonsense samenwerken' },
        { text: 'Bewezen strategieën en systemen' },
        { text: 'Altijd gericht op duurzame groei' },
        { text: 'Persoonlijk en menselijk in onze aanpak' }
      ],
      quote: 'Daarom begrijpen wij makelaarskantoren beter dan wie dan ook.'
    },
    {
      blockType: 'makelaarsResultsBentoGrid',
      kicker: 'Resultaten uit de praktijk',
      title: 'Bewezen resultaten van makelaars',
      subtitle: 'Onze klanten zijn makelaarskantoren die slimmer willen werken en sneller willen groeien. Met onze aanpak zien ze onder andere:',
      results: [
        {
          company: 'DE BRABANT MAKELAAR',
          logo: '/images/brabantmakelaar_logo.webp',
          image: '/images/1.EmiroSmolders-Settle-DSC06894-.webp',
          mainMetric: '€10k → €100k/maand',
          description: 'Van 2 naar 8 werknemers in 18 maanden tijd.',
          icon: 'DollarSign',
          featured: true
        },
        {
          company: 'MARCO VAN BARNEVELD',
          image: '/images/10.EmiroSmolders-Settle-DSC06970-.jpg',
          mainMetric: '4 nieuwe franchise locaties',
          description: 'Pipeline vol voor meer groei.',
          icon: 'Building2'
        },
        {
          company: 'THOMA POST',
          image: '/images/teamfoto_einde.png',
          mainMetric: '31 afspraken eerste maand',
          description: 'Directe resultaten vanaf dag één.',
          icon: 'Target'
        }
      ],
      bottomInsight: '<strong>Efficiëntere processen,</strong> meer voorspelbare afspraken en omzet',
      ctaLabel: 'Lees ervaringen van makelaars',
      ctaHref: '/cases'
    },
    {
      blockType: 'makelaarsGuaranteesSection',
      kicker: 'Waarom wij',
      title: 'Waarom makelaars kiezen voor Real Accelerate',
      subtitle: 'Wij zijn geen traditioneel marketingbureau – wij begrijpen de vastgoedbranche van binnenuit',
      cards: [
        {
          title: 'Ervaring uit de praktijk',
          subtitle: 'Wij zijn zelf makelaars',
          icon: 'Target',
          items: [
            { text: '<strong>Ervaring uit de praktijk</strong> – wij zijn zelf makelaars' },
            { text: '<strong>Transparant, no-nonsense</strong> samenwerken' },
            { text: '<strong>Bewezen strategieën</strong> en systemen' }
          ]
        },
        {
          title: 'Onze focus',
          subtitle: 'Altijd gericht op resultaat',
          icon: 'Users',
          items: [
            { text: '<strong>Altijd gericht op duurzame groei</strong>' },
            { text: '<strong>Persoonlijk en menselijk</strong> in onze aanpak' }
          ]
        }
      ]
    },
    {
      blockType: 'makelaarsWhatYouGetSection',
      kicker: 'Wat je krijgt',
      title: 'Meer dan een marketingcampagne',
      subtitle: 'Wij helpen makelaarskantoren niet alleen met marketing of zichtbaarheid. Wij bouwen mee aan het hele fundament van je kantoor:',
      services: [
        { text: 'Branding en positionering' },
        { text: 'Online marketing en campagnes' },
        { text: 'Procesoptimalisatie en automatisering' },
        { text: 'Groei- en schaalstrategieën' }
      ],
      bonusTitle: 'Ontdek onze oplossingen',
      bonusDescription: 'Wil je meer weten? Neem contact op.'
    },
    {
      blockType: 'makelaarsForWhoIsThisSection',
      kicker: 'Voor wie is dit?',
      title: 'Voor welke makelaars is dit interessant?',
      subtitle: 'Onze aanpak past bij makelaarskantoren die:',
      perfectFor: [
        { text: 'Klaar zijn met dure en onvoorspelbare leadplatformen' },
        { text: 'Efficiëntere processen en meer structuur willen' },
        { text: 'Een sterk merk willen bouwen in hun regio' },
        { text: 'Toekomstbestendig en schaalbaar willen groeien' }
      ],
      notForTitle: 'Niet geschikt voor:',
      notFor: [
        { text: 'Prijsvechters zonder focus op kwaliteit' },
        { text: 'Adviseurs die tevreden zijn met hun huidige afhankelijkheid' },
        { text: 'Wie niet openstaat voor innovatie' }
      ],
      bottomInsight: '<strong>Herken je dit?</strong> Neem contact op'
    },
    {
      blockType: 'makelaarsStrategieSessionCTA',
      title: 'Klaar om je makelaarskantoor naar het volgende niveau te brengen?',
      subtitle: 'Of je nu meer structuur zoekt, je marketing wilt verbeteren of simpelweg efficiënt werken – wij helpen je verder.',
      benefits: [
        { text: 'Analyse van jouw situatie en groeidoelen' },
        { text: 'Identificatie knelpunten' },
        { text: 'Concreet plan om doelstellingen te behalen' },
        { text: 'Vrijblijvend kennismakingsgesprek' },
        { text: 'Direct bruikbare adviezen' },
        { text: 'Persoonlijke aanpak' }
      ],
      ctaLabel: 'Claim je gratis strategiesessie',
      ctaSubtext: '30 minuten • Volledig vrijblijvend',
      ctaHref: '/contact'
    },
    {
      blockType: 'makelaarsFAQSection',
      kicker: 'Veelgestelde Vragen',
      title: 'Vragen van makelaars',
      subtitle: 'Heeft u nog andere vragen? Neem contact op met ons',
      contactLinkText: 'support team',
      contactLinkHref: '/contact',
      phoneLabel: 'Andere vraag?',
      phoneNumber: '+31850602989',
      faqs: [
        {
          question: 'Hoe snel zie ik resultaat?',
          answer: 'Afhankelijk van je huidige situatie zien veel kantoren binnen enkele weken verbetering.',
          icon: 'Clock'
        },
        {
          question: 'Werkt dit ook in mijn regio?',
          answer: 'Ja, onze aanpak is flexibel en aanpasbaar per marktgebied.',
          icon: 'Home'
        },
        {
          question: 'Wat kost het?',
          answer: 'We werken met pakketten op maat. Tijdens een intake bespreken we de investering.',
          icon: 'Target'
        },
        {
          question: 'Moet ik alles uit handen geven?',
          answer: 'Nee, je bepaalt zelf of je volledig ontzorgd wilt worden.',
          icon: 'Users'
        },
        {
          question: 'Wat maakt Real Accelerate anders?',
          answer: 'Wij zijn makelaars én adviseurs. Wij helpen met bewezen oplossingen uit de praktijk.',
          icon: 'AlertTriangle'
        }
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting makelaars page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if makelaars page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/makelaars',
        },
      },
    })
    
    const pageData = {
      title: 'Makelaars',
      slug: '/makelaars',
      status: 'published',
      blocks: makelaarsPageData.blocks,
      seo: {
        metaTitle: makelaarsPageData.metadata.metaTitle,
        metaDescription: makelaarsPageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Makelaars page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: pageData,
      })
      console.log('✅ Makelaars page updated!\n')
    } else {
      console.log('📝 Creating new makelaars page...')
      await payload.create({
        collection: 'pages',
        data: pageData,
      })
      console.log('✅ Makelaars page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${makelaarsPageData.blocks.length}`)
    console.log(`   - Slug: /makelaars`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
