import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefoonnummer (display)',
      required: true,
      defaultValue: '085 060 2989',
    },
    {
      name: 'phoneLink',
      type: 'text',
      label: 'Telefoonnummer (link)',
      required: true,
      defaultValue: 'tel:+31850602989',
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-mailadres',
      required: true,
      defaultValue: 'info@realaccelerate.nl',
    },
    {
      name: 'emailLink',
      type: 'text',
      label: 'E-mail (link)',
      required: true,
      defaultValue: 'mailto:info@realaccelerate.nl',
    },
    {
      name: 'mainLinks',
      type: 'array',
      label: 'Hoofdnavigatie',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
      ],
      defaultValue: [
        { name: 'Home', href: '/' },
        { name: 'Cases', href: '/cases' },
        { name: 'Over ons', href: '/over-ons' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      name: 'targetGroups',
      type: 'array',
      label: 'Doelgroepen ("Voor wie?" menu)',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icoon',
          required: true,
          options: [
            { label: 'Building (Makelaars)', value: 'Building2' },
            { label: 'Globe (Internationaal)', value: 'Globe2' },
            { label: 'PiggyBank (Hypotheek)', value: 'PiggyBank' },
            { label: 'Factory (Projectontwikkelaar)', value: 'Factory' },
            { label: 'Users (HR)', value: 'Users' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
          required: true,
        },
        {
          name: 'highlights',
          type: 'array',
          label: 'Highlights',
          minRows: 2,
          maxRows: 4,
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Tekst',
              required: true,
            },
          ],
        },
      ],
      defaultValue: [
        {
          name: 'Makelaars',
          href: '/makelaars',
          icon: 'Building2',
          description: 'Volledige funnel: van kwalitatieve leads tot afspraken die wél doorgaan. Ontworpen voor lokale en regionale makelaars.',
          highlights: [
            { text: 'Consistente instroom van bezichtigingen' },
            { text: 'Meetbare ROI en transparante rapportage' },
            { text: 'Integratie met je huidige tools' },
          ],
        },
        {
          name: 'Buitenland / IQI',
          href: '/makelaars-buitenland',
          icon: 'Globe2',
          description: 'Internationale campagnes met schaal: multi-market targeting, meertalige funnels en cross-border performance.',
          highlights: [
            { text: 'Schaalbaar naar meerdere regio\'s' },
            { text: 'Lead kwalificatie op maat' },
            { text: 'Team en tooling voor snelheid' },
          ],
        },
        {
          name: 'Hypotheekadviseurs',
          href: '/hypotheekadviseurs',
          icon: 'PiggyBank',
          description: 'Gerichte aanvragen van starters, doorstromers en ondernemers. Slimme pre-kwalificatie voor minder no-shows.',
          highlights: [
            { text: 'Betere show-rate bij afspraken' },
            { text: 'Heldere intake vóór het gesprek' },
            { text: 'Sterke lokale positionering' },
          ],
        },
        {
          name: 'Projectontwikkelaars',
          href: '/projectontwikkelaars',
          icon: 'Factory',
          description: 'Lanceringen met impact: leadgeneratie voor nieuwbouwprojecten met focus op snelheid en verkooptempo.',
          highlights: [
            { text: 'Snelle validatie van propositie' },
            { text: 'Datagedreven marketingmix' },
            { text: 'Content en ads volledig verzorgd' },
          ],
        },
        {
          name: 'HR & Recruitment',
          href: '/hr-recruitment',
          icon: 'Users',
          description: 'Van reactief zoeken naar proactief aantrekken: bouw een talent pipeline die zorgt voor een constante stroom gekwalificeerde kandidaten.',
          highlights: [
            { text: '73% meer sollicitaties binnen 3 maanden' },
            { text: '3x sneller vacatures vullen' },
            { text: 'Sterk werkgeversmerk opbouwen' },
          ],
        },
      ],
    },
  ],
}
