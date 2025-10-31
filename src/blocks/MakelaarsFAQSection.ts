import type { Block } from 'payload'

export const MakelaarsFAQSection: Block = {
  slug: 'makelaarsFAQSection',
  interfaceName: 'MakelaarsFAQSection',
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
      label: 'Contact Link URL',
    },
    {
      name: 'phoneLabel',
      type: 'text',
      label: 'Telefoon Label',
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Telefoonnummer',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      fields: [
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
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
      ],
    },
  ],
}
