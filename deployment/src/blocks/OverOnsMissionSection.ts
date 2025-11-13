import type { Block } from 'payload'

export const OverOnsMissionSection: Block = {
  slug: 'overOnsMissionSection',
  interfaceName: 'OverOnsMissionSection',
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
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content (HTML toegestaan)',
        },
      ],
    },
    {
      name: 'tagline',
      type: 'textarea',
      label: 'Tagline',
      required: true,
    },
  ],
}
