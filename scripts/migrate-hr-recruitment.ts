import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const PAGE_SLUG = '/hr-recruitment'

const pageData = {
  nl: {
    title: 'HR & Recruitment',
    seo: {
      metaTitle: 'HR & Recruitment Marketing | Real Accelerate',
      metaDescription: 'Stop met jagen op kandidaten. Krijg een wachtrij van gekwalificeerde kandidaten die bij jouw organisatie passen.',
    },
    blocks: [
      // 1. Hero
      {
        blockType: 'hrRecruitmentHero',
        badge: 'Voor HR-professionals',
        titleBefore: 'Stop met jagen op',
        titleHighlight: 'kandidaten',
        subtitle: 'Krijg een wachtrij van <strong>gekwalificeerde kandidaten</strong> die bij jouw organisatie passen',
      },
      // 2. Trust Strip
      {
        blockType: 'hrRecruitmentTrustStrip',
        items: [
          { text: '50+ HR-teams geholpen' },
          { text: 'Recruitment marketing experts' },
          { text: 'Samen 20+ jaar HR ervaring' },
          { text: 'Bewezen methodologie' },
          { text: 'Employer branding specialisten' },
          { text: 'Talent attraction focus' },
          { text: '73% meer sollicitaties gemiddeld' },
          { text: '3x sneller vacatures vullen' },
          { text: 'Dedicated HR-specialisten' },
          { text: 'Resultaatgerichte aanpak' }
        ],
        ariaLabel: 'Vertrouwen en ervaring',
      },
      // 3. Pain Points
      {
        blockType: 'hrRecruitmentPainPoints',
        badge: 'De 3 grootste frustraties',
        title: 'Herken je dit?',
        subtitle: 'Als HR-professional loop je vast in dezelfde patronen',
        painPoints: [
          {
            icon: 'UserX',
            title: 'Sollicitaties blijven uit',
            description: 'Je vacatures staan online, maar de kwaliteitskandidaten reageren niet. Je bereik is te klein en je werkgeversmerk niet sterk genoeg.',
            imageAlt: 'Sollicitaties blijven uit',
          },
          {
            icon: 'XCircle',
            title: 'Kandidaten haken af',
            description: 'Je komt ver in het proces, maar op het laatste moment kiezen kandidaten toch voor de concurrent. Je employee value proposition is niet overtuigend genoeg.',
            imageAlt: 'Kandidaten haken af',
          },
          {
            icon: 'FileQuestion',
            title: 'Kwaliteit sluit niet aan',
            description: 'Je krijgt sollicitaties, maar de kandidaten matchen niet met je eisen. Je screening proces is inefficiënt en kost te veel tijd.',
            imageAlt: 'Kwaliteit sluit niet aan',
          },
        ],
        bottomText: 'Het gevolg: Vacatures blijven maandenlang open, teams raken overbelast en groei stagneert',
      },
      // 4. Transformation
      {
        blockType: 'hrRecruitmentTransformation',
        badge: 'Van reactief naar proactief',
        title: 'De transformatie',
        oldWayTitle: 'TRADITIONELE AANPAK',
        oldWaySubtitle: 'De oude manier',
        oldWayItems: [
          { text: 'Vacatures plaatsen en wachten' },
          { text: 'Dure jobbboards zonder resultaat' },
          { text: 'Onderkwalificeerde sollicitanten' },
          { text: 'Lange time-to-hire' },
        ],
        newWayTitle: 'REAL ACCELERATE HR',
        newWaySubtitle: 'Onze methode',
        newWayItems: [
          { text: 'Proactief talent pipeline opbouwen' },
          { text: 'Sterk werkgeversmerk neerzetten' },
          { text: 'Gekwalificeerde kandidaten aantrekken' },
          { text: '3x sneller vacatures vullen' },
        ],
      },
      // 5. Methodology
      {
        blockType: 'hrRecruitmentMethodology',
        badge: 'Onze bewezen aanpak',
        title: 'Hoe we dit aanpakken',
        subtitle: '4 stappen naar een recruitment machine',
        steps: [
          {
            icon: 'Target',
            title: 'WERKGEVERSMERK',
            subtitle: 'Stap 1',
            description: 'We bouwen een aantrekkelijk werkgeversmerk dat top talent aantrekt. Jouw organisatie wordt de plek waar mensen willen werken.',
          },
          {
            icon: 'Search',
            title: 'TALENT PIPELINE',
            subtitle: 'Stap 2',
            description: 'We creëren een continue stroom van gekwalificeerde kandidaten door strategische content en gerichte campagnes.',
          },
          {
            icon: 'Users',
            title: 'KANDIDAAT ENGAGEMENT',
            subtitle: 'Stap 3',
            description: 'We bouwen relaties met potentiële kandidaten voordat je ze nodig hebt, zodat je altijd een warme pool hebt.',
          },
          {
            icon: 'TrendingUp',
            title: 'CONVERSIE & GROEI',
            subtitle: 'Stap 4',
            description: 'We optimaliseren het proces continu voor betere resultaten en snellere time-to-hire met hogere kwaliteit.',
          },
        ],
        bottomText: 'Het resultaat: Een recruitment machine die 24/7 werkt aan jouw talent pipeline',
      },
      // 6. Resultaten Bento Grid
      {
        blockType: 'hrRecruitmentResultatenBentoGrid',
        badge: 'Bewezen resultaten',
        title: 'Wat onze klanten bereiken',
        results: [
          { metric: '65%', description: 'Meer sollicitaties binnen 3 maanden' },
          { metric: '3x', description: 'Sneller vacatures vullen' },
          { metric: '40%', description: 'Hogere kwaliteit kandidaten' },
          { metric: '€50k+', description: 'Besparing op recruitment fees per jaar' },
        ],
      },
      // 7. Wat Je Krijgt
      {
        blockType: 'hrRecruitmentWatJeKrijgt',
        badge: 'Wat je krijgt',
        title: 'Complete HR recruitment transformatie',
        subtitle: 'Een 360-graden aanpak voor duurzame resultaten',
        features: [
          {
            icon: 'Target',
            title: 'Werkgeversmerk ontwikkeling',
            description: 'Complete employer branding strategie met visual identity, messaging en content om jouw organisatie aantrekkelijk te positioneren.',
          },
          {
            icon: 'Zap',
            title: 'Talent attraction campagnes',
            description: 'Gerichte multi-channel campagnes om passief talent te bereiken op LinkedIn, Instagram en andere platforms waar jouw ideale kandidaten zijn.',
          },
          {
            icon: 'MessageSquare',
            title: 'Geautomatiseerde nurturing',
            description: 'Slimme email sequences en content flows die kandidaten warm houden tot het perfecte moment. Persoonlijk en geautomatiseerd.',
          },
          {
            icon: 'Users',
            title: 'Persoonlijke begeleiding',
            description: 'Dedicated HR recruitment specialist die jouw account beheert, strategie optimaliseert en je team ondersteunt bij implementatie.',
          },
        ],
        bonusTitle: 'Plus als bonus:',
        bonusItems: [
          { text: 'Maandelijkse performance reviews en optimalisatie sessies' },
          { text: 'Dashboard met real-time inzichten in je talent pipeline' },
          { text: 'Training voor jouw HR team in moderne recruitment marketing' },
        ],
      },
      // 8. Voor Wie Is Dit
      {
        blockType: 'hrRecruitmentVoorWieIsDit',
        badge: 'Voor wie is dit?',
        title: 'Is dit de juiste fit voor jou?',
        perfectForTitle: 'Perfect voor:',
        perfectForItems: [
          { text: 'Scale-ups en MKB die willen groeien' },
          { text: 'Bedrijven met 10-500 medewerkers' },
          { text: 'HR-teams die te veel tijd kwijt zijn aan sourcing' },
          { text: 'Organisaties met lastig te vullen vacatures' },
        ],
        notSuitableTitle: 'Minder geschikt voor:',
        notSuitableItems: [
          { text: 'Eenmalige vacatures' },
          { text: 'Alleen uitzend- of tijdelijk personeel' },
          { text: 'Bedrijven zonder groeiambitie' },
        ],
      },
      // 9. Strategie Session CTA
      {
        blockType: 'hrRecruitmentStrategieSessionCTA',
        title: 'Klaar voor meer sollicitaties?',
        subtitle: 'Plan een gratis recruitment analyse',
        ctaLabel: 'Plan gratis analyse',
      },
      // 10. FAQ
      {
        blockType: 'hrRecruitmentFAQ',
        badge: 'Veelgestelde vragen',
        title: 'Vragen over HR recruitment',
        subtitle: 'Alles wat je wilt weten',
        faqs: [
          {
            icon: 'HelpCircle',
            question: 'Hoe snel kan ik resultaten verwachten?',
            answer: 'De eerste gekwalificeerde kandidaten zie je binnen 2-4 weken. Een volledige talent pipeline bouw je op in 2-3 maanden. De snelheid hangt af van je doelgroep en de competitiviteit van je sector.',
          },
          {
            icon: 'DollarSign',
            question: 'Wat zijn de investering en contractvoorwaarden?',
            answer: 'We werken met flexibele abonnementen vanaf €2.500 per maand. Je kunt maandelijks opzeggen, maar we adviseren minimaal 3 maanden voor optimale resultaten. Geen setup fees of verborgen kosten.',
          },
          {
            icon: 'Users',
            question: 'Voor welke type vacatures werkt dit?',
            answer: 'Onze aanpak werkt uitstekend voor knowledge workers, specialisten en leidinggevende functies. Van IT tot Finance, van Marketing tot HR. Minder geschikt voor grote volumes operationele functies.',
          },
          {
            icon: 'Target',
            question: 'Hoe verschilt dit van een traditioneel recruitment bureau?',
            answer: 'Wij bouwen een structurele oplossing in plaats van per vacature te werken. Je krijgt een continue stroom kandidaten, betere employer branding en lagere kosten per hire. Plus: je blijft eigenaar van alle kandidaten.',
          },
          {
            icon: 'Zap',
            question: 'Moet ons HR-team hier veel tijd in steken?',
            answer: 'Minimaal. Wij regelen de campagnes, content en nurturing. Jouw team hoeft alleen gekwalificeerde kandidaten te screenen en interviewen. Gemiddeld 2-4 uur per week na de setup fase.',
          },
          {
            icon: 'Shield',
            question: 'Wat als het niet werkt voor ons?',
            answer: 'We starten altijd met een strategie sessie om te valideren of onze aanpak past. Als je na 3 maanden niet tevreden bent, kun je stoppen. Geen langlopende contracten of exit fees.',
          },
        ],
        contactText: 'Andere vraag? Bel ons',
        phoneLabel: '088 - 022 00 20',
      },
    ],
  },
  en: {
    title: 'HR & Recruitment',
    seo: {
      metaTitle: 'HR & Recruitment Marketing | Real Accelerate',
      metaDescription: 'Stop chasing candidates. Get a queue of qualified candidates that fit your organization.',
    },
    blocks: [
      // 1. Hero
      {
        blockType: 'hrRecruitmentHero',
        badge: 'For HR professionals',
        titleBefore: 'Stop chasing',
        titleHighlight: 'candidates',
        subtitle: 'Get a queue of <strong>qualified candidates</strong> that fit your organization',
      },
      // 2. Trust Strip
      {
        blockType: 'hrRecruitmentTrustStrip',
        items: [
          { text: '50+ HR teams helped' },
          { text: 'Recruitment marketing experts' },
          { text: '20+ years combined HR experience' },
          { text: 'Proven methodology' },
          { text: 'Employer branding specialists' },
          { text: 'Talent attraction focus' },
          { text: '73% more applications on average' },
          { text: 'Fill vacancies 3x faster' },
          { text: 'Dedicated HR specialists' },
          { text: 'Results-driven approach' }
        ],
        ariaLabel: 'Trust and experience',
      },
      // 3. Pain Points
      {
        blockType: 'hrRecruitmentPainPoints',
        badge: 'The 3 biggest frustrations',
        title: 'Do you recognize this?',
        subtitle: 'As an HR professional, you get stuck in the same patterns',
        painPoints: [
          {
            icon: 'UserX',
            title: 'Applications stay away',
            description: 'Your vacancies are online, but quality candidates are not responding. Your reach is too small and your employer brand not strong enough.',
            imageAlt: 'Applications stay away',
          },
          {
            icon: 'XCircle',
            title: 'Candidates drop out',
            description: 'You get far in the process, but at the last moment candidates still choose the competition. Your employee value proposition is not convincing enough.',
            imageAlt: 'Candidates drop out',
          },
          {
            icon: 'FileQuestion',
            title: 'Quality does not match',
            description: 'You receive applications, but the candidates do not match your requirements. Your screening process is inefficient and takes too much time.',
            imageAlt: 'Quality does not match',
          },
        ],
        bottomText: 'The result: Vacancies remain open for months, teams become overloaded and growth stagnates',
      },
      // 4. Transformation
      {
        blockType: 'hrRecruitmentTransformation',
        badge: 'From reactive to proactive',
        title: 'The transformation',
        oldWayTitle: 'TRADITIONAL APPROACH',
        oldWaySubtitle: 'The old way',
        oldWayItems: [
          { text: 'Post vacancies and wait' },
          { text: 'Expensive job boards without results' },
          { text: 'Under-qualified applicants' },
          { text: 'Long time-to-hire' },
        ],
        newWayTitle: 'REAL ACCELERATE HR',
        newWaySubtitle: 'Our method',
        newWayItems: [
          { text: 'Build proactive talent pipeline' },
          { text: 'Establish strong employer brand' },
          { text: 'Attract qualified candidates' },
          { text: 'Fill vacancies 3x faster' },
        ],
      },
      // 5. Methodology
      {
        blockType: 'hrRecruitmentMethodology',
        badge: 'Our proven approach',
        title: 'How we tackle this',
        subtitle: '4 steps to a recruitment machine',
        steps: [
          {
            icon: 'Target',
            title: 'EMPLOYER BRAND',
            subtitle: 'Step 1',
            description: 'We build an attractive employer brand that attracts top talent. Your organization becomes the place where people want to work.',
          },
          {
            icon: 'Search',
            title: 'TALENT PIPELINE',
            subtitle: 'Step 2',
            description: 'We create a continuous stream of qualified candidates through strategic content and targeted campaigns.',
          },
          {
            icon: 'Users',
            title: 'CANDIDATE ENGAGEMENT',
            subtitle: 'Step 3',
            description: 'We build relationships with potential candidates before you need them, so you always have a warm pool.',
          },
          {
            icon: 'TrendingUp',
            title: 'CONVERSION & GROWTH',
            subtitle: 'Step 4',
            description: 'We continuously optimize the process for better results and faster time-to-hire with higher quality.',
          },
        ],
        bottomText: 'The result: A recruitment machine that works 24/7 on your talent pipeline',
      },
      // 6. Resultaten Bento Grid
      {
        blockType: 'hrRecruitmentResultatenBentoGrid',
        badge: 'Proven results',
        title: 'What our clients achieve',
        results: [
          { metric: '65%', description: 'More applications within 3 months' },
          { metric: '3x', description: 'Fill vacancies faster' },
          { metric: '40%', description: 'Higher quality candidates' },
          { metric: '€50k+', description: 'Savings on recruitment fees per year' },
        ],
      },
      // 7. Wat Je Krijgt
      {
        blockType: 'hrRecruitmentWatJeKrijgt',
        badge: 'What you get',
        title: 'Complete HR recruitment transformation',
        subtitle: 'A 360-degree approach for sustainable results',
        features: [
          {
            icon: 'Target',
            title: 'Employer brand development',
            description: 'Complete employer branding strategy with visual identity, messaging and content to position your organization attractively.',
          },
          {
            icon: 'Zap',
            title: 'Talent attraction campaigns',
            description: 'Targeted multi-channel campaigns to reach passive talent on LinkedIn, Instagram and other platforms where your ideal candidates are.',
          },
          {
            icon: 'MessageSquare',
            title: 'Automated nurturing',
            description: 'Smart email sequences and content flows that keep candidates warm until the perfect moment. Personal and automated.',
          },
          {
            icon: 'Users',
            title: 'Personal guidance',
            description: 'Dedicated HR recruitment specialist who manages your account, optimizes strategy and supports your team with implementation.',
          },
        ],
        bonusTitle: 'Plus as a bonus:',
        bonusItems: [
          { text: 'Monthly performance reviews and optimization sessions' },
          { text: 'Dashboard with real-time insights into your talent pipeline' },
          { text: 'Training for your HR team in modern recruitment marketing' },
        ],
      },
      // 8. Voor Wie Is Dit
      {
        blockType: 'hrRecruitmentVoorWieIsDit',
        badge: 'Who is this for?',
        title: 'Is this the right fit for you?',
        perfectForTitle: 'Perfect for:',
        perfectForItems: [
          { text: 'Scale-ups and SMEs that want to grow' },
          { text: 'Companies with 10-500 employees' },
          { text: 'HR teams spending too much time on sourcing' },
          { text: 'Organizations with hard-to-fill vacancies' },
        ],
        notSuitableTitle: 'Less suitable for:',
        notSuitableItems: [
          { text: 'One-time vacancies' },
          { text: 'Only temporary or contract staff' },
          { text: 'Companies without growth ambition' },
        ],
      },
      // 9. Strategie Session CTA
      {
        blockType: 'hrRecruitmentStrategieSessionCTA',
        title: 'Ready for more applications?',
        subtitle: 'Schedule a free recruitment analysis',
        ctaLabel: 'Schedule free analysis',
      },
      // 10. FAQ
      {
        blockType: 'hrRecruitmentFAQ',
        badge: 'Frequently asked questions',
        title: 'Questions about HR recruitment',
        subtitle: 'Everything you want to know',
        faqs: [
          {
            icon: 'HelpCircle',
            question: 'How quickly can I expect results?',
            answer: 'You will see the first qualified candidates within 2-4 weeks. A complete talent pipeline is built in 2-3 months. The speed depends on your target group and the competitiveness of your sector.',
          },
          {
            icon: 'DollarSign',
            question: 'What are the investment and contract terms?',
            answer: 'We work with flexible subscriptions starting from €2,500 per month. You can cancel monthly, but we recommend at least 3 months for optimal results. No setup fees or hidden costs.',
          },
          {
            icon: 'Users',
            question: 'For which type of vacancies does this work?',
            answer: 'Our approach works excellently for knowledge workers, specialists and management positions. From IT to Finance, from Marketing to HR. Less suitable for large volumes of operational positions.',
          },
          {
            icon: 'Target',
            question: 'How does this differ from a traditional recruitment agency?',
            answer: 'We build a structural solution instead of working per vacancy. You get a continuous stream of candidates, better employer branding and lower costs per hire. Plus: you remain the owner of all candidates.',
          },
          {
            icon: 'Zap',
            question: 'Does our HR team need to invest a lot of time in this?',
            answer: 'Minimal. We arrange the campaigns, content and nurturing. Your team only needs to screen and interview qualified candidates. Average 2-4 hours per week after the setup phase.',
          },
          {
            icon: 'Shield',
            question: 'What if it does not work for us?',
            answer: 'We always start with a strategy session to validate if our approach fits. If you are not satisfied after 3 months, you can stop. No long-term contracts or exit fees.',
          },
        ],
        contactText: 'Other question? Call us',
        phoneLabel: '088 - 022 00 20',
      },
    ],
  },
}

