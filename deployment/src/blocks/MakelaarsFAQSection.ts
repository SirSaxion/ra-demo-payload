import type { Block } from 'payload'

export const MakelaarsFAQSection: Block = {
  slug: 'makelaarsFAQSection',
  interfaceName: 'MakelaarsFAQSection',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'contactLinkText',
      type: 'text',
      label: 'Contact Link Tekst',
      localized: true,
    },
    {
      name: 'contactLinkHref',
      type: 'text',
      label: 'Contact Link URL',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Telefoon Label',
      localized: true,
    },
    {
      name: 'phonePrefix',
      type: 'text',
      label: 'Telefoon Prefix (bijv. "Bel direct:")',
      localized: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Tekst (bijv. "of plan een gratis strategiesessie in")',
      localized: true,
      admin: {
        description: 'Telefoonnummer wordt automatisch uit Site settings gehaald.',
      },
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      localized: true,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Vraag',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Antwoord',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
      ],
    },
  ],
}
