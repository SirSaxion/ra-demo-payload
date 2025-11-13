import type { Block } from 'payload'

export const HypotheekadviseursFAQSection: Block = {
  slug: 'hypotheekadviseursFAQSection',
  dbName: 'hyp_faq',
  interfaceName: 'HypotheekadviseursFAQSection',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'contactLinkText',
      type: 'text',
      label: 'Contact Link Tekst',
    },
    {
      name: 'contactLinkHref',
      type: 'text',
      label: 'Contact Link Href',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Phone Label',
      admin: {
        description: 'Telefoonnummer wordt automatisch uit Site settings gehaald.',
      },
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'question',
          type: 'text',
          label: 'Vraag',
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Antwoord',
        },
      ],
    },
  ],
}
