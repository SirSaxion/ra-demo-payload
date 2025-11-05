/**
 * Page Migration Template
 * Copy this file and rename it to migrate-[page-name].ts
 * 
 * Steps:
 * 1. Update pageData with your NL and EN content
 * 2. Update the slug in the script
 * 3. Update console.log messages
 * 4. Run with: pnpm tsx scripts/migrate-[page-name].ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const pageData = {
  nl: {
    title: 'Marketing voor makelaars in het buitenland | Real Accelerate',
    seo: {
      metaTitle: 'Marketing voor makelaars in het buitenland | Real Accelerate',
      metaDescription: 'Marketing voor Nederlandse makelaars in het buitenland. Van Dubai tot Spanje - wereldwijd actief met IQI Global.',
    },
    blocks: [
      // 1. InternationalHero
      {
        blockType: 'makelaarsInternationalHero',
        badgeText: 'Voor internationale projectontwikkelaars',
        iqiBadgeTitle: 'IQI Global Partner',
        iqiStats: [
          { id: 1, icon: 'Award', text: '150+ International Awards' },
          { id: 2, icon: 'DollarSign', text: '$50+ Billion Transactions' },
          { id: 3, icon: 'Users', text: '40.000+ Agents Worldwide' }
        ],
        countriesBadge: 'Dubai • Spanje • Bali',
        quoteText: 'Bewezen resultaten in internationale projectverkoop',
        title: 'Meer kopers voor jouw buitenlandse vastgoedproject',
        subtitle: 'Real Accelerate helpt projectontwikkelaars en makelaars in het buitenland met het genereren van kwalitatieve leads én concrete verkopen.',
        achievements: [
          { id: 1, icon: 'CheckCircle2', text: 'Bali: 400+ leads, 15 verkochte units in 3 maanden' },
          { id: 2, icon: 'CheckCircle2', text: 'Spanje: 200+ warme leads, 10% conversie naar afspraak' },
          { id: 3, icon: 'CheckCircle2', text: 'Oostenrijk: Project volledig uitverkocht' }
        ],
        ctaPrimary: { label: 'Plan een gratis groeigesprek', action: 'openDialog' },
        ctaSecondary: { label: 'Bekijk internationale cases', href: '#cases' }
      },
      // 2. InternationalTrustStrip
      {
        blockType: 'makelaarsInternationalTrustStrip',
        trustItems: [
          { id: 1, text: 'Bali: 400+ leads, 15 units verkocht in 3 maanden' },
          { id: 2, text: 'Spanje: 200+ warme leads, 10% conversie' },
          { id: 3, text: 'Oostenrijk: Alpen project volledig uitverkocht' },
          { id: 4, text: 'Actief in Spanje, Oostenrijk, Bali & Portugal' },
          { id: 5, text: 'Toegang tot IQI Global netwerk (40.000+ agents)' },
          { id: 6, text: 'Complete campagnes: van strategie tot verkoop' },
          { id: 7, text: 'Real-time dashboards & transparante rapportage' },
          { id: 8, text: 'Lokale events in Nederland & België' }
        ]
      },
      // 3. InternationalPainPointsSection
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
      // 4. InternationalMethodologySection
      {
        blockType: 'internationalMethodologySection',
        badge: 'Onze werkwijze',
        title: 'Van onbekend project naar uitverkocht',
        subtitle: 'Onze aanpak combineert lokale marktkennis, IQI Global netwerk en bewezen marketing campagnes',
        steps: [
          { icon: 'Target', stepNumber: '01', title: 'Projectanalyse', description: 'We starten met een grondige analyse: doelgroep, USP\'s, marktpositionering en verkoopstructuur. Zo weten we precies welke knoppen we moeten indrukken.' },
          { icon: 'Users', stepNumber: '02', title: 'Campagne & contentproductie', description: 'We creëren targeted campagnes per markt (NL, DE, BE) met visuals, video, funnel & landingspagina\'s. Alles 100% op maat voor jouw project.' },
          { icon: 'TrendingUp', stepNumber: '03', title: 'Lead generation & opvolging', description: 'We activeren campagnes via Meta, LinkedIn & TikTok én schakelen IQI\'s internationale netwerk in. AI-gedreven opvolging zorgt voor directe conversie.' },
          { icon: 'CheckCircle2', stepNumber: '04', title: 'Optimalisatie & verkoop', description: 'We optimaliseren voortdurend op basis van data. Je krijgt real-time dashboards, rapportages én salesondersteuning waar nodig. Van lead tot sleutel.' }
        ]
      },
      // 5. InternationalCasesSection
      {
        blockType: 'internationalCasesSection',
        badge: 'Internationale resultaten',
        title: 'Van Nederland naar de wereld',
        subtitle: 'Ontdek hoe makelaars via IQI Global miljoenen aan internationale projecten verkopen',
        cases: [
          {
            id: 1,
            name: "Bali Resort Development",
            role: "Toeristische appartementen",
            company: "Bali Paradise Villas",
            story: "Internationale campagne gericht op investeerders. Meer dan 400 leads en 15 verkochte units binnen 3 maanden via onze bewezen aanpak.",
            achievement: "15 units verkocht",
            metric: "400+ leads",
            avatar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Bali",
            projectValue: "15 units",
            span: "col-span-1"
          },
          {
            id: 2,
            name: "Costa Blanca Project",
            role: "Nieuwbouwproject Spanje",
            company: "Mediterranean Estates",
            story: "Gerichte campagnes leverden 200+ warme leads op met een conversie van 10% naar afspraak. Real Accelerate zorgde voor de complete marketingaanpak.",
            achievement: "200+ warme leads",
            metric: "10% conversie",
            avatar: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Spanje",
            projectValue: "200+ leads",
            span: "col-span-1"
          },
          {
            id: 3,
            name: "Alpen Appartementen",
            role: "Luxe project Oostenrijk",
            company: "Alpine Residences",
            story: "Positionering rond rendement én beleving. Het project werd volledig uitverkocht dankzij slimme storytelling en gerichte campagnes in DACH-markten.",
            achievement: "Project uitverkocht",
            metric: "100% verkocht",
            avatar: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Oostenrijk",
            projectValue: "Uitverkocht",
            span: "col-span-1"
          }
        ],
        bottomInsightIcon: 'Target',
        bottomInsightText: '<strong>Totaal verkocht:</strong> €17.7M+ via IQI Global netwerk in 2024'
      },
      // 6. InternationalGlobeSection
      {
        blockType: 'internationalGlobeSection',
        badge: 'Wereldwijd netwerk',
        title: 'Toegang tot IQI Global: 40.000+ agents wereldwijd',
        subtitle: 'Via ons partnerschap met IQI Global krijg je toegang tot een internationaal netwerk van professionals, events en marketing resources die jouw project wereldwijd promoten.'
      },
      // 7. InternationalWhatYouGetSection
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
          { icon: 'Check', title: 'Resultaatgarantie', items: [{ text: '• Geen resultaat = geen betaling' }, { text: '• Risk-free samenwerking' }] },
          { icon: 'Globe', title: 'IQI Global Power', items: [{ text: '• 40.000+ professionals netwerk' }, { text: '• 150+ awards & Forbes recognition' }] }
        ],
        bonusIcon: 'Gem',
        bonusTitle: 'BONUS: Lokale vertalingen & cultuurmatching',
        bonusDescription: 'Complete lokalisatie voor DACH- en Benelux-markten',
        bonusItems: [
          { text: '• Professionele vertalingen voor alle landen' },
          { text: '• Cultuurspecifieke aanpak per doelgroep' }
        ]
      },
      // 8. InternationalForWhoIsThisSection
      {
        blockType: 'internationalForWhoIsThisSection',
        badge: 'Voor wie is dit?',
        title: 'Perfect voor ontwikkelaars met internationale ambitie',
        subtitle: 'Onze aanpak werkt het beste voor projectontwikkelaars en makelaars die hun buitenlandse projecten effectief willen vermarkten',
        perfectForTitle: 'Perfect voor ontwikkelaars die:',
        perfectForItems: [
          { icon: 'Globe', title: 'Projecten in Zuid-Europa of Azië hebben', description: 'Vastgoedontwikkelaars met projecten in Spanje, Oostenrijk, Bali of andere internationale markten.' },
          { icon: 'DollarSign', title: 'Exclusieve buitenlandse listings hebben', description: 'Makelaars met unieke internationale proposities die Nederlandse en Duitse kopers willen bereiken.' },
          { icon: 'Users', title: 'Resort- of nieuwbouwprojecten ontwikkelen', description: 'Investeringsmaatschappijen die schaalbaar willen groeien met marketingautomatisering.' },
          { icon: 'CheckCircle2', title: 'Willen opschalen met professionele marketing', description: 'Salesorganisaties die bereid zijn te investeren in bewezen marketingstrategieën en opvolging.' }
        ],
        notForTitle: 'Niet geschikt voor:',
        notForItems: [
          { text: 'Projecten zonder duidelijke verkoopstructuur of zonder commitment aan professionele marketing' },
          { text: 'Ontwikkelaars die niet willen investeren in marketing of follow-up, en quick wins zoeken zonder strategie' }
        ],
        bottomInsightIcon: 'Globe',
        bottomInsightText: '<strong>Herken je jezelf?</strong> Dan ben je klaar voor de volgende stap naar internationale groei'
      },
      // 9. InternationalStrategySessionCTA
      {
        blockType: 'internationalStrategySessionCTA',
        title: 'Klaar om jouw buitenlandse project internationaal te lanceren?',
        subtitle: 'Plan een gratis strategiegesprek en ontdek hoe wij jouw project van onbekend naar uitverkocht brengen.',
        benefits: [
          { text: 'Analyse van jouw project & doelmarkten' },
          { text: 'Toegang tot IQI Global netwerk & resources' },
          { text: 'Concrete stappenplan voor internationale groei' },
          { text: 'Geen verplichtingen, 100% vrijblijvend' },
          { text: 'Directe inzichten van internationale experts' }
        ],
        ctaLabel: 'Claim jouw gratis strategiesessie',
        ctaSubtext: '30 minuten • Geheel vrijblijvend • Voor internationale projecten',
        ctaHref: '/contact'
      },
      // 10. InternationalFAQSection
      {
        blockType: 'internationalFAQSection',
        badge: 'Veelgestelde vragen',
        title: 'Vragen over internationale marketing?',
        subtitle: 'Andere vraag? Neem contact op met ons',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Of bel ons direct',
        phoneNumber: '+31850602989',
        faqs: [
          { id: 1, icon: 'Globe', question: 'Werkt dit echt voor mijn specifieke land?', answer: 'Ja. We hebben bewezen ervaring in Bali, Spanje, Oostenrijk, Portugal, Dubai en meer. Elke markt krijgt een op maat gemaakte aanpak.' },
          { id: 2, icon: 'DollarSign', question: 'Wat kost internationale marketing?', answer: 'Dit hangt af van jouw project, doelmarkten en budget. We werken transparant en op resultaat. Plan een gesprek voor een offerte op maat.' },
          { id: 3, icon: 'Users', question: 'Kan ik gebruik maken van het IQI netwerk?', answer: 'Ja, als partner krijg je toegang tot 40.000+ internationale agents, events en marketing resources van IQI Global.' },
          { id: 4, icon: 'Target', question: 'Hoe snel zie ik resultaten?', answer: 'De meeste projecten zien binnen 4-8 weken de eerste leads. Verkopen variëren per markt en project, maar gemiddeld binnen 3 maanden.' },
          { id: 5, icon: 'CheckCircle2', question: 'Werken jullie ook met kleinere projecten?', answer: 'We focussen op serieuze ontwikkelaars en makelaars met projecten vanaf €500K+ investering. Dit zorgt voor kwalitatieve samenwerking.' }
        ]
      },
    ],
  },
  en: {
    title: 'Marketing for international real estate agents | Real Accelerate',
    seo: {
      metaTitle: 'Marketing for international real estate agents | Real Accelerate',
      metaDescription: 'Marketing for Dutch real estate agents abroad. From Dubai to Spain - active worldwide with IQI Global.',
    },
    blocks: [
      // 1. InternationalHero
      {
        blockType: 'makelaarsInternationalHero',
        badgeText: 'For international property developers',
        iqiBadgeTitle: 'IQI Global Partner',
        iqiStats: [
          { id: 101, icon: 'Award', text: '150+ International Awards' },
          { id: 102, icon: 'DollarSign', text: '$50+ Billion Transactions' },
          { id: 103, icon: 'Users', text: '40,000+ Agents Worldwide' }
        ],
        countriesBadge: 'Dubai • Spain • Bali',
        quoteText: 'Proven results in international project sales',
        title: 'More buyers for your international real estate project',
        subtitle: 'Real Accelerate helps property developers and agents abroad generate qualified leads and concrete sales.',
        achievements: [
          { id: 101, icon: 'CheckCircle2', text: 'Bali: 400+ leads, 15 units sold in 3 months' },
          { id: 102, icon: 'CheckCircle2', text: 'Spain: 200+ warm leads, 10% conversion to appointment' },
          { id: 103, icon: 'CheckCircle2', text: 'Austria: Project completely sold out' }
        ],
        ctaPrimary: { label: 'Schedule a free growth call', action: 'openDialog' },
        ctaSecondary: { label: 'View international cases', href: '#cases' }
      },
      // 2. InternationalTrustStrip
      {
        blockType: 'makelaarsInternationalTrustStrip',
        trustItems: [
          { id: 101, text: 'Bali: 400+ leads, 15 units sold in 3 months' },
          { id: 102, text: 'Spain: 200+ warm leads, 10% conversion' },
          { id: 103, text: 'Austria: Alpine project completely sold out' },
          { id: 104, text: 'Active in Spain, Austria, Bali & Portugal' },
          { id: 105, text: 'Access to IQI Global network (40,000+ agents)' },
          { id: 106, text: 'Complete campaigns: from strategy to sales' },
          { id: 107, text: 'Real-time dashboards & transparent reporting' },
          { id: 108, text: 'Local events in Netherlands & Belgium' }
        ]
      },
      // 3. InternationalPainPointsSection
      {
        blockType: 'internationalPainPointsSection',
        badge: 'International challenges',
        title: 'Do you recognize these challenges in international real estate sales?',
        subtitle: 'Every market works differently and requires a specific approach. We understand the challenges property developers face.',
        painPoints: [
          {
            icon: 'Globe',
            title: 'Markets & cultural differences',
            description: 'Every market works differently: regulations, customs and expectations vary greatly between Bali, Spain and Austria.',
            image: '/images/placeholder.jpg'
          },
          {
            icon: 'Users',
            title: 'Limited reach among buyers',
            description: 'Traditional advertising or portals mainly deliver onlookers - not concrete buyers from the Netherlands or Germany.',
            image: '/images/placeholder.jpg'
          },
          {
            icon: 'DollarSign',
            title: 'Lack of local follow-up',
            description: 'Leads are not properly followed up due to time zones, language or lack of local partners who understand Dutch buyers.',
            image: '/images/placeholder.jpg'
          },
          {
            icon: 'AlertTriangle',
            title: 'No grip on marketing costs',
            description: 'High expenses on marketing and events without measurable return. You invest a lot but see few concrete results.',
            image: '/images/placeholder.jpg'
          }
        ],
        bottomInsightIcon: 'AlertTriangle',
        bottomInsightText: '<strong>The result:</strong> Your project gets attention, but no sales'
      },
      // 4-10: Remaining blocks...
      {
        blockType: 'internationalMethodologySection',
        badge: 'Our approach',
        title: 'From unknown project to sold out',
        subtitle: 'Our approach combines local market knowledge, IQI Global network and proven marketing campaigns',
        steps: [
          { icon: 'Target', stepNumber: '01', title: 'Project analysis', description: 'We start with a thorough analysis: target group, USPs, market positioning and sales structure. So we know exactly which buttons to press.' },
          { icon: 'Users', stepNumber: '02', title: 'Campaign & content production', description: 'We create targeted campaigns per market (NL, DE, BE) with visuals, video, funnel & landing pages. Everything 100% customized for your project.' },
          { icon: 'TrendingUp', stepNumber: '03', title: 'Lead generation & follow-up', description: 'We activate campaigns via Meta, LinkedIn & TikTok and engage IQI\'s international network. AI-driven follow-up ensures direct conversion.' },
          { icon: 'CheckCircle2', stepNumber: '04', title: 'Optimization & sales', description: 'We continuously optimize based on data. You get real-time dashboards, reports and sales support where needed. From lead to key.' }
        ]
      },
      {
        blockType: 'internationalCasesSection',
        badge: 'International results',
        title: 'From Netherlands to the world',
        subtitle: 'Discover how agents sell millions in international projects via IQI Global',
        cases: [
          {
            id: 101,
            name: "Bali Resort Development",
            role: "Tourist apartments",
            company: "Bali Paradise Villas",
            story: "International campaign targeting investors. More than 400 leads and 15 units sold within 3 months through our proven approach.",
            achievement: "15 units sold",
            metric: "400+ leads",
            avatar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Bali",
            projectValue: "15 units",
            span: "col-span-1"
          },
          {
            id: 102,
            name: "Costa Blanca Project",
            role: "New development Spain",
            company: "Mediterranean Estates",
            story: "Targeted campaigns delivered 200+ warm leads with a 10% conversion to appointment. Real Accelerate provided the complete marketing approach.",
            achievement: "200+ warm leads",
            metric: "10% conversion",
            avatar: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Spain",
            projectValue: "200+ leads",
            span: "col-span-1"
          },
          {
            id: 103,
            name: "Alpine Apartments",
            role: "Luxury project Austria",
            company: "Alpine Residences",
            story: "Positioning around return and experience. The project was completely sold out thanks to smart storytelling and targeted campaigns in DACH markets.",
            achievement: "Project sold out",
            metric: "100% sold",
            avatar: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            country: "Austria",
            projectValue: "Sold out",
            span: "col-span-1"
          }
        ],
        bottomInsightIcon: 'Target',
        bottomInsightText: '<strong>Total sold:</strong> €17.7M+ via IQI Global network in 2024'
      },
      {
        blockType: 'internationalGlobeSection',
        badge: 'Worldwide network',
        title: 'Access to IQI Global: 40,000+ agents worldwide',
        subtitle: 'Through our partnership with IQI Global you get access to an international network of professionals, events and marketing resources that promote your project worldwide.'
      },
      {
        blockType: 'internationalWhatYouGetSection',
        badge: 'What you get',
        title: 'Complete international project support',
        subtitle: 'From campaign to sales: we provide the complete approach so your project becomes internationally successful.',
        services: [
          { text: 'Campaign & funnel setup per country' },
          { text: 'Video production, visuals & landing pages' },
          { text: 'Lead nurturing & follow-up via AI' },
          { text: 'Local event organization & sales support' },
          { text: 'Real-time dashboards & performance tracking' },
          { text: 'Access to IQI Global network (40,000+ agents)' }
        ],
        guaranteesTitle: 'Our guarantees',
        guarantees: [
          { icon: 'Check', title: 'Results guarantee', items: [{ text: '• No results = no payment' }, { text: '• Risk-free collaboration' }] },
          { icon: 'Globe', title: 'IQI Global Power', items: [{ text: '• 40,000+ professionals network' }, { text: '• 150+ awards & Forbes recognition' }] }
        ],
        bonusIcon: 'Gem',
        bonusTitle: 'BONUS: Local translations & culture matching',
        bonusDescription: 'Complete localization for DACH and Benelux markets',
        bonusItems: [
          { text: '• Professional translations for all countries' },
          { text: '• Culture-specific approach per target group' }
        ]
      },
      {
        blockType: 'internationalForWhoIsThisSection',
        badge: 'Who is this for?',
        title: 'Perfect for developers with international ambition',
        subtitle: 'Our approach works best for property developers and agents who want to effectively market their international projects',
        perfectForTitle: 'Perfect for developers who:',
        perfectForItems: [
          { icon: 'Globe', title: 'Have projects in Southern Europe or Asia', description: 'Property developers with projects in Spain, Austria, Bali or other international markets.' },
          { icon: 'DollarSign', title: 'Have exclusive international listings', description: 'Agents with unique international propositions who want to reach Dutch and German buyers.' },
          { icon: 'Users', title: 'Develop resort or new build projects', description: 'Investment companies that want to grow scalably with marketing automation.' },
          { icon: 'CheckCircle2', title: 'Want to scale up with professional marketing', description: 'Sales organizations willing to invest in proven marketing strategies and follow-up.' }
        ],
        notForTitle: 'Not suitable for:',
        notForItems: [
          { text: 'Projects without clear sales structure or without commitment to professional marketing' },
          { text: 'Developers who don\'t want to invest in marketing or follow-up, and look for quick wins without strategy' }
        ],
        bottomInsightIcon: 'Globe',
        bottomInsightText: '<strong>Do you recognize yourself?</strong> Then you\'re ready for the next step to international growth'
      },
      {
        blockType: 'internationalStrategySessionCTA',
        title: 'Ready to launch your international project',
        highlightText: 'globally?',
        subtitle: 'Schedule a free strategy call and discover how we bring your project from unknown to sold out.',
        benefits: [
          { text: 'Analysis of your project & target markets' },
          { text: 'Access to IQI Global network & resources' },
          { text: 'Concrete roadmap for international growth' },
          { text: 'No obligations, 100% non-binding' },
          { text: 'Direct insights from international experts' }
        ],
        ctaLabel: 'Claim your free strategy session',
        ctaFooter: '30 min • Completely non-binding • Directly applicable insights',
        bonusText: 'Access to our international network via IQI Global'
      },
      {
        blockType: 'internationalFAQSection',
        badge: 'Frequently asked questions',
        title: 'Questions about international marketing?',
        subtitle: 'Other question? Contact our',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Or call us directly',
        phoneNumber: '+31850602989',
        faqs: [
          { id: 101, icon: 'Globe', question: 'Does this really work for my specific country?', answer: 'Yes. We have proven experience in Bali, Spain, Austria, Portugal, Dubai and more. Each market gets a customized approach.' },
          { id: 102, icon: 'DollarSign', question: 'What does international marketing cost?', answer: 'This depends on your project, target markets and budget. We work transparently and results-based. Schedule a call for a custom quote.' },
          { id: 103, icon: 'Users', question: 'Can I use the IQI network?', answer: 'Yes, as a partner you get access to 40,000+ international agents, events and marketing resources from IQI Global.' },
          { id: 104, icon: 'Target', question: 'How quickly will I see results?', answer: 'Most projects see first leads within 4-8 weeks. Sales vary per market and project, but average within 3 months.' },
          { id: 105, icon: 'CheckCircle2', question: 'Do you also work with smaller projects?', answer: 'We focus on serious developers and agents with projects from €500K+ investment. This ensures quality collaboration.' }
        ]
      },
    ],
  },
}

async function migrate() {
  const PAGE_SLUG = '/makelaars-buitenland'
  
  console.log(`🚀 Starting ${PAGE_SLUG} page migration...\n`)
  
  try {
    // Set defaults if not in environment
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }
    
    const payload = await getPayload({ config })
    console.log('✅ Payload initialized\n')
    
    // Check if page exists
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
    
    if (existing.docs.length > 0) {
      console.log(`📝 Page exists, updating both locales...\n`)
      
      // Update NL locale
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
      
      // Update EN locale
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
      
      // Publish the page
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
      console.log(`📝 Creating new page...\n`)
      
      // Create with NL first
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
      
      // Update with EN content
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
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log(`👉 NL: http://localhost:3001${PAGE_SLUG}`)
    console.log(`👉 EN: http://localhost:3001/en${PAGE_SLUG}\n`)
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
