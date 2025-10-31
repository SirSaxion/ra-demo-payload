import type { GlobalConfig } from 'payload'

export const SEO: GlobalConfig = {
  slug: 'seo',
  label: 'SEO instellingen',
  access: {
    read: () => true,
  },
  fields: [
    // General Site Settings
    {
      name: 'siteSettings',
      type: 'group',
      label: 'Site instellingen',
      fields: [
        {
          name: 'siteTitle',
          type: 'text',
          label: 'Site titel',
          required: true,
          defaultValue: 'Real Accelerate',
          admin: {
            description: 'Hoofdtitel van de website (voor meta tags)',
          },
        },
        {
          name: 'siteDescription',
          type: 'textarea',
          label: 'Site beschrijving',
          required: true,
          defaultValue: 'Voorspelbare groei voor makelaars en vastgoedteams',
          admin: {
            description: 'Standaard meta beschrijving',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          required: true,
          defaultValue: 'https://www.realaccelerate.nl',
          admin: {
            description: 'Basis URL van de website (zonder trailing slash)',
          },
        },
        {
          name: 'defaultOgImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Standaard OG Image',
          admin: {
            description: 'Standaard afbeelding voor social media sharing (1200x630px)',
          },
        },
      ],
    },

    // Robots.txt Configuration
    {
      name: 'robotsTxt',
      type: 'group',
      label: 'Robots.txt',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Robots.txt inschakelen',
          defaultValue: true,
        },
        {
          name: 'customRobotsTxt',
          type: 'textarea',
          label: 'Custom Robots.txt',
          admin: {
            description: 'Laat leeg voor standaard configuratie',
            condition: (data, siblingData) => siblingData?.enabled,
            rows: 10,
          },
        },
        {
          name: 'disallowPaths',
          type: 'array',
          label: 'Blokkeer paden',
          admin: {
            description: 'Paden die niet geïndexeerd mogen worden',
            condition: (data, siblingData) => siblingData?.enabled && !siblingData?.customRobotsTxt,
          },
          fields: [
            {
              name: 'path',
              type: 'text',
              required: true,
              admin: {
                placeholder: '/admin',
              },
            },
          ],
          defaultValue: [
            { path: '/admin' },
            { path: '/api' },
            { path: '/_next' },
          ],
        },
      ],
    },

    // Sitemap Configuration
    {
      name: 'sitemap',
      type: 'group',
      label: 'Sitemap',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Sitemap inschakelen',
          defaultValue: true,
        },
        {
          name: 'includePages',
          type: 'checkbox',
          label: 'Pagina\'s toevoegen',
          defaultValue: true,
          admin: {
            description: 'Voeg alle gepubliceerde pages automatisch toe',
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'includeCaseStudies',
          type: 'checkbox',
          label: 'Case Studies toevoegen',
          defaultValue: true,
          admin: {
            description: 'Voeg case studies toe aan sitemap',
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'defaultChangeFrequency',
          type: 'select',
          label: 'Standaard wijzigingsfrequentie',
          defaultValue: 'weekly',
          options: [
            { label: 'Altijd', value: 'always' },
            { label: 'Per uur', value: 'hourly' },
            { label: 'Dagelijks', value: 'daily' },
            { label: 'Wekelijks', value: 'weekly' },
            { label: 'Maandelijks', value: 'monthly' },
            { label: 'Jaarlijks', value: 'yearly' },
            { label: 'Nooit', value: 'never' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.enabled,
          },
        },
        {
          name: 'defaultPriority',
          type: 'number',
          label: 'Standaard prioriteit',
          defaultValue: 0.7,
          min: 0,
          max: 1,
          admin: {
            description: 'Waarde tussen 0.0 en 1.0',
            condition: (data, siblingData) => siblingData?.enabled,
            step: 0.1,
          },
        },
      ],
    },

    // Structured Data
    {
      name: 'structuredData',
      type: 'group',
      label: 'Gestructureerde data',
      fields: [
        {
          name: 'organizationSchema',
          type: 'checkbox',
          label: 'Organization schema inschakelen',
          defaultValue: true,
          admin: {
            description: 'Voegt JSON-LD schema toe voor betere SEO',
          },
        },
        {
          name: 'organization',
          type: 'group',
          label: 'Organisatie gegevens',
          admin: {
            condition: (data, siblingData) => siblingData?.organizationSchema,
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Bedrijfsnaam',
              defaultValue: 'Real Accelerate',
            },
            {
              name: 'legalName',
              type: 'text',
              label: 'Juridische naam',
              defaultValue: 'Real Accelerate B.V.',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Website URL',
              defaultValue: 'https://www.realaccelerate.nl',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Beschrijving',
            },
            {
              name: 'email',
              type: 'text',
              label: 'E-mail',
              defaultValue: 'info@realaccelerate.nl',
            },
            {
              name: 'telephone',
              type: 'text',
              label: 'Telefoonnummer',
              defaultValue: '+31850602989',
            },
            {
              name: 'address',
              type: 'group',
              label: 'Adres',
              fields: [
                {
                  name: 'streetAddress',
                  type: 'text',
                  label: 'Straat + huisnummer',
                  defaultValue: 'Daalwijkdreef 47',
                },
                {
                  name: 'postalCode',
                  type: 'text',
                  label: 'Postcode',
                  defaultValue: '1103 AD',
                },
                {
                  name: 'addressLocality',
                  type: 'text',
                  label: 'Plaats',
                  defaultValue: 'Amsterdam',
                },
                {
                  name: 'addressCountry',
                  type: 'text',
                  label: 'Land',
                  defaultValue: 'NL',
                },
              ],
            },
            {
              name: 'socialProfiles',
              type: 'array',
              label: 'Social media profielen',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
              ],
              defaultValue: [
                { url: 'https://www.linkedin.com/company/realaccelerate' },
                { url: 'https://www.facebook.com/realaccelerate' },
              ],
            },
          ],
        },
      ],
    },

    // Performance Settings
    {
      name: 'performance',
      type: 'group',
      label: 'Performance',
      fields: [
        {
          name: 'enablePreloading',
          type: 'checkbox',
          label: 'Preloading inschakelen',
          defaultValue: true,
          admin: {
            description: 'Preload kritische resources voor betere performance',
          },
        },
        {
          name: 'enableLazyLoading',
          type: 'checkbox',
          label: 'Lazy loading inschakelen',
          defaultValue: true,
          admin: {
            description: 'Lazy load images voor betere initial load time',
          },
        },
      ],
    },
  ],
}
