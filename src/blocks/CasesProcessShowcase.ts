import type { Block } from 'payload'

export const CasesProcessShowcase: Block = {
  slug: 'casesProcessShowcase',
  interfaceName: 'CasesProcessShowcase',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
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
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Stappen',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Stap nummer',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Items',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Tekst',
            },
          ],
        },
        {
          name: 'timeline',
          type: 'text',
          label: 'Timeline',
        },
      ],
    },
  ],
}
