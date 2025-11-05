import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/hypotheekadviseurs'

const pageData = {
  nl: {
    title: 'Hypotheekadviseurs',
    seo: {
      metaTitle: 'Real Accelerate | Hypotheekadviseur marketing | Onafhankelijk van offerte-sites',
      metaDescription: 'Word onafhankelijk van offerte-sites. Bouw een voorspelbare klantenstroom met bewezen campagnes en duurzaamheid als toegevoegde waarde.',
    },
    blocks: [
      {
        blockType: 'hypotheekadviseursHero',
        kicker: 'Voor hypotheekadviseurs',
        title: 'Bewezen campagnes voor hypotheekadviseurs',
        subtitle: 'Word onafhankelijk van offerte-sites en bouw een voorspelbare klantenstroom met <strong>bewezen campagnes</strong> en duurzaamheid als toegevoegde waarde.',
        ctaPrimary: { label: 'Plan een gratis strategiegesprek', href: '/contact' },
        ctaSecondary: { label: 'Bekijk Edit BV resultaten', href: '#hypotheek-cases' },
        editBVImage: '/images/editbv.jpg',
        editBVTitle: 'Edit BV Partnership',
        editBVSubtitle: 'Zwolle • Duurzaamheid expertise',
        editBVStats: [
          { id: '1', icon: 'TrendingUp', text: '46 afspraken uit 1.300 contacten' },
          { id: '2', icon: 'Users', text: 'Duurzaamheid consulten als differentiator' },
          { id: '3', icon: 'Award', text: 'Bewezen campagne resultaten' }
        ],
        floatingStat: { value: '3.5%', label: 'Conversie ratio' },
        quote: 'Van offerte-site afhankelijkheid naar voorspelbare groei',
        usps: [
          { id: '1', text: 'Stop met dure, slechte leads van Independer/Priva' },
          { id: '2', text: 'Word gewaardeerd voor je expertise, niet je prijs' },
          { id: '3', text: 'Klanten die <strong>jou al willen</strong> in plaats van leads' }
        ]
      },
      {
        blockType: 'hypotheekadviseursTrustStrip',
        trustItems: [
          { id: 1, text: 'Edit BV partnership Zwolle' },
          { id: 2, text: '46 afspraken uit 1.300 contacten' },
          { id: 3, text: '3.5% conversie ratio bewezen' },
          { id: 4, text: 'Duurzaamheid expertise' },
          { id: 5, text: 'Onafhankelijk van offerte-sites' },
          { id: 6, text: 'Geen Independer/Priva meer' },
          { id: 7, text: 'Relationele klanten focus' },
          { id: 8, text: 'Bewezen hypotheek campagnes' }
        ]
      },
      {
        blockType: 'hypotheekadviseursPainPointsSection',
        badge: 'Hypotheekadviseur uitdagingen',
        title: 'Herken jij deze frustraties als hypotheekadviseur?',
        subtitle: 'De meeste hypotheekadviseurs blijven gevangen in een cyclus van slechte leads en prijsconcurrentie. Je bent niet alleen.',
        challenges: [
          { id: 1, icon: 'DollarSign', title: 'Afhankelijkheid van offerte-sites', description: 'Je betaalt te veel voor gedeelde leads van lage kwaliteit.' },
          { id: 2, icon: 'Scale', title: 'Prijsconcurrentie', description: 'Je wordt vergeleken op prijs in plaats van expertise.' },
          { id: 3, icon: 'TrendingDown', title: 'Lage marges', description: 'Steeds meer werk, steeds minder winst.' },
          { id: 4, icon: 'Clock', title: 'Tijdsdruk en administratie', description: 'Minder tijd voor advies, meer voor papierwerk.' },
          { id: 5, icon: 'Award', title: 'Geen waardering voor je vakmanschap', description: 'Terwijl jij juist het verschil maakt in advies en vertrouwen.' }
        ],
        ctaIcon: 'Handshake',
        ctaTitle: 'Wij hebben de oplossing!',
        ctaDescription: 'Via Edit BV partnership word je onafhankelijk van offerte-sites met duurzaamheid expertise.'
      },
      {
        blockType: 'hypotheekadviseursEditBVPartnershipSection',
        kicker: 'Wij hebben de oplossing',
        title: 'De bewezen oplossing voor hypotheekadviseurs',
        subtitle: 'Met het Real Accelerate Partnership word je onafhankelijk van offerte-sites. Je bouwt een eigen klantenstroom op via duurzaamheidsexpertise en marketingfunnels die voor je werken — 24/7.',
        benefits: [
          { id: 1, icon: 'TrendingUp', text: 'Nieuwe business via duurzaamheidsconsulten' },
          { id: 2, icon: 'Target', text: 'Eigen leads, direct in je agenda' },
          { id: 3, icon: 'Award', text: 'Betere marges en hogere klantwaardering' },
          { id: 4, icon: 'Users', text: 'Complete systemen, begeleiding en community' }
        ],
        oldWayTitle: 'TRADITIONELE HYPOTHEEK ADVISERING',
        oldWaySubtitle: 'De oude manier',
        oldWayItems: [
          { text: 'Alleen hypotheken' },
          { text: 'Prijs focus' },
          { text: 'Commoditisering' },
          { text: 'Lage marges' }
        ],
        transformLabel: 'WORDT',
        newWayTitle: 'EDIT BV PARTNERSHIP',
        newWaySubtitle: 'Duurzaamheid + hypotheek expertise',
        newWayItems: [
          { text: '<strong>46 afspraken</strong> uit 1.300 contacten' },
          { text: 'Duurzaamheid als toegevoegde waarde' },
          { text: 'Nieuwe business via innovatie' },
          { text: 'Bewezen campagne resultaten' }
        ],
        bottomInsight: '<strong>Het verschil:</strong> Van pure hypotheekadvisering naar waardevolle duurzaamheidsexpertise'
      },
      {
        blockType: 'hypotheekadviseursMethodologySection',
        kicker: 'Onze hypotheek methodologie',
        title: 'Zo maken wij jouw praktijk onafhankelijk',
        subtitle: 'In 4 stappen van afhankelijk naar onafhankelijk',
        steps: [
          { id: 1, number: 'Stap 1', icon: 'Target', title: 'IDEALE KLANTPROFIEL', description: 'We brengen jouw doelgroep en aanbod helder in kaart' },
          { id: 2, number: 'Stap 2', icon: 'Lightbulb', title: 'WAARDEPROPOSITIE', description: 'We combineren hypotheekadvies met duurzaamheidsexpertise' },
          { id: 3, number: 'Stap 3', icon: 'TrendingUp', title: 'MARKETING CAMPAGNE', description: 'We bouwen funnels die leads voor je werven' },
          { id: 4, number: 'Stap 4', icon: 'Handshake', title: 'CONTINUE SUPPORT', description: 'Begeleiding en optimalisatie voor groei' }
        ]
      },
      {
        blockType: 'hypotheekadviseursVoorWieIsDitSection',
        kicker: 'Voor wie is dit?',
        title: 'Voor ambitieuze hypotheekadviseurs met groeidoelen',
        subtitle: 'Onze aanpak werkt het best voor adviseurs die klaar zijn voor verandering en onafhankelijkheid.',
        perfectForTitle: 'Perfect voor hypotheekadviseurs die:',
        perfectForItems: [
          { id: 1, icon: 'Target', title: 'Groei ambitie', description: 'Verder willen groeien dan alleen hypotheekadvisering' },
          { id: 2, icon: 'TrendingUp', title: 'Onafhankelijk', description: 'Weg willen van offerte-sites en prijsconcurrentie' },
          { id: 3, icon: 'Leaf', title: 'Innovatie', description: 'Duurzaamheid als differentiator willen inzetten' }
        ],
        notForTitle: 'Niet geschikt voor:',
        notForItems: [
          { id: 1, text: 'Adviseurs die tevreden zijn met status quo' },
          { id: 2, text: 'Geen tijd hebben voor verandering' },
          { id: 3, text: 'Alleen op prijs willen concurreren' }
        ],
        bottomInsightText: '<strong>Herken je jezelf?</strong> Dan ben je klaar voor de volgende stap naar onafhankelijkheid'
      },
      {
        blockType: 'hypotheekadviseursBewezenResultatenSection',
        kicker: 'Bewezen resultaten',
        title: 'Resultaten uit de praktijk',
        subtitle: 'Edit BV case study: 46 afspraken uit 1.300 contacten'
      },
      {
        blockType: 'hypotheekadviseursWatJeKrijgtSection',
        kicker: 'Wat je krijgt',
        title: 'Complete ondersteuning voor hypotheekadviseurs',
        subtitle: 'Van strategie tot uitvoering, wij zorgen dat je onafhankelijk wordt',
        services: [
          {
            id: 1,
            icon: 'Award',
            title: 'Edit BV Partnership',
            description: 'Toegang tot duurzaamheidsexpertise',
            items: [
              { id: 1, text: 'Duurzaamheidsconsulten' },
              { id: 2, text: 'Expert netwerk' },
              { id: 3, text: 'Certificering' }
            ]
          },
          {
            id: 2,
            icon: 'Target',
            title: 'Marketing Campagnes',
            description: 'Bewezen funnels en strategieën',
            items: [
              { id: 4, text: 'Lead generation' },
              { id: 5, text: 'Email campagnes' },
              { id: 6, text: 'Social media' }
            ]
          }
        ],
        supportTitle: 'Persoonlijke Ondersteuning',
        supportSubtitle: 'Je krijgt niet alleen tools, maar ook de begeleiding om ze succesvol in te zetten',
        supportItems: [
          { id: 7, icon: 'Calendar', title: 'Maandelijkse Hypotheek Bijeenkomsten', description: 'Sector-specifieke sessions met andere hypotheekadviseurs en experts' },
          { id: 8, icon: 'MessageSquare', title: 'Wekelijkse Q&A Sessies', description: 'Live Zoom sessies met hypotheek marketing experts voor al je vragen' },
          { id: 9, icon: 'Zap', title: 'Customer Success Manager', description: 'Persoonlijke begeleider met financiële sector ervaring voor jouw succes' },
          { id: 10, icon: 'Target', title: 'Implementatie Ondersteuning', description: 'Hands-on hulp bij het opzetten van alle systemen en processen' }
        ],
        bonusIcon: 'Gem',
        bonusTitle: 'Bonus: Complete Transformatie',
        bonusDescription: 'Dit is niet alleen marketing - het is een complete business transformatie van transactionele leads naar relationele klanten die je expertise waarderen.',
        bonusItems: [
          { id: 11, text: 'Geen Independer meer' },
          { id: 12, text: 'Betere marges' },
          { id: 13, text: 'Gewaardeerde expertise' }
        ]
      },
      {
        blockType: 'hypotheekadviseursBewezenAanpakSection',
        kicker: 'Onze bewezen aanpak',
        title: 'Waarom onze campagnes succesvol zijn',
        subtitle: 'Onze campagnes leveren structureel meer afspraken en klanten op. We testen, meten en optimaliseren continu — zodat jij met zekerheid kunt groeien.',
        visualTitle: 'Continue optimalisatie',
        visualDescription: 'We testen, meten en verbeteren continu voor maximaal resultaat',
        detailsTitle: 'WAT MAAKT ONS ANDERS',
        points: [
          { id: 1, icon: 'Target', title: 'Data gedreven', description: 'Elke beslissing is gebaseerd op data en tests' },
          { id: 2, icon: 'Lightbulb', title: 'Bewezen strategieën', description: 'We gebruiken alleen wat werkt bij onze klanten' }
        ],
        quote: 'We testen, meten en optimaliseren continu — zodat jij met zekerheid kunt groeien.'
      },
      {
        blockType: 'hypotheekadviseursStrategieSessionCTA',
        kicker: 'Klaar om te beginnen?',
        title: 'Plan je gratis strategiegesprek',
        subtitle: 'Ontdek of onze aanpak bij jou past',
        benefits: [
          { id: 1, text: '30 minuten 1-op-1 strategiesessie' },
          { id: 2, text: 'Directe inzichten voor jouw situatie' },
          { id: 3, text: 'Geen verplichtingen, gewoon waardevol advies' },
          { id: 4, text: 'Plan direct een datum in' }
        ],
        ctaLabel: 'Kies een datum en tijd'
      },
      {
        blockType: 'hypotheekadviseursFAQSection',
        kicker: 'Veelgestelde vragen',
        title: 'Vragen van adviseurs',
        subtitle: 'Heeft u nog andere vragen? Neem contact op',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Andere vraag?',
        // phoneNumber wordt automatisch uit Site Settings gehaald
        faqs: [
          { id: 1, icon: 'Clock', question: 'Hoe snel zie ik resultaat?', answer: 'De eerste leads kunnen binnen 2-4 weken binnenkomen. Structurele groei zie je na 3-6 maanden.' },
          { id: 2, icon: 'DollarSign', question: 'Wat kost het?', answer: 'We werken op maat. Investering hangt af van je doelen en huidige situatie.' },
          { id: 3, icon: 'Target', question: 'Voor wie is dit geschikt?', answer: 'Voor hypotheekadviseurs die willen groeien en onafhankelijk willen worden van offerte-sites.' }
        ]
      }
    ]
  },
  en: {
    title: 'Mortgage advisors',
    seo: {
      metaTitle: 'Real Accelerate | Mortgage advisor marketing | Independent from quote sites',
      metaDescription: 'Become independent from quote sites. Build a predictable client stream with proven campaigns.',
    },
    blocks: [
      {
        blockType: 'hypotheekadviseursHero',
        kicker: 'For mortgage advisors',
        title: 'Proven campaigns for mortgage advisors',
        subtitle: 'Become independent from quote sites and build a predictable client stream with <strong>proven campaigns</strong> and sustainability as added value.',
        ctaPrimary: { label: 'Schedule a free strategy call', href: '/contact' },
        ctaSecondary: { label: 'View Edit BV results', href: '#hypotheek-cases' },
        editBVImage: '/images/editbv.jpg',
        editBVTitle: 'Edit BV Partnership',
        editBVSubtitle: 'Zwolle • Sustainability expertise',
        editBVStats: [
          { id: '101', icon: 'TrendingUp', text: '46 appointments from 1,300 contacts' },
          { id: '102', icon: 'Users', text: 'Sustainability consultations as differentiator' },
          { id: '103', icon: 'Award', text: 'Proven campaign results' }
        ],
        floatingStat: { value: '3.5%', label: 'Conversion ratio' },
        quote: 'From quote site dependency to predictable growth',
        usps: [
          { id: '101', text: 'Stop with expensive, poor leads from Independer/Priva' },
          { id: '102', text: 'Be valued for your expertise, not your price' },
          { id: '103', text: 'Clients who <strong>already want you</strong> instead of leads' }
        ]
      },
      {
        blockType: 'hypotheekadviseursTrustStrip',
        trustItems: [
          { id: '101', text: 'Edit BV partnership Zwolle' },
          { id: '102', text: '46 appointments from 1,300 contacts' },
          { id: '103', text: '3.5% conversion ratio proven' },
          { id: '104', text: 'Sustainability expertise' },
          { id: '105', text: 'Independent from quote sites' },
          { id: '106', text: 'No more Independer/Priva' },
          { id: '107', text: 'Relationship client focus' },
          { id: '108', text: 'Proven mortgage campaigns' }
        ]
      },
      {
        blockType: 'hypotheekadviseursPainPointsSection',
        badge: 'Mortgage advisor challenges',
        title: 'Do you recognize these frustrations as a mortgage advisor?',
        subtitle: 'Most mortgage advisors remain trapped in a cycle of poor leads and price competition. You are not alone.',
        challenges: [
          { id: '101', icon: 'DollarSign', title: 'Dependency on quote sites', description: 'You pay too much for shared leads of low quality.' },
          { id: '102', icon: 'Scale', title: 'Price competition', description: 'You are compared on price instead of expertise.' },
          { id: '103', icon: 'TrendingDown', title: 'Low margins', description: 'More and more work, less and less profit.' },
          { id: '104', icon: 'Clock', title: 'Time pressure and administration', description: 'Less time for advice, more for paperwork.' },
          { id: '105', icon: 'Award', title: 'No appreciation for your craftsmanship', description: 'While you are the one making the difference in advice and trust.' }
        ],
        ctaIcon: 'Handshake',
        ctaTitle: 'We have the solution!',
        ctaDescription: 'Through Edit BV partnership you become independent from quote sites with sustainability expertise.'
      },
      {
        blockType: 'hypotheekadviseursEditBVPartnershipSection',
        kicker: 'We have the solution',
        title: 'The proven solution for mortgage advisors',
        subtitle: 'With the Real Accelerate Partnership you become independent from quote sites. You build your own client stream through sustainability expertise and marketing funnels that work for you — 24/7.',
        benefits: [
          { id: '101', icon: 'TrendingUp', text: 'New business through sustainability consultations' },
          { id: '102', icon: 'Target', text: 'Own leads, directly in your calendar' },
          { id: '103', icon: 'Award', text: 'Better margins and higher client appreciation' },
          { id: '104', icon: 'Users', text: 'Complete systems, guidance and community' }
        ],
        oldWayTitle: 'TRADITIONAL MORTGAGE ADVISORY',
        oldWaySubtitle: 'The old way',
        oldWayItems: [
          { text: 'Only mortgages' },
          { text: 'Price focus' },
          { text: 'Commoditization' },
          { text: 'Low margins' }
        ],
        transformLabel: 'BECOMES',
        newWayTitle: 'EDIT BV PARTNERSHIP',
        newWaySubtitle: 'Sustainability + mortgage expertise',
        newWayItems: [
          { text: '<strong>46 appointments</strong> from 1,300 contacts' },
          { text: 'Sustainability as added value' },
          { text: 'New business through innovation' },
          { text: 'Proven campaign results' }
        ],
        bottomInsight: '<strong>The difference:</strong> From pure mortgage advisory to valuable sustainability expertise'
      },
      {
        blockType: 'hypotheekadviseursMethodologySection',
        kicker: 'Our mortgage methodology',
        title: 'How we make your practice independent',
        subtitle: 'In 4 steps from dependent to independent',
        steps: [
          { id: '101', number: 'Step 1', icon: 'Target', title: 'IDEAL CLIENT PROFILE', description: 'We map out your target audience and offer clearly' },
          { id: '102', number: 'Step 2', icon: 'Lightbulb', title: 'VALUE PROPOSITION', description: 'We combine mortgage advice with sustainability expertise' },
          { id: '103', number: 'Step 3', icon: 'TrendingUp', title: 'MARKETING CAMPAIGN', description: 'We build funnels that recruit leads for you' },
          { id: '104', number: 'Step 4', icon: 'Handshake', title: 'CONTINUOUS SUPPORT', description: 'Guidance and optimization for growth' }
        ]
      },
      {
        blockType: 'hypotheekadviseursVoorWieIsDitSection',
        kicker: 'Who is this for?',
        title: 'For ambitious mortgage advisors with growth goals',
        subtitle: 'Our approach works best for advisors who are ready for change and independence.',
        perfectForTitle: 'Perfect for mortgage advisors who:',
        perfectForItems: [
          { id: '101', icon: 'Target', title: 'Growth ambition', description: 'Want to grow beyond just mortgage advisory' },
          { id: '102', icon: 'TrendingUp', title: 'Independent', description: 'Want to move away from quote sites and price competition' },
          { id: '103', icon: 'Leaf', title: 'Innovation', description: 'Want to use sustainability as a differentiator' }
        ],
        notForTitle: 'Not suitable for:',
        notForItems: [
          { id: '101', text: 'Advisors who are satisfied with the status quo' },
          { id: '102', text: 'Have no time for change' },
          { id: '103', text: 'Only want to compete on price' }
        ],
        bottomInsightText: '<strong>Do you recognize yourself?</strong> Then you are ready for the next step towards independence'
      },
      {
        blockType: 'hypotheekadviseursBewezenResultatenSection',
        kicker: 'Proven results',
        title: 'Results from practice',
        subtitle: 'Edit BV case study: 46 appointments from 1,300 contacts'
      },
      {
        blockType: 'hypotheekadviseursWatJeKrijgtSection',
        kicker: 'What you get',
        title: 'Complete support for mortgage advisors',
        subtitle: 'From strategy to execution, we ensure you become independent',
        services: [
          {
            id: '101',
            icon: 'Award',
            title: 'Edit BV Partnership',
            description: 'Access to sustainability expertise',
            items: [
              { id: '101', text: 'Sustainability consultations' },
              { id: '102', text: 'Expert network' },
              { id: '103', text: 'Certification' }
            ]
          },
          {
            id: '102',
            icon: 'Target',
            title: 'Marketing campaigns',
            description: 'Proven funnels and strategies',
            items: [
              { id: '104', text: 'Lead generation' },
              { id: '105', text: 'Email campaigns' },
              { id: '106', text: 'Social media' }
            ]
          }
        ],
        supportTitle: 'Personal support',
        supportSubtitle: 'You don\'t just get tools, but also the guidance to use them successfully',
        supportItems: [
          { id: '107', icon: 'Calendar', title: 'Monthly Mortgage Meetings', description: 'Sector-specific sessions with other mortgage advisors and experts' },
          { id: '108', icon: 'MessageSquare', title: 'Weekly Q&A Sessions', description: 'Live Zoom sessions with mortgage marketing experts for all your questions' },
          { id: '109', icon: 'Zap', title: 'Customer Success Manager', description: 'Personal guide with financial sector experience for your success' },
          { id: '110', icon: 'Target', title: 'Implementation Support', description: 'Hands-on help setting up all systems and processes' }
        ],
        bonusIcon: 'Gem',
        bonusTitle: 'Bonus: Complete transformation',
        bonusDescription: 'This is not just marketing - it is a complete business transformation from transactional leads to relational clients who value your expertise.',
        bonusItems: [
          { id: '111', text: 'No more Independer' },
          { id: '112', text: 'Better margins' },
          { id: '113', text: 'Valued expertise' }
        ]
      },
      {
        blockType: 'hypotheekadviseursBewezenAanpakSection',
        kicker: 'Our proven approach',
        title: 'Why our campaigns are successful',
        subtitle: 'Our campaigns consistently deliver more appointments and clients. We test, measure and optimize continuously — so you can grow with certainty.',
        visualTitle: 'Continuous optimization',
        visualDescription: 'We test, measure and improve continuously for maximum results',
        detailsTitle: 'WHAT MAKES US DIFFERENT',
        points: [
          { id: '101', icon: 'Target', title: 'Data driven', description: 'Every decision is based on data and tests' },
          { id: '102', icon: 'Lightbulb', title: 'Proven strategies', description: 'We only use what works for our clients' }
        ],
        quote: 'We test, measure and optimize continuously — so you can grow with certainty.'
      },
      {
        blockType: 'hypotheekadviseursStrategieSessionCTA',
        kicker: 'Ready to start?',
        title: 'Schedule your free strategy call',
        subtitle: 'Discover if our approach fits you',
        benefits: [
          { id: '101', text: '30 minutes 1-on-1 strategy session' },
          { id: '102', text: 'Direct insights for your situation' },
          { id: '103', text: 'No obligations, just valuable advice' },
          { id: '104', text: 'Schedule a date directly' }
        ],
        ctaLabel: 'Choose a date and time'
      },
      {
        blockType: 'hypotheekadviseursFAQSection',
        kicker: 'Frequently asked questions',
        title: 'Questions from mortgage advisors',
        subtitle: 'Have other questions? Contact us',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Other question?',
        // phoneNumber wordt automatisch uit Site Settings gehaald
        faqs: [
          { id: '101', icon: 'Clock', question: 'How quickly will I see results?', answer: 'The first leads can come in within 2-4 weeks. Structural growth you see after 3-6 months.' },
          { id: '102', icon: 'DollarSign', question: 'What does it cost?', answer: 'We work customized. Investment depends on your goals and current situation.' },
          { id: '103', icon: 'Target', question: 'Who is this suitable for?', answer: 'For advisors who want to grow and become independent from quote sites.' }
        ]
      }
    ]
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
    
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log('📝 Page exists, updating both locales...\n')
      console.log('🇳🇱 Updating Dutch content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log('✅ Dutch content updated\n')
      
      console.log('🇬🇧 Updating English content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content updated\n')
      
      console.log('📤 Publishing page...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          _status: 'published',
        },
      })
      console.log('✅ Page published\n')
    } else {
      console.log('📝 Creating new page...\n')
      console.log('🇳🇱 Creating with Dutch content...')
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
          _status: 'published',
        },
      })
      console.log('✅ Dutch content created\n')
      
      console.log('🇬🇧 Adding English content...')
      await payload.update({
        collection: 'pages',
        id: created.id,
        locale: 'en',
        data: {
          title: pageData.en.title,
          blocks: pageData.en.blocks,
          seo: pageData.en.seo,
        },
      })
      console.log('✅ English content added\n')
    }
    
    console.log('🎉 Migration completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - NL blocks: ${pageData.nl.blocks.length}`)
    console.log(`   - EN blocks: ${pageData.en.blocks.length}`)
    console.log(`   - Slug: ${PAGE_SLUG}`)
    console.log('   - Status: published')
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