async function migrate() {
  try {
    if (!process.env.PAYLOAD_SECRET) {
      process.env.PAYLOAD_SECRET = '127578a4bd3ca59fb455680f'
    }
    if (!process.env.DATABASE_URI) {
      process.env.DATABASE_URI = 'file:./ra-demo-payload.db'
    }

    const payload = await getPayload({ config })

    console.log(`🚀 Starting migration for ${PAGE_SLUG}...`)

    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: PAGE_SLUG } },
      locale: 'all',
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`📝 Page exists, updating...`)

      // Update NL locale
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
      console.log(`✅ NL locale updated`)

      // Update EN locale
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
      console.log(`✅ EN locale updated`)

      console.log(`✅ Page ${PAGE_SLUG} updated for both locales (${pageData.nl.blocks.length} blocks each)`)
    } else {
      console.log(`📝 Creating new page...`)

      // Create new page with NL first
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: PAGE_SLUG,
          blocks: pageData.nl.blocks,
          seo: pageData.nl.seo,
        },
      })
      console.log(`✅ NL locale created`)

      // Update with EN content
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
      console.log(`✅ EN locale created`)

      console.log(`✅ Page ${PAGE_SLUG} created for both locales (${pageData.nl.blocks.length} blocks each)`)
    }

    console.log(`\n🎉 Migration completed successfully!`)
    console.log(`📊 Summary:`)
    console.log(`   - Page: ${PAGE_SLUG}`)
    console.log(`   - NL Blocks: ${pageData.nl.blocks.length}`)
    console.log(`   - EN Blocks: ${pageData.en.blocks.length}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
