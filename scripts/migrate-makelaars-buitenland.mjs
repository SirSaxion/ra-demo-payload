/**
 * Makelaars-buitenland Page Migration Script
 * Migrates all data from old makelaars-buitenland.ts to Payload CMS
 * 
 * Run with: pnpm run migrate:makelaars-buitenland
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

// Full makelaars-buitenland page data from old CMS
const pageData = {
  metadata: {
    metaTitle: "Real Accelerate | Internationale vastgoed marketing | Buitenlandse projecten verkopen",
    metaDescription: "Verkoop buitenlandse vastgoedprojecten met bewezen internationale marketing strategieën. Via IQI Global netwerk bereiken we kopers in Nederland, Duitsland en België."
  },
  blocks: [
    {
      blockType: 'makelaarsInternationalHero',
      badgeText: 'Voor internationale projectontwikkelaars',
      iqiBadgeTitle: 'IQI Global Partner',
      iqiStats: [
        { icon: 'Award', text: '150+ International Awards' },
        { icon: 'DollarSign', text: '$50+ Billion Transactions' },
        { icon: 'Users', text: '40.000+ Agents Worldwide' }
      ],
      countriesBadge: 'Dubai • Spanje • Bali',
      quoteText: 'Bewezen resultaten in internationale projectverkoop',
      title: 'Meer kopers voor jouw buitenlandse vastgoedproject',
      subtitle: 'Real Accelerate helpt projectontwikkelaars en makelaars in het buitenland met het genereren van kwalitatieve leads én concrete verkopen.',
      achievements: [
        { icon: 'CheckCircle2', text: 'Bali: 400+ leads, 15 verkochte units in 3 maanden' },
        { icon: 'CheckCircle2', text: 'Spanje: 200+ warme leads, 10% conversie naar afspraak' },
        { icon: 'CheckCircle2', text: 'Oostenrijk: Project volledig uitverkocht' }
      ],
      ctaPrimary: { label: 'Plan een gratis groeigesprek', action: 'openDialog' },
      ctaSecondary: { label: 'Bekijk internationale cases', href: '#cases' }
    },
    {
      blockType: 'makelaarsInternationalTrustStrip',
      trustItems: [
        { text: 'Bali: 400+ leads, 15 units verkocht in 3 maanden' },
        { text: 'Spanje: 200+ warme leads, 10% conversie' },
        { text: 'Oostenrijk: Alpen project volledig uitverkocht' },
        { text: 'Actief in Spanje, Oostenrijk, Bali & Portugal' },
        { text: 'Toegang tot IQI Global netwerk (40.000+ agents)' },
        { text: 'Complete campagnes: van strategie tot verkoop' },
        { text: 'Real-time dashboards & transparante rapportage' },
        { text: 'Lokale events in Nederland & België' }
      ]
    },
    {
      blockType: 'internationalPainPointsSection',
      badge: 'Internationale uitdagingen',
      title: 'Herken jij deze uitdagingen bij internationale vastgoedverkoop?',
      subtitle: 'Elke markt werkt anders en vergt een specifieke aanpak. We begrijpen de uitdagingen waar projectontwikkelaars tegenaan lopen.',
      painPoints: [
        {
          icon: 'Globe',
          title: 'Markten & cultuurverschillen',
          description: 'Elke markt werkt anders: regelgeving, gewoontes en verwachtingen verschillen sterk tussen Bali, Spanje en Oostenrijk.',
          image: '/images/placeholder.jpg'
        },
        {
          icon: 'Users',
          title: 'Beperkt bereik onder kopers',
          description: 'Traditionele advertenties of portals leveren vooral nieuwsgierigen op — geen concrete kopers uit Nederland of Duitsland.',
          image: '/images/placeholder.jpg'
        },
        {
          icon: 'DollarSign',
          title: 'Gebrek aan lokale opvolging',
          description: 'Leads worden niet goed opgevolgd door tijdzones, taal of gebrek aan lokale partners die Nederlandse kopers begrijpen.',
          image: '/images/placeholder.jpg'
        },
        {
          icon: 'AlertTriangle',
          title: 'Geen grip op marketingkosten',
          description: 'Hoge uitgaven aan marketing en events zonder meetbaar rendement. Je investeert veel, maar ziet weinig concrete resultaten.',
          image: '/images/placeholder.jpg'
        }
      ],
      bottomInsightIcon: 'AlertTriangle',
      bottomInsightText: '<strong>Het resultaat:</strong> Je project krijgt aandacht, maar geen verkopen'
    },
    {
      blockType: 'iqiPartnershipSection',
      badge: 'De oplossing',
      title: 'Van prachtig project naar verkoopklaar succes',
      subtitle: 'Real Accelerate koppelt jouw vastgoedproject aan een bewezen marketingmachine die gericht is op vertrouwen, storytelling en data. Wij combineren advertising, automation en lokale partners om kopers te vinden — en deals te sluiten.',
      quote: 'Complete internationale projectondersteuning',
      leftImage: '/images/placeholder.jpg',
      leftImageAlt: 'Lokale beperkingen',
      leftTitle: 'LOKALE BEPERKINGEN',
      leftSubtitle: 'Zelfstandig beginnen',
      leftItems: [
        { text: 'Beperkt netwerk' },
        { text: '€50k+ setup kosten' },
        { text: '70%+ failure rate' },
        { text: '2-3 jaar opbouw tijd' }
      ],
      rightImage: '/images/iqiglobal.jpg',
      rightImageAlt: 'IQI Global Partnership',
      rightTitle: 'REAL ACCELERATE VOORDELEN',
      rightSubtitle: 'Bewezen marketingmachine voor jouw project',
      rightItems: [
        { text: 'Volledige leadgeneratie & opvolging' },
        { text: 'Internationaal netwerk via IQI Global' },
        { text: 'Lokale promotie via events & media' },
        { text: 'Rapportage met volledige transparantie' }
      ],
      bottomInsight: 'Het verschil: Van hoge marketingkosten zonder resultaat naar een bewezen aanpak met meetbare verkopen'
    },
    {
      blockType: 'internationalMethodologySection',
      badge: 'Onze internationale methodologie',
      title: 'Zo vermarkten wij jouw buitenlandse vastgoedproject',
      steps: [
        {
          icon: 'Target',
          title: 'MARKTANALYSE & POSITIONERING',
          stepLabel: 'Stap 1',
          description: 'We analyseren jouw project, doelgroep en propositie. Wat spreekt kopers in Nederland, Duitsland of België écht aan?'
        },
        {
          icon: 'Video',
          title: 'STORYTELLING & CONTENTCREATIE',
          stepLabel: 'Stap 2',
          description: 'Video, fotografie en copy die emotie en vertrouwen wekken — lokaal én internationaal.'
        },
        {
          icon: 'Zap',
          title: 'CAMPAGNES & AUTOMATION',
          stepLabel: 'Stap 3',
          description: 'Online campagnes via Meta, Google en e-mailfunnels met eventueel AI-opvolging via WhatsApp.'
        },
        {
          icon: 'Calendar',
          title: 'EVENTS & ROADSHOWS',
          stepLabel: 'Stap 4',
          description: 'We organiseren exclusieve events in Nederland en België waar geïnteresseerden jouw project live beleven.'
        },
        {
          icon: 'BarChart3',
          title: 'SALES & RAPPORTAGE',
          stepLabel: 'Resultaat',
          description: 'Wij koppelen leads direct aan jou of lokale verkoopteams, inclusief ROI-tracking en opvolgtools.'
        }
      ],
      bottomInsightIcon: 'Rocket',
      bottomInsightText: '<strong>Het resultaat:</strong> Van aandacht naar concrete verkopen in 5 bewezen stappen'
    },
    {
      blockType: 'internationalWhatYouGetSection',
      badge: 'Wat je krijgt',
      title: 'Complete internationale projectondersteuning',
      subtitle: 'Van campagne tot verkoop: wij zorgen voor de complete aanpak zodat jouw project internationaal succesvol wordt.',
      services: [
        { text: 'Campagne- & funnelopzet per land' },
        { text: 'Videoproductie, visuals & landingspagina\'s' },
        { text: 'Lead nurturing & opvolging via AI' },
        { text: 'Lokale eventorganisatie & salesondersteuning' },
        { text: 'Real-time dashboards & performance tracking' },
        { text: 'Toegang tot IQI Global netwerk (40.000+ agents)' }
      ],
      guaranteesTitle: 'Onze garanties',
      guarantees: [
        {
          icon: 'Check',
          title: 'Resultaatgarantie',
          items: [
            { text: '• Geen resultaat = geen betaling' },
            { text: '• Risk-free samenwerking' }
          ]
        },
        {
          icon: 'Globe',
          title: 'IQI Global Power',
          items: [
            { text: '• 40.000+ professionals netwerk' },
            { text: '• 150+ awards & Forbes recognition' }
          ]
        }
      ],
      bonusIcon: 'Gem',
      bonusTitle: 'BONUS: Lokale vertalingen & cultuurmatching',
      bonusDescription: 'Complete lokalisatie voor DACH- en Benelux-markten',
      bonusItems: [
        { text: '• Professionele vertalingen voor alle landen' },
        { text: '• Cultuurspecifieke aanpak per doelgroep' }
      ]
    },
    {
      blockType: 'internationalForWhoIsThisSection',
      badge: 'Voor wie is dit?',
      title: 'Perfect voor ontwikkelaars met internationale ambitie',
      subtitle: 'Onze aanpak werkt het beste voor projectontwikkelaars en makelaars die hun buitenlandse projecten effectief willen vermarkten',
      perfectForTitle: 'Perfect voor ontwikkelaars die:',
      perfectForItems: [
        {
          icon: 'Globe',
          title: 'Projecten in Zuid-Europa of Azië hebben',
          description: 'Vastgoedontwikkelaars met projecten in Spanje, Oostenrijk, Bali of andere internationale markten.'
        },
        {
          icon: 'DollarSign',
          title: 'Exclusieve buitenlandse listings hebben',
          description: 'Makelaars met unieke internationale proposities die Nederlandse en Duitse kopers willen bereiken.'
        },
        {
          icon: 'Users',
          title: 'Resort- of nieuwbouwprojecten ontwikkelen',
          description: 'Investeringsmaatschappijen die schaalbaar willen groeien met marketingautomatisering.'
        },
        {
          icon: 'CheckCircle2',
          title: 'Willen opschalen met professionele marketing',
          description: 'Salesorganisaties die bereid zijn te investeren in bewezen marketingstrategieën en opvolging.'
        }
      ],
      notForTitle: 'Niet geschikt voor:',
      notForItems: [
        { text: 'Projecten zonder duidelijke verkoopstructuur of zonder commitment aan professionele marketing' },
        { text: 'Ontwikkelaars die niet willen investeren in marketing of follow-up, en quick wins zoeken zonder strategie' }
      ],
      bottomInsightIcon: 'Globe',
      bottomInsightText: '<strong>Herken je jezelf?</strong> Dan ben je klaar voor de volgende stap naar internationale groei'
    },
    {
      blockType: 'internationalCasesSection',
      badge: 'Internationale Cases',
      title: 'Van Nederland naar de wereld',
      subtitle: 'Ontdek hoe makelaars via IQI Global miljoenen aan internationale projecten verkopen',
      cases: [
        {
          id: 1,
          name: 'Bali Resort Development',
          role: 'Toeristische appartementen',
          company: 'Bali Paradise Villas',
          story: 'Internationale campagne gericht op investeerders. Meer dan 400 leads en 15 verkochte units binnen 3 maanden via onze bewezen aanpak.',
          achievement: '15 units verkocht',
          metric: '400+ leads',
          avatar: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=150&h=150&fit=crop&crop=face',
          rating: 5,
          country: 'Bali',
          projectValue: '15 units',
          span: 'col-span-1'
        },
        {
          id: 2,
          name: 'Costa Blanca Project',
          role: 'Nieuwbouwproject Spanje',
          company: 'Mediterranean Estates',
          story: 'Gerichte campagnes leverden 200+ warme leads op met een conversie van 10% naar afspraak. Real Accelerate zorgde voor de complete marketingaanpak.',
          achievement: '200+ warme leads',
          metric: '10% conversie',
          avatar: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=150&h=150&fit=crop&crop=face',
          rating: 5,
          country: 'Spanje',
          projectValue: '200+ leads',
          span: 'col-span-1'
        },
        {
          id: 3,
          name: 'Alpen Appartementen',
          role: 'Luxe project Oostenrijk',
          company: 'Alpine Residences',
          story: 'Positionering rond rendement én beleving. Het project werd volledig uitverkocht dankzij slimme storytelling en gerichte campagnes in DACH-markten.',
          achievement: 'Project uitverkocht',
          metric: '100% verkocht',
          avatar: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=face',
          rating: 5,
          country: 'Oostenrijk',
          projectValue: 'Uitverkocht',
          span: 'col-span-1'
        },
        {
          id: 4,
          name: 'Portugal Villa Project',
          role: 'Luxury villas',
          company: 'Algarve Development Group',
          story: 'Complete internationale campagne met events in Nederland en België. Van concept tot verkoop in 8 maanden met 85% conversie van leads naar afspraken.',
          achievement: '85% conversie',
          metric: '8 maanden',
          avatar: 'https://images.unsplash.com/photo-1523551088-7e0c35b18d65?w=150&h=150&fit=crop&crop=face',
          rating: 5,
          country: 'Portugal',
          projectValue: '85% conversie',
          span: 'col-span-1'
        }
      ],
      bottomInsightIcon: 'Target',
      bottomInsightText: '<strong>Totaal verkocht:</strong> €17.7M+ via IQI Global netwerk in 2024'
    },
    {
      blockType: 'internationalGlobeSection',
      badge: 'Wereldwijd Netwerk',
      title: 'Jouw project<br />wereldwijd vermarkten',
      subtitle: 'Van Bali tot Spanje, van Oostenrijk tot Portugal: wij bereiken kopers in Nederland, Duitsland en België voor jouw internationale project'
    },
    {
      blockType: 'internationalStrategySessionCTA',
      title: 'Maak jouw buitenlandse vastgoedproject',
      highlightText: 'internationaal zichtbaar',
      subtitle: 'Ontdek hoe wij binnen 30 dagen gekwalificeerde leads genereren in Nederland, Duitsland en België.',
      benefits: [
        { text: 'Analyse van jouw project en doelmarkt (30 min)' },
        { text: 'Concrete strategieen voor DACH- en Benelux-markten' },
        { text: 'Leadgeneratie & opvolging aanpak' },
        { text: 'ROI projectie en tijdlijn' },
        { text: 'Voorbeelden uit vergelijkbare projecten' },
        { text: 'BONUS: Inzicht in onze internationale netwerk mogelijkheden' }
      ],
      ctaLabel: 'Plan een vrijblijvende projectsessie',
      ctaFooter: '30 min • Volledig vrijblijvend • Direct toepasbare inzichten',
      bonusText: 'Toegang tot ons internationale netwerk via IQI Global'
    },
    {
      blockType: 'internationalFAQSection',
      badge: 'Internationale FAQ',
      title: 'Veelgestelde vragen over internationale projectverkoop',
      subtitle: 'Heeft u nog andere vragen over het vermarkten van buitenlandse projecten? Neem contact op met ons',
      subtitleSuffix: 'of plan een vrijblijvende projectsessie in.',
      contactLinkText: 'support team',
      contactLinkHref: '/contact',
      phoneLabel: 'Internationale vraag?',
      phoneNumber: '+31850602989',
      phonePrefix: 'Bel direct:',
      faqs: [
        {
          id: 'item-1',
          icon: 'Globe',
          question: 'In welke landen zijn jullie actief?',
          answer: 'Wij hebben bewezen resultaten in Spanje, Oostenrijk, Bali en Portugal. Daarnaast werken we met lokale partners in Dubai en andere internationale markten. We richten ons specifiek op het bereiken van Nederlandse, Duitse en Belgische kopers voor jouw project.'
        },
        {
          id: 'item-2',
          icon: 'TrendingUp',
          question: 'Hoe snel zie ik resultaat van jullie campagnes?',
          answer: 'Gemiddeld genereren we binnen 30 dagen de eerste gekwalificeerde leads. Concrete afspraken volgen meestal binnen 6-8 weken. De snelheid hangt af van jouw project, markt en doelgroep. Bij eerdere projecten zagen we binnen 3 maanden 200+ warme leads en 10% conversie naar afspraak.'
        },
        {
          id: 'item-3',
          icon: 'CreditCard',
          question: 'Wat zijn de kosten van een internationale campagne?',
          answer: 'De investering is afhankelijk van jouw project, doelmarkt en ambities. Wij werken met maatwerkpakketten vanaf €25.000 voor een complete campagne inclusief lead generatie, events en opvolging. Tijdens de projectsessie bespreken we een ROI-projectie specifiek voor jouw situatie.'
        },
        {
          id: 'item-4',
          icon: 'Users',
          question: 'Hoe meten jullie het succes van campagnes?',
          answer: 'Wij werken met real-time dashboards waar je precies ziet hoeveel leads er binnenkomen, wat de conversie is naar afspraken en wat de ROI is. Je krijgt wekelijkse rapportages met concrete cijfers: aantal leads, kosten per lead, conversiepercentages en sales pipeline status.'
        },
        {
          id: 'item-5',
          icon: 'Target',
          question: 'Wat is jullie track record met buitenlandse projecten?',
          answer: 'Wij hebben verschillende internationale projecten succesvol vermarkt: 15 verkochte units in 3 maanden (Bali), 200+ leads met 10% conversie (Spanje) en een volledig uitverkocht Alpen project (Oostenrijk). Onze aanpak combineert data-gedreven campagnes met storytelling die kopers aanspreekt.'
        },
        {
          id: 'item-6',
          icon: 'Clock',
          question: 'Werken jullie ook met lokale verkoopteams?',
          answer: 'Ja, wij kunnen leads direct koppelen aan jouw lokale verkoopteam of makelaars ter plaatse. Via ons IQI Global netwerk hebben we toegang tot lokale partners in alle belangrijke markten. Wij zorgen voor warme leads, zij zorgen voor de lokale opvolging en afronding.'
        }
      ]
    }
  ]
}

async function migrate() {
  console.log('🚀 Starting makelaars-buitenland page migration...\n')
  
  try {
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if makelaars-buitenland page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: '/makelaars-buitenland',
        },
      },
    })
    
    const finalPageData = {
      title: 'Makelaars Buitenland',
      slug: '/makelaars-buitenland',
      status: 'published',
      blocks: pageData.blocks,
      seo: {
        metaTitle: pageData.metadata.metaTitle,
        metaDescription: pageData.metadata.metaDescription,
      },
    }
    
    if (existing.docs.length > 0) {
      console.log('📝 Makelaars-buitenland page already exists, updating...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: finalPageData,
      })
      console.log('✅ Makelaars-buitenland page updated!\n')
    } else {
      console.log('📝 Creating new makelaars-buitenland page...')
      await payload.create({
        collection: 'pages',
        data: finalPageData,
      })
      console.log('✅ Makelaars-buitenland page created!\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Total blocks: ${pageData.blocks.length}`)
    console.log(`   - Slug: /makelaars-buitenland`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3000/admin/collections/pages to view in Payload CMS\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()

