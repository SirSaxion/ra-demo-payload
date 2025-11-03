/**
 * Over-ons Page Migration Script
 * Migrates both NL and EN content to Payload CMS
 * Run with: pnpm tsx scripts/migrate-over-ons.ts
 */

import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config.js'

dotenv.config({ path: '.env' })

const pageData = {
  nl: {
    title: 'Over ons',
    seo: {
      metaTitle: 'Over ons - Real Accelerate',
      metaDescription: 'Leer het team achter Real Accelerate kennen. Van vastgoedondernemers, voor vastgoedondernemers.',
    },
    blocks: [
      {
        blockType: 'overOnsHeroSection',
        badge: 'Over ons',
        title: 'Van',
        highlightedWord: 'vastgoedondernemers',
        subtitle: 'voor vastgoedondernemers',
        description: 'Wij zijn Real Accelerate. Een team dat dagelijks actief is in de vastgoedbranche. We kennen de uitdagingen van binnenuit – omdat we ze zelf ervaren hebben. Vanuit die praktijk helpen we anderen vooruit met een aanpak die vernieuwend, praktisch en resultaatgericht is.',
        image: '/images/teamfoto_einde.png',
        imageAlt: 'Team Real Accelerate',
        stats: [
          { icon: 'Users', value: '200+ klanten', label: 'Europa-breed' },
          { icon: 'Globe', value: 'IQI Global Partner', label: 'Internationale slagkracht' },
        ],
      },
      {
        blockType: 'overOnsTrustStripSection',
        items: [
          { text: 'Samen 30+ jaar marketing ervaring' },
          { text: 'Gevestigd in Nederland' },
          { text: 'Samen 40+ jaar vastgoed ervaring' },
          { text: 'Persoonlijke benadering' },
          { text: 'Transparante werkwijze' },
          { text: 'Wereldwijd actief' },
          { text: 'Data-driven beslissingen' },
          { text: 'Innovatieve oplossingen' },
          { text: 'Klantgericht team' },
          { text: 'Bewezen track record' },
        ],
      },
      {
        blockType: 'overOnsMissionSection',
        badge: 'Onze missie',
        title: 'Waarom Real Accelerate bestaat',
        subtitle: 'De vastgoedbranche vernieuwen en ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden',
        cards: [
          {
            icon: 'Lightbulb',
            title: 'Het probleem',
            content: 'We zagen te vaak dat professionals in de vastgoedbranche <span class="font-semibold text-white">vastliepen in dezelfde patronen:</span> <span class="text-[var(--brand-300)] font-medium">gebrek aan structuur, afhankelijkheid van externe partijen en een moeizame weg naar groei.</span>',
          },
          {
            icon: 'Rocket',
            title: 'Onze oplossing',
            content: 'Met onze eigen ondernemingen ontwikkelden we <span class="font-semibold text-[var(--brand-200)]">strategieën en systemen die dit doorbraken.</span> <span class="text-white font-medium">Het was een logische stap</span> om die kennis en ervaring te bundelen in Real Accelerate.',
          },
          {
            icon: 'Star',
            title: 'Onze impact',
            content: 'Ons doel is helder: <span class="font-semibold text-white">de vastgoedbranche vernieuwen</span> en <span class="text-[var(--brand-200)] font-medium">ondernemers helpen om sterker, efficiënter en toekomstbestendig te worden.</span>',
          },
        ],
        tagline: 'Van vastlooppatronen naar duurzame groei. Van afhankelijkheid naar zelfstandigheid. Van overleven naar floreren.',
      },
      {
        blockType: 'overOnsTimelineSection',
        title: 'Bedrijf Timeline',
        subtitle: 'Onze reis tot nu toe',
        items: [
          {
            year: '2021',
            title: 'OPRICHTING 🏗️',
            bullets: [
              { text: 'Real Accelerate opgericht door vastgoedondernemers' },
              { text: 'Eerste experimenten met leadgeneratie' },
              { text: '10 pilotklanten in Nederland' },
            ],
          },
          {
            year: '2022',
            title: 'EERSTE SUCCESSEN 📈',
            bullets: [
              { text: 'Methodologie verfijnd & gestandaardiseerd' },
              { text: '45 klanten, eerste internationale stappen' },
              { text: 'Partnership met Edit BV voor hypotheekadviseurs' },
              { text: '€250k+ advertentie-ervaring opgebouwd' },
            ],
          },
          {
            year: '2023',
            title: 'INTERNATIONALE EXPANSIE 🌍',
            bullets: [
              { text: 'IQI Global Partnership (Real Accelerate = IQI Nederland)' },
              { text: 'Dubai, Spanje, Bali projecten' },
              { text: '120 klanten, team uitbreiding' },
              { text: '€750k+ advertentie-ervaring' },
            ],
          },
          {
            year: '2024',
            title: 'SCHAALBAARHEID & GROEI 🚀',
            bullets: [
              { text: '200+ klanten bereikt' },
              { text: 'Eigen makelaarskantoor Settle gelanceerd (8 deals in start)' },
              { text: '€1M+ advertentie-ervaring milestone' },
              { text: 'Ninja Selling partnership voor training' },
            ],
          },
          {
            year: '2025',
            title: 'TOEKOMSTVISIE 🎯',
            bullets: [
              { text: '500+ klanten doel' },
              { text: 'Europese expansie plannen' },
              { text: 'AI-gedreven optimalisaties' },
              { text: 'Platform voor makelaars community' },
            ],
          },
        ],
      },
      {
        blockType: 'overOnsTeamSection',
        badge: 'Team',
        title: 'Het team achter Real Accelerate',
        members: [
          { name: 'Joep', role: 'Founder — CEO', image: '/images/1.EmiroSmolders-Settle-DSC06894-.webp' },
          { name: 'Partner Naam', role: 'Co-Founder — CTO', image: '/images/2.EmiroSmolders-Settle-DSC06899-.webp' },
          { name: 'Nina', role: 'Klant succes baas', image: '/images/3.EmiroSmolders-Settle-DSC06907-.webp' },
          { name: 'Ravi', role: 'Sales tijger', image: '/images/4.EmiroSmolders-Settle-DSC06915-.webp' },
          { name: 'Milo', role: 'Creatieve baas', image: '/images/5.EmiroSmolders-Settle-DSC06927-.webp' },
          { name: 'Sofie', role: 'Data baas', image: '/images/6.EmiroSmolders-Settle-DSC06931-.webp' },
          { name: 'Alex', role: 'Product owner', image: '/images/10.EmiroSmolders-Settle-DSC06970-.webp' },
          { name: 'Maya', role: 'Design lead', image: '/images/placeholder.jpg' },
        ],
      },
      {
        blockType: 'overOnsCoreValuesSection',
        badge: 'Onze Fundamenten',
        title: 'Waarden die ons',
        highlightedWord: 'onderscheiden',
        subtitle: 'Wat ons onderscheidt in de vastgoedbranche. Deze waarden zijn levende principes die dagelijks tot uiting komen in onze acties, beslissingen en de manier waarop we met elkaar en onze klanten samenwerken.',
        values: [
          { id: 'value-1', title: 'Integriteit', description: 'Eerlijkheid en transparantie in alles wat we doen. Onze klanten kunnen erop vertrouwen dat we onze beloftes nakomen.', icon: 'Shield', color: 'from-blue-500 to-blue-700', bgGradient: 'bg-gradient-to-br from-blue-500/20 to-blue-700/20' },
          { id: 'value-2', title: 'Fun', description: 'Werken mag leuk zijn, want energie en plezier zorgen voor betere resultaten. We vinden dat werk energie mag geven: plezier en ambitie gaan hand in hand.', icon: 'Lightbulb', color: 'from-amber-500 to-orange-600', bgGradient: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20' },
          { id: 'value-3', title: 'Samenwerking', description: 'De beste resultaten ontstaan door echt teamwork. We werken vanuit vertrouwen en gelijkwaardigheid met onze klanten.', icon: 'Users', color: 'from-green-500 to-emerald-600', bgGradient: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20' },
          { id: 'value-4', title: 'Doelgericht', description: 'Alles draagt bij aan tastbare vooruitgang. We maken complexe zaken overzichtelijk en helpen vooruitgang boeken zonder onnodige omwegen.', icon: 'Heart', color: 'from-red-500 to-pink-600', bgGradient: 'bg-gradient-to-br from-red-500/20 to-pink-600/20' },
          { id: 'value-5', title: 'Resultaatgericht', description: 'We sturen altijd op concrete impact voor onze klanten. Jouw succes is ons succes - we focussen op meetbare resultaten die waarde toevoegen.', icon: 'Award', color: 'from-purple-500 to-indigo-600', bgGradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20' },
          { id: 'value-6', title: 'Ervaring', description: 'Wij spreken niet vanaf de zijlijn. Met ons eigen makelaarskantoor SETTL. en onze activiteiten in vastgoedinvesteringen combineren we ervaring met vernieuwing.', icon: 'Target', color: 'from-teal-500 to-cyan-600', bgGradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-600/20' },
        ],
      },
      {
        blockType: 'overOnsPartnershipsSection',
        badge: 'Partnerships',
        title: 'Onze Partnerships',
        featuresLabel: 'Kernpunten',
        partnerships: [
          {
            title: 'IQI Global',
            description: 'Internationale expansie partner. Versterkt onze slagkracht met wereldwijde aanwezigheid en expertise.',
            image: '/images/iqiglobal.jpg',
            features: [
              { text: 'Internationale expansie' },
              { text: '40.000+ agents wereldwijd' },
              { text: 'Real Accelerate = IQI NL' },
              { text: 'Dubai, Spanje, Bali' },
            ],
          },
          {
            title: 'SETTL.',
            description: 'Ons eigen makelaarskantoor waar we dagelijks in de praktijk staan. Alles wat we doen voor onze klanten, hebben we zelf getest, verbeterd en bewezen.',
            image: '/images/editbv.jpg',
            features: [
              { text: 'Eigen makelaarskantoor' },
              { text: 'Ervaring uit de praktijk' },
              { text: 'Bewezen strategieën' },
              { text: 'Real-world testing ground' },
            ],
          },
        ],
        quote: 'We spreken niet vanaf de zijlijn, maar met ondernemers die zelf midden in de vastgoedwereld staan en jouw doelen begrijpen.',
        quoteAuthor: 'Real Accelerate',
      },
      {
        blockType: 'overOnsCultureSection',
        badge: 'ONZE PERSOONLIJKHEID',
        title: 'VAN VASTGOEDONDERNEMERS',
        subtitle: 'Hoe wij werken:',
        tableHeaderAspect: 'Aspect',
        tableHeaderOthers: 'Andere bureaus',
        tableHeaderRealAccelerate: 'Real Accelerate',
        testimonialLabel: '💬 Testimonial',
        comparisonRows: [
          { aspect: 'Kennis & Ervaring', aspectIcon: 'BookOpen', other: 'Theorieën zonder praktijk', realAccelerate: 'Ervaring uit de praktijk' },
          { aspect: 'Aanpak', aspectIcon: 'Compass', other: 'Standaard oplossingen', realAccelerate: 'We combineren ervaring met vernieuwing' },
          { aspect: 'Kosten', aspectIcon: 'Wallet', other: 'Bureau op afstand', realAccelerate: 'Ondernemers die zelf midden in de vastgoedwereld staan' },
          { aspect: 'Service', aspectIcon: 'Headphones', other: 'Alleen advies, geen hands-on', realAccelerate: 'We zeggen waar het op staat' },
          { aspect: 'Garantie', aspectIcon: 'ShieldCheck', other: 'Formele relaties', realAccelerate: 'Plezier en ambitie gaan hand in hand' },
          { aspect: 'Relatie', aspectIcon: 'Handshake', other: 'Snelle transacties', realAccelerate: 'Duurzame relaties boven snelle deals' },
        ],
        testimonial: { quote: 'Bij ons draait het niet alleen om strategieën en processen, maar vooral om mensen. We werken vanuit vertrouwen en gelijkwaardigheid, en we bouwen liever duurzame relaties dan snelle transacties.', author: 'Real Accelerate Team', company: 'Over onze aanpak' },
      },
      {
        blockType: 'overOnsOfficeSection',
        badge: 'Office & Werkwijze',
        title: 'Waarom samenwerken met ons?',
        subtitle: '🏢 Bezoek ons in Amsterdam',
        latitude: 52.3239602,
        longitude: 4.9586448,
        address: { street: 'Daalwijkdreef 47', city: '1103 AD Amsterdam' },
        phone: '085 060 2989',
        email: 'info@realaccelerate.nl',
        image: '/images/joep-koffie.png',
        imageAlt: 'Joep',
        openInMapsLabel: 'Openen in Google Maps',
        locationBadge: 'LOCATIE',
        addressHeading: 'Bezoekadres',
      },
      {
        blockType: 'overOnsCTASection',
        title: 'Klaar voor een',
        highlightedWord: 'strategiesessie',
        subtitle: 'Ontdek hoe we jouw bedrijf naar het volgende niveau kunnen brengen. Plan een vrijblijvende strategiesessie en krijg direct inzicht in jouw groeimogelijkheden.',
        benefits: [
          { text: 'Gratis strategiesessie van 45 minuten' },
          { text: 'Analyse van jouw huidige situatie en doelen' },
          { text: 'Concrete aanbevelingen voor groei' },
          { text: 'Geen verplichtingen, volledig vrijblijvend' },
        ],
        ctaLabel: 'Plan je strategiesessie',
        ctaSubtext: 'Waarde €1000 • Volledig vrijblijvend • Direct inplannen',
      },
    ],
  },
  en: {
    title: 'About us',
    seo: {
      metaTitle: 'About us - Real Accelerate',
      metaDescription: 'Meet the team behind Real Accelerate. From real estate entrepreneurs, for real estate entrepreneurs.',
    },
    blocks: [
      {
        blockType: 'overOnsHeroSection',
        badge: 'About us',
        title: 'From',
        highlightedWord: 'real estate entrepreneurs',
        subtitle: 'for real estate entrepreneurs',
        description: 'We are Real Accelerate. A team that is actively involved in the real estate industry every day. We know the challenges from within – because we have experienced them ourselves. From that practice, we help others move forward with an approach that is innovative, practical and results-oriented.',
        image: '/images/teamfoto_einde.png',
        imageAlt: 'Team Real Accelerate',
        stats: [
          { icon: 'Users', value: '200+ clients', label: 'Europe-wide' },
          { icon: 'Globe', value: 'IQI Global Partner', label: 'International power' },
        ],
      },
      {
        blockType: 'overOnsTrustStripSection',
        items: [
          { text: 'Combined 30+ years marketing experience' },
          { text: 'Based in the Netherlands' },
          { text: 'Combined 40+ years real estate experience' },
          { text: 'Personal approach' },
          { text: 'Transparent way of working' },
          { text: 'Active worldwide' },
          { text: 'Data-driven decisions' },
          { text: 'Innovative solutions' },
          { text: 'Client-focused team' },
          { text: 'Proven track record' },
        ],
      },
      {
        blockType: 'overOnsMissionSection',
        badge: 'Our mission',
        title: 'Why Real Accelerate exists',
        subtitle: 'Renewing the real estate industry and helping entrepreneurs become stronger, more efficient and future-proof',
        cards: [
          { icon: 'Lightbulb', title: 'The problem', content: 'We saw too often that professionals in the real estate industry <span class="font-semibold text-white">got stuck in the same patterns:</span> <span class="text-[var(--brand-300)] font-medium">lack of structure, dependence on external parties and a difficult path to growth.</span>' },
          { icon: 'Rocket', title: 'Our solution', content: 'With our own businesses, we developed <span class="font-semibold text-[var(--brand-200)]">strategies and systems that broke through this.</span> <span class="text-white font-medium">It was a logical step</span> to bundle that knowledge and experience into Real Accelerate.' },
          { icon: 'Star', title: 'Our impact', content: 'Our goal is clear: <span class="font-semibold text-white">to renew the real estate industry</span> and <span class="text-[var(--brand-200)] font-medium">help entrepreneurs become stronger, more efficient and future-proof.</span>' },
        ],
        tagline: 'From stuck patterns to sustainable growth. From dependence to independence. From surviving to thriving.',
      },
      {
        blockType: 'overOnsTimelineSection',
        title: 'Company Timeline',
        subtitle: 'Our journey so far',
        items: [
          {
            year: '2021',
            title: 'FOUNDATION 🏗️',
            bullets: [
              { text: 'Real Accelerate founded by real estate entrepreneurs' },
              { text: 'First lead generation experiments' },
              { text: '10 pilot clients in the Netherlands' },
            ],
          },
          {
            year: '2022',
            title: 'FIRST SUCCESSES 📈',
            bullets: [
              { text: 'Methodology refined & standardized' },
              { text: '45 clients, first international steps' },
              { text: 'Partnership with Edit BV for mortgage advisors' },
              { text: '€250k+ advertising experience built' },
            ],
          },
          {
            year: '2023',
            title: 'INTERNATIONAL EXPANSION 🌍',
            bullets: [
              { text: 'IQI Global Partnership (Real Accelerate = IQI Netherlands)' },
              { text: 'Dubai, Spain, Bali projects' },
              { text: '120 clients, team expansion' },
              { text: '€750k+ advertising experience' },
            ],
          },
          {
            year: '2024',
            title: 'SCALABILITY & GROWTH 🚀',
            bullets: [
              { text: '200+ clients reached' },
              { text: 'Own real estate agency Settle launched (8 deals at start)' },
              { text: '€1M+ advertising experience milestone' },
              { text: 'Ninja Selling partnership for training' },
            ],
          },
          {
            year: '2025',
            title: 'FUTURE VISION 🎯',
            bullets: [
              { text: '500+ clients goal' },
              { text: 'European expansion plans' },
              { text: 'AI-driven optimizations' },
              { text: 'Platform for real estate agents community' },
            ],
          },
        ],
      },
      {
        blockType: 'overOnsTeamSection',
        badge: 'Team',
        title: 'The team behind Real Accelerate',
        members: [
          { name: 'Joep', role: 'Founder — CEO', image: '/images/1.EmiroSmolders-Settle-DSC06894-.webp' },
          { name: 'Partner Name', role: 'Co-Founder — CTO', image: '/images/2.EmiroSmolders-Settle-DSC06899-.webp' },
          { name: 'Nina', role: 'Client success lead', image: '/images/3.EmiroSmolders-Settle-DSC06907-.webp' },
          { name: 'Ravi', role: 'Sales tiger', image: '/images/4.EmiroSmolders-Settle-DSC06915-.webp' },
          { name: 'Milo', role: 'Creative lead', image: '/images/5.EmiroSmolders-Settle-DSC06927-.webp' },
          { name: 'Sofie', role: 'Data lead', image: '/images/6.EmiroSmolders-Settle-DSC06931-.webp' },
          { name: 'Alex', role: 'Product owner', image: '/images/10.EmiroSmolders-Settle-DSC06970-.webp' },
          { name: 'Maya', role: 'Design lead', image: '/images/placeholder.jpg' },
        ],
      },
      {
        blockType: 'overOnsCoreValuesSection',
        badge: 'Our Foundations',
        title: 'Values that',
        highlightedWord: 'distinguish us',
        subtitle: 'What sets us apart in the real estate industry. These values are living principles that are expressed daily in our actions, decisions and the way we work together with each other and our clients.',
        values: [
          { id: 'en-value-1', title: 'Integrity', description: 'Honesty and transparency in everything we do. Our clients can trust that we keep our promises.', icon: 'Shield', color: 'from-blue-500 to-blue-700', bgGradient: 'bg-gradient-to-br from-blue-500/20 to-blue-700/20' },
          { id: 'en-value-2', title: 'Fun', description: 'Work should be enjoyable, because energy and fun lead to better results. We believe that work should give energy: fun and ambition go hand in hand.', icon: 'Lightbulb', color: 'from-amber-500 to-orange-600', bgGradient: 'bg-gradient-to-br from-amber-500/20 to-orange-600/20' },
          { id: 'en-value-3', title: 'Collaboration', description: 'The best results come from real teamwork. We work from trust and equality with our clients.', icon: 'Users', color: 'from-green-500 to-emerald-600', bgGradient: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20' },
          { id: 'en-value-4', title: 'Goal-oriented', description: 'Everything contributes to tangible progress. We make complex matters clear and help make progress without unnecessary detours.', icon: 'Heart', color: 'from-red-500 to-pink-600', bgGradient: 'bg-gradient-to-br from-red-500/20 to-pink-600/20' },
          { id: 'en-value-5', title: 'Results-oriented', description: 'We always focus on concrete impact for our clients. Your success is our success - we focus on measurable results that add value.', icon: 'Award', color: 'from-purple-500 to-indigo-600', bgGradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20' },
          { id: 'en-value-6', title: 'Experience', description: 'We don\'t speak from the sidelines. With our own real estate agency SETTL. and our activities in real estate investments, we combine experience with innovation.', icon: 'Target', color: 'from-teal-500 to-cyan-600', bgGradient: 'bg-gradient-to-br from-teal-500/20 to-cyan-600/20' },
        ],
      },
      {
        blockType: 'overOnsPartnershipsSection',
        badge: 'Partnerships',
        title: 'Our Partnerships',
        featuresLabel: 'Key Areas',
        partnerships: [
          {
            title: 'IQI Global',
            description: 'International expansion partner. Strengthens our power with worldwide presence and expertise.',
            image: '/images/iqiglobal.jpg',
            features: [
              { text: 'International expansion' },
              { text: '40,000+ agents worldwide' },
              { text: 'Real Accelerate = IQI NL' },
              { text: 'Dubai, Spain, Bali' },
            ],
          },
          {
            title: 'SETTL.',
            description: 'Our own real estate agency where we are in practice every day. Everything we do for our clients, we have tested, improved and proven ourselves.',
            image: '/images/editbv.jpg',
            features: [
              { text: 'Own real estate agency' },
              { text: 'Experience from practice' },
              { text: 'Proven strategies' },
              { text: 'Real-world testing ground' },
            ],
          },
        ],
        quote: 'We don\'t speak from the sidelines, but with entrepreneurs who are in the middle of the real estate world themselves and understand your goals.',
        quoteAuthor: 'Real Accelerate',
      },
      {
        blockType: 'overOnsCultureSection',
        badge: 'OUR PERSONALITY',
        title: 'FROM REAL ESTATE ENTREPRENEURS',
        subtitle: 'How we work:',
        tableHeaderAspect: 'Aspect',
        tableHeaderOthers: 'Other agencies',
        tableHeaderRealAccelerate: 'Real Accelerate',
        testimonialLabel: '💬 Testimonial',
        comparisonRows: [
          { aspect: 'Knowledge & Experience', aspectIcon: 'BookOpen', other: 'Theories without practice', realAccelerate: 'Experience from practice' },
          { aspect: 'Approach', aspectIcon: 'Compass', other: 'Standard solutions', realAccelerate: 'We combine experience with innovation' },
          { aspect: 'Costs', aspectIcon: 'Wallet', other: 'Agency at a distance', realAccelerate: 'Entrepreneurs who are in the middle of the real estate world' },
          { aspect: 'Service', aspectIcon: 'Headphones', other: 'Only advice, no hands-on', realAccelerate: 'We tell it like it is' },
          { aspect: 'Guarantee', aspectIcon: 'ShieldCheck', other: 'Formal relationships', realAccelerate: 'Fun and ambition go hand in hand' },
          { aspect: 'Relationship', aspectIcon: 'Handshake', other: 'Quick transactions', realAccelerate: 'Sustainable relationships over quick deals' },
        ],
        testimonial: { quote: 'For us, it\'s not just about strategies and processes, but above all about people. We work from trust and equality, and we prefer to build sustainable relationships rather than quick transactions.', author: 'Real Accelerate Team', company: 'About our approach' },
      },
      {
        blockType: 'overOnsOfficeSection',
        badge: 'Office & Work Method',
        title: 'Why work with us?',
        subtitle: '🏢 Visit us in Amsterdam',
        latitude: 52.3239602,
        longitude: 4.9586448,
        address: { street: 'Daalwijkdreef 47', city: '1103 AD Amsterdam' },
        phone: '085 060 2989',
        email: 'info@realaccelerate.nl',
        image: '/images/joep-koffie.png',
        imageAlt: 'Joep',
        openInMapsLabel: 'Open in Google Maps',
        locationBadge: 'LOCATION',
        addressHeading: 'Visit address',
      },
      {
        blockType: 'overOnsCTASection',
        title: 'Ready for a',
        highlightedWord: 'strategy session',
        subtitle: 'Discover how we can take your business to the next level. Schedule a no-obligation strategy session and get immediate insight into your growth opportunities.',
        benefits: [
          { text: 'Free 45-minute strategy session' },
          { text: 'Analysis of your current situation and goals' },
          { text: 'Concrete recommendations for growth' },
          { text: 'No obligations, completely non-binding' },
        ],
        ctaLabel: 'Schedule your strategy session',
        ctaSubtext: 'Value €1000 • Completely non-binding • Schedule directly',
      },
    ],
  }
}

async function migrate() {
  console.log('🚀 Starting over-ons page migration...\n')
  
  try {
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
          equals: '/over-ons',
        },
      },
      locale: 'all',
      limit: 1,
    })
    
    if (existing.docs.length > 0) {
      console.log('📝 Over-ons page exists, updating both locales...\n')
      
      // Update NL locale
      console.log('🇳🇱 Updating Dutch content...')
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: '/over-ons',
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
      console.log('📝 Creating new over-ons page...\n')
      
      // Create with NL first
      console.log('🇳🇱 Creating with Dutch content...')
      const created = await payload.create({
        collection: 'pages',
        locale: 'nl',
        data: {
          title: pageData.nl.title,
          slug: '/over-ons',
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
    console.log(`   - Slug: /over-ons`)
    console.log(`   - Status: published`)
    console.log('\n👉 Visit http://localhost:3001/admin/collections/pages to view in Payload CMS')
    console.log('👉 NL: http://localhost:3001/over-ons')
    console.log('👉 EN: http://localhost:3001/en/over-ons\n')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  }
}

migrate()
