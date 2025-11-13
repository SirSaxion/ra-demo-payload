import type { Block } from 'payload'

export const MakelaarsMethodologySection: Block = {
  slug: 'makelaarsMethodologySection',
  interfaceName: 'MakelaarsMethodologySection',
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
      name: 'steps',
      type: 'array',
      label: 'Stappen',
      fields: [
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
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
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
