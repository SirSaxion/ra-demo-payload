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
    title: 'Makelaars',
    seo: {
      metaTitle: 'Makelaar marketing | Real Accelerate',
      metaDescription: 'Groei je makelaarskantoor met bewezen marketing strategieën uit de praktijk. Van drukte naar structurele groei. Door makelaars, voor makelaars.',
    },
    blocks: [
      // 1. Hero
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
          { src: '/images/brabantmakelaar_avatar.webp', alt: 'Amory - De Brabant Makelaar', tilt: '-rotate-1' },
          { src: '/images/binkpartners_avatar.webp', alt: 'Pieter - Bink & Partners', tilt: 'rotate-3' },
          { src: '/images/paulthijssen_avatar.webp', alt: 'Paul - Paul Thijssen Makelaardij', tilt: '-rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Makelaar 5', tilt: 'rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Makelaar 6', tilt: '-rotate-3' },
          { src: '/images/cat3.png', alt: 'Makelaar 7', tilt: 'rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Makelaar 8', tilt: '-rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Makelaar 9', tilt: 'rotate-3' },
          { src: '/images/cat3.png', alt: 'Makelaar 10', tilt: '-rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Makelaar 11', tilt: 'rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Makelaar 12', tilt: '-rotate-1' }
        ],
        floatingStats: [
          { title: '30+ jaar', subtitle: 'Gecombineerde ervaring' },
          { title: 'SETTL.', subtitle: 'Eigen makelaarskantoor' }
        ],
        testimonialQuote: 'Honderden makelaars geholpen sinds 2021'
      },
      // 2. TrustStrip
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
      // 3. ProblemSection  
      {
        blockType: 'makelaarsProblemSection',
        kicker: 'De uitdaging',
        title: 'De uitdaging voor makelaarskantoren',
        subtitle: 'Veel makelaarskantoren draaien volle agenda\'s en hebben een continue stroom telefoontjes, maar groeien toch niet door. We zien het dagelijks bij onze klanten – en we hebben het zelf ook ervaren met SETTL.',
        oldWayTitle: 'HUIDIGE SITUATIE',
        oldWaySubtitle: 'Waar veel kantoren tegenaan lopen',
        problems: [
          { text: 'Tijd en energie gaan verloren aan ad hoc werk', icon: 'AlertTriangle' },
          { text: 'Dure marketingplatformen leveren weinig op', icon: 'DollarSign' },
          { text: 'Processen zijn versnipperd en niet schaalbaar', icon: 'TrendingDown' },
          { text: 'Drukte zonder duurzame groei', icon: 'Swords' }
        ],
        newWayTitle: 'ONZE AANPAK',
        newWaySubtitle: 'Hoe wij helpen',
        solutions: [
          { text: 'Bewezen strategieën en systemen', icon: 'CheckCircle2' },
          { text: 'Efficiëntere processen en automatisering', icon: 'Target' },
          { text: 'Structureel bouwen aan een schaalbaar kantoor', icon: 'Users' },
          { text: 'Ervaring uit de praktijk met SETTL.', icon: 'CheckCircle2' }
        ],
        bottomInsight: '<strong>Wij weten hoe dat voelt –</strong> en vooral: hoe je er vanaf komt'
      },
      // 4. MethodologySection
      {
        blockType: 'makelaarsMethodologySection',
        kicker: 'Onze werkwijze',
        title: 'Van drukte naar duurzame groei',
        subtitle: 'Met Real Accelerate zetten we makelaarskantoren om van reactief werken naar voorspelbare groei. Dat doen we in 3 stappen:',
        steps: [
          {
            title: 'INZICHT KRIJGEN',
            subtitle: 'Stap 1',
            description: 'Analyse van je huidige processen, marketing en resultaten. We brengen in kaart waar je nu staat en welke uitdagingen je tegenkomt.',
            icon: 'Target'
          },
          {
            title: 'SLIMMER WERKEN',
            subtitle: 'Stap 2',
            description: 'Bewezen systemen, marketingstrategieën en automatisering inzetten. We optimaliseren je processen zodat je efficiënt werkt.',
            icon: 'Target'
          },
          {
            title: 'SAMEN DOORGROEIEN',
            subtitle: 'Stap 3',
            description: 'Structureel bouwen aan een sterker en schaalbaar kantoor. We blijven je ondersteunen bij groei en uitdagingen.',
            icon: 'TrendingUp'
          }
        ]
      },
      // 5. BewezenSysteemSection
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
        quote: 'Daarom begrijpen wij makelaarskantoren beter dan wie dan ook: we kennen de uitdagingen én de oplossingen.'
      },
      // 6. ResultsBentoGrid
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
            description: 'Van 2 naar 8 werknemers in 18 maanden tijd. Complete transformatie van klein kantoor naar groeiend bedrijf.',
            icon: 'DollarSign',
            featured: true
          },
          {
            company: 'MARCO VAN BARNEVELD',
            image: '/images/10.EmiroSmolders-Settle-DSC06970-.jpg',
            mainMetric: '4 nieuwe franchise locaties',
            description: 'Pipeline vol voor meer groei. Succesvolle uitbreiding door bewezen systeem.',
            icon: 'Building2'
          },
          {
            company: 'THOMA POST',
            image: '/images/teamfoto_einde.png',
            mainMetric: '31 afspraken eerste maand',
            description: 'Directe resultaten vanaf dag één. Bewezen aanpak die werkt.',
            icon: 'Target'
          }
        ],
        bottomInsight: '<strong>Efficiëntere processen,</strong> een sterkere merkpositionering, meer voorspelbare afspraken en omzet, en meer tijd voor klanten door automatisering',
        ctaLabel: 'Lees ervaringen van makelaars',
        ctaHref: '/cases'
      },
      // 7. GuaranteesSection
      {
        blockType: 'makelaarsGuaranteesSection',
        kicker: 'Waarom wij',
        title: 'Waarom makelaars kiezen voor Real Accelerate',
        subtitle: 'Wij zijn geen traditioneel marketingbureau – wij begrijpen de vastgoedbranche van binnenuit',
        cards: [
          {
            title: 'Ervaring uit de praktijk',
            subtitle: 'Wij zijn zelf makelaars en staan dagelijks in de markt',
            icon: 'Target',
            items: [
              { text: '<strong>Ervaring uit de praktijk</strong> – wij zijn zelf makelaars' },
              { text: '<strong>Transparant, no-nonsense</strong> samenwerken' },
              { text: '<strong>Bewezen strategieën</strong> en systemen' }
            ]
          },
          {
            title: 'Onze focus',
            subtitle: 'Altijd gericht op resultaat en duurzame groei voor jouw kantoor',
            icon: 'Users',
            items: [
              { text: '<strong>Altijd gericht op duurzame groei</strong> en schaalbare resultaten' },
              { text: '<strong>Persoonlijk en menselijk</strong> in onze aanpak' }
            ]
          }
        ]
      },
      // 8. WhatYouGetSection
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
        bonusDescription: 'Wil je meer weten over hoe wij jouw kantoor kunnen helpen groeien? Neem contact op voor een vrijblijvend gesprek.'
      },
      // 9. ForWhoIsThisSection
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
          { text: 'Wie niet openstaat voor innovatie of nieuwe aanpakken' }
        ],
        bottomInsight: '<strong>Herken je dit?</strong> Neem dan contact op voor een vrijblijvend gesprek'
      },
      // 10. StrategieSessionCTA
      {
        blockType: 'makelaarsStrategieSessionCTA',
        title: 'Klaar om je makelaarskantoor naar het volgende niveau te brengen?',
        subtitle: 'Of je nu meer structuur zoekt, je marketing wilt verbeteren of simpelweg efficiënt werken – wij helpen je verder.',
        benefits: [
          { text: 'Analyse van jouw huidige situatie en groeidoelen' },
          { text: 'Identificatie knelpunten die jou tegenhouden' },
          { text: 'Concreet plan om doelstellingen te behalen' },
          { text: 'Vrijblijvend kennismakingsgesprek' },
          { text: 'Direct bruikbare adviezen' },
          { text: 'Persoonlijke aanpak voor jouw kantoor' }
        ],
        ctaLabel: 'Claim je gratis strategiesessie',
        ctaSubtext: '30 minuten • Volledig vrijblijvend • Voor groeiende makelaarskantoren',
        ctaHref: '/contact'
      },
      // 11. FAQSection
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
            answer: 'We werken met pakketten op maat. Tijdens een intake bespreken we de investering en verwachte resultaten.',
            icon: 'Target'
          },
          {
            question: 'Moet ik alles uit handen geven?',
            answer: 'Nee, je bepaalt zelf of je volledig ontzorgd wilt worden of liever samenwerkt.',
            icon: 'Users'
          },
          {
            question: 'Wat maakt Real Accelerate anders?',
            answer: 'Wij zijn makelaars én adviseurs. Wij praten niet vanaf de zijlijn, maar helpen met bewezen oplossingen uit de praktijk.',
            icon: 'AlertTriangle'
          }
        ]
      },
    ],
  },
  en: {
    title: 'Real Estate Agents',
    seo: {
      metaTitle: 'Real estate agent marketing | Real Accelerate',
      metaDescription: 'Grow your real estate agency with proven marketing strategies from practice. From busy to structural growth. By agents, for agents.',
    },
    blocks: [
      // 1. Hero
      {
        blockType: 'makelaarsHero',
        kicker: 'For growing real estate agencies',
        title: 'Grow smarter with your real estate agency',
        subtitle: 'At Real Accelerate, we help real estate agencies grow with proven strategies, more efficient processes, and practical support. No theory, but implementing what truly works – directly from the practice of our own real estate agency SETTL. and the clients we guide daily.',
        ctaPrimary: {
          label: 'Schedule a free strategy session',
          href: '/contact'
        },
        ctaSecondary: {
          label: 'Discover our approach',
          href: '#methodologie'
        },
        trustIndicators: [
          { text: '30-minute strategy session' },
          { text: 'Completely non-binding' },
          { text: 'Directly usable insights' }
        ],
        avatarsTitle: 'Join 200+ successful real estate agents',
        avatars: [
          { src: '/images/brabantmakelaar_avatar.webp', alt: 'Amory - De Brabant Makelaar', tilt: '-rotate-1' },
          { src: '/images/binkpartners_avatar.webp', alt: 'Pieter - Bink & Partners', tilt: 'rotate-3' },
          { src: '/images/paulthijssen_avatar.webp', alt: 'Paul - Paul Thijssen Makelaardij', tilt: '-rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Agent 5', tilt: 'rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Agent 6', tilt: '-rotate-3' },
          { src: '/images/cat3.png', alt: 'Agent 7', tilt: 'rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Agent 8', tilt: '-rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Agent 9', tilt: 'rotate-3' },
          { src: '/images/cat3.png', alt: 'Agent 10', tilt: '-rotate-2' },
          { src: '/images/cat1.jpeg', alt: 'Agent 11', tilt: 'rotate-1' },
          { src: '/images/cat2.jpeg', alt: 'Agent 12', tilt: '-rotate-1' }
        ],
        floatingStats: [
          { title: '30+ years', subtitle: 'Combined experience' },
          { title: 'SETTL.', subtitle: 'Own real estate agency' }
        ],
        testimonialQuote: 'Helped hundreds of agents since 2021'
      },
      // 2. TrustStrip
      {
        blockType: 'makelaarsTrustStrip',
        trustItems: [
          { text: '30+ years marketing experience' },
          { text: 'Active as agents with SETTL.' },
          { text: '€10k → €100k revenue with our clients' },
          { text: 'Proven strategies from practice' },
          { text: 'From 2 to 8 employees in 18 months' },
          { text: 'No dependency on expensive lead platforms' },
          { text: 'Transparent and result-oriented' },
          { text: 'Complete support from A to Z' }
        ]
      },
      // 3. ProblemSection
      {
        blockType: 'makelaarsProblemSection',
        kicker: 'The challenge',
        title: 'The challenge for real estate agencies',
        subtitle: 'Many agencies run full agendas and have a continuous stream of phone calls, but still don\'t grow. We see it daily with our clients – and we\'ve experienced it ourselves with SETTL.',
        oldWayTitle: 'CURRENT SITUATION',
        oldWaySubtitle: 'What many agencies face',
        problems: [
          { text: 'Time and energy lost on ad hoc work', icon: 'AlertTriangle' },
          { text: 'Expensive marketing platforms deliver little', icon: 'DollarSign' },
          { text: 'Processes are fragmented and not scalable', icon: 'TrendingDown' },
          { text: 'Busy without sustainable growth', icon: 'Swords' }
        ],
        newWayTitle: 'OUR APPROACH',
        newWaySubtitle: 'How we help',
        solutions: [
          { text: 'Proven strategies and systems', icon: 'CheckCircle2' },
          { text: 'More efficient processes and automation', icon: 'Target' },
          { text: 'Structurally building a scalable agency', icon: 'Users' },
          { text: 'Experience from practice with SETTL.', icon: 'CheckCircle2' }
        ],
        bottomInsight: '<strong>We know how that feels –</strong> and especially: how to overcome it'
      },
      // 4. MethodologySection
      {
        blockType: 'makelaarsMethodologySection',
        kicker: 'Our approach',
        title: 'From busy to sustainable growth',
        subtitle: 'With Real Accelerate, we transform real estate agencies from reactive work to predictable growth. We do this in 3 steps:',
        steps: [
          {
            title: 'GAIN INSIGHT',
            subtitle: 'Step 1',
            description: 'Analysis of your current processes, marketing and results. We map where you stand now and which challenges you face.',
            icon: 'Target'
          },
          {
            title: 'WORK SMARTER',
            subtitle: 'Step 2',
            description: 'Deploy proven systems, marketing strategies and automation. We optimize your processes so you work efficiently.',
            icon: 'Target'
          },
          {
            title: 'GROW TOGETHER',
            subtitle: 'Step 3',
            description: 'Structurally building a stronger and scalable agency. We continue to support you with growth and challenges.',
            icon: 'TrendingUp'
          }
        ]
      },
      // 5. BewezenSysteemSection
      {
        blockType: 'makelaarsBewezenSysteemSection',
        kicker: 'Our experience',
        title: 'Experience from the industry – we\'re in the middle of it',
        subtitle: 'Real Accelerate is not a traditional marketing agency. We are real estate agents. With <strong>SETTL.</strong> we are daily in the market. Everything we do for our clients, we have tested, improved and proven ourselves.',
        imageSrc: '/images/emiro_working_at_desk.png',
        imageAlt: 'Emiro working at his desk',
        benefitsTitle: 'WHY THIS MAKES A DIFFERENCE',
        benefits: [
          { text: 'Experience from practice – we are agents ourselves' },
          { text: 'Transparent, no-nonsense collaboration' },
          { text: 'Proven strategies and systems' },
          { text: 'Always focused on sustainable growth' },
          { text: 'Personal and human in our approach' }
        ],
        quote: 'That\'s why we understand real estate agencies better than anyone: we know the challenges and the solutions.'
      },
      // 6. ResultsBentoGrid
      {
        blockType: 'makelaarsResultsBentoGrid',
        kicker: 'Results from practice',
        title: 'Proven results from agents',
        subtitle: 'Our clients are real estate agencies that want to work smarter and grow faster. With our approach they see among others:',
        results: [
          {
            company: 'DE BRABANT MAKELAAR',
            logo: '/images/brabantmakelaar_logo.webp',
            image: '/images/1.EmiroSmolders-Settle-DSC06894-.webp',
            mainMetric: '€10k → €100k/month',
            description: 'From 2 to 8 employees in 18 months. Complete transformation from small office to growing business.',
            icon: 'DollarSign',
            featured: true
          },
          {
            company: 'MARCO VAN BARNEVELD',
            image: '/images/10.EmiroSmolders-Settle-DSC06970-.jpg',
            mainMetric: '4 new franchise locations',
            description: 'Pipeline full for more growth. Successful expansion through proven system.',
            icon: 'Building2'
          },
          {
            company: 'THOMA POST',
            image: '/images/teamfoto_einde.png',
            mainMetric: '31 appointments first month',
            description: 'Direct results from day one. Proven approach that works.',
            icon: 'Target'
          }
        ],
        bottomInsight: '<strong>More efficient processes,</strong> stronger brand positioning, more predictable appointments and revenue, and more time for clients through automation',
        ctaLabel: 'Read experiences from agents',
        ctaHref: '/cases'
      },
      // 7. GuaranteesSection
      {
        blockType: 'makelaarsGuaranteesSection',
        kicker: 'Why us',
        title: 'Why agents choose Real Accelerate',
        subtitle: 'We are not a traditional marketing agency – we understand the real estate industry from within',
        cards: [
          {
            title: 'Experience from practice',
            subtitle: 'We are agents ourselves and are daily in the market',
            icon: 'Target',
            items: [
              { text: '<strong>Experience from practice</strong> – we are agents ourselves' },
              { text: '<strong>Transparent, no-nonsense</strong> collaboration' },
              { text: '<strong>Proven strategies</strong> and systems' }
            ]
          },
          {
            title: 'Our focus',
            subtitle: 'Always focused on results and sustainable growth for your agency',
            icon: 'Users',
            items: [
              { text: '<strong>Always focused on sustainable growth</strong> and scalable results' },
              { text: '<strong>Personal and human</strong> in our approach' }
            ]
          }
        ]
      },
      // 8. WhatYouGetSection
      {
        blockType: 'makelaarsWhatYouGetSection',
        kicker: 'What you get',
        title: 'More than a marketing campaign',
        subtitle: 'We don\'t just help real estate agencies with marketing or visibility. We help build the entire foundation of your agency:',
        services: [
          { text: 'Branding and positioning' },
          { text: 'Online marketing and campaigns' },
          { text: 'Process optimization and automation' },
          { text: 'Growth and scaling strategies' }
        ],
        bonusTitle: 'Discover our solutions',
        bonusDescription: 'Want to know more about how we can help your agency grow? Contact us for a non-binding conversation.'
      },
      // 9. ForWhoIsThisSection
      {
        blockType: 'makelaarsForWhoIsThisSection',
        kicker: 'Who is this for?',
        title: 'For which agents is this interesting?',
        subtitle: 'Our approach fits real estate agencies that:',
        perfectFor: [
          { text: 'Are done with expensive and unpredictable lead platforms' },
          { text: 'Want more efficient processes and structure' },
          { text: 'Want to build a strong brand in their region' },
          { text: 'Want to grow future-proof and scalable' }
        ],
        notForTitle: 'Not suitable for:',
        notFor: [
          { text: 'Price fighters without focus on quality' },
          { text: 'Advisors satisfied with their current dependency' },
          { text: 'Those not open to innovation or new approaches' }
        ],
        bottomInsight: '<strong>Do you recognize this?</strong> Then contact us for a non-binding conversation'
      },
      // 10. StrategieSessionCTA
      {
        blockType: 'makelaarsStrategieSessionCTA',
        title: 'Ready to take your real estate agency to the next level?',
        subtitle: 'Whether you\'re looking for more structure, want to improve your marketing or simply work efficiently – we help you forward.',
        benefits: [
          { text: 'Analysis of your current situation and growth goals' },
          { text: 'Identification of bottlenecks holding you back' },
          { text: 'Concrete plan to achieve objectives' },
          { text: 'Non-binding introductory meeting' },
          { text: 'Directly usable advice' },
          { text: 'Personal approach for your agency' }
        ],
        ctaLabel: 'Claim your free strategy session',
        ctaSubtext: '30 minutes • Completely non-binding • For growing real estate agencies',
        ctaHref: '/contact'
      },
      // 11. FAQSection
      {
        blockType: 'makelaarsFAQSection',
        kicker: 'Frequently Asked Questions',
        title: 'Questions from agents',
        subtitle: 'Do you have other questions? Contact our',
        contactLinkText: 'support team',
        contactLinkHref: '/contact',
        phoneLabel: 'Other question?',
        phoneNumber: '+31850602989',
        faqs: [
          {
            question: 'How quickly do I see results?',
            answer: 'Depending on your current situation, many agencies see improvement within a few weeks.',
            icon: 'Clock'
          },
          {
            question: 'Does this work in my region?',
            answer: 'Yes, our approach is flexible and adaptable per market area.',
            icon: 'Home'
          },
          {
            question: 'What does it cost?',
            answer: 'We work with customized packages. During an intake we discuss the investment and expected results.',
            icon: 'Target'
          },
          {
            question: 'Do I have to hand over everything?',
            answer: 'No, you decide whether you want to be completely unburdened or prefer to collaborate.',
            icon: 'Users'
          },
          {
            question: 'What makes Real Accelerate different?',
            answer: 'We are agents and advisors. We don\'t talk from the sidelines, but help with proven solutions from practice.',
            icon: 'AlertTriangle'
          }
        ]
      },
    ],
  },
}

async function migrate() {
  const PAGE_SLUG = '/makelaars'
  
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
