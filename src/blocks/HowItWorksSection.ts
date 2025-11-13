import type { Block } from 'payload'

export const HowItWorksSection: Block = {
  slug: 'howItWorksSection',
  labels: {
    singular: 'How It Works Section',
    plural: 'How It Works Sections',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
      admin: {
        description: 'Badge tekst bovenaan (bijv. "HOE HET WERKT")',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitel',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Stappen',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitel',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam (Lucide)',
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
      ],
    },
    {
      name: 'decorativeImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Decoratieve afbeelding',
      admin: {
        description: 'Optionele decoratieve afbeelding (bijv. Rudy raket)',
      },
    },
  ],
}
