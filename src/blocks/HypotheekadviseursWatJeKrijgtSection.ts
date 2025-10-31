import type { Block } from 'payload'

export const HypotheekadviseursWatJeKrijgtSection: Block = {
  slug: 'hypotheekadviseursWatJeKrijgtSection',
  dbName: 'hyp_wat_je_krijgt',
  interfaceName: 'HypotheekadviseursWatJeKrijgtSection',
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
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
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
      ],
    },
  ],
}
