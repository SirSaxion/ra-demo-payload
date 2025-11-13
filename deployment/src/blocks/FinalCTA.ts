import type { Block } from 'payload'

export const FinalCTA: Block = {
  slug: 'finalCTA',
  labels: {
    singular: 'Final CTA',
    plural: 'Final CTAs',
  },
  fields: [
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
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Button tekst',
      required: true,
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA Link',
      required: true,
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullet points',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
          required: true,
        },
      ],
    },
    {
      name: 'teamImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Team foto',
      admin: {
        description: 'Foto van het team',
      },
    },
  ],
}
