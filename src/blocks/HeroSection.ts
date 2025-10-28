import type { Block } from 'payload'

export const HeroSection: Block = {
  slug: 'heroSection',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker (kleine tekst boven titel)',
      required: false,
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
      label: 'Subtitel',
      required: false,
    },
    {
      name: 'ctaPrimary',
      type: 'group',
      label: 'Primaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button tekst',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
      ],
    },
    {
      name: 'ctaSecondary',
      type: 'group',
      label: 'Secundaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button tekst',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
      ],
    },
  ],
}
