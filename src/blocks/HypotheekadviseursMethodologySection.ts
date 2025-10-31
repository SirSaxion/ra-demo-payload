import type { Block } from 'payload'

export const HypotheekadviseursMethodologySection: Block = {
  slug: 'hypotheekadviseursMethodologySection',
  dbName: 'hyp_methodology',
  interfaceName: 'HypotheekadviseursMethodologySection',
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
      label: 'Steps',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Number',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
        },
      ],
    },
  ],
}
