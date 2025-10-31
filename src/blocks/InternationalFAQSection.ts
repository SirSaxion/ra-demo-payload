import type { Block } from 'payload'

export const InternationalFAQSection: Block = {
  slug: 'internationalFAQSection',
  interfaceName: 'InternationalFAQSection',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
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
      name: 'subtitleSuffix',
      type: 'text',
      label: 'Subtitle Suffix',
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
      name: 'phonePrefix',
      type: 'text',
      label: 'Telefoon Prefix',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'ID',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
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
