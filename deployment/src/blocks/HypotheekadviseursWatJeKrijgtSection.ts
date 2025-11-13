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
    {
      name: 'supportTitle',
      type: 'text',
      label: 'Support Title',
      localized: true,
    },
    {
      name: 'supportSubtitle',
      type: 'textarea',
      label: 'Support Subtitle',
      localized: true,
    },
    {
      name: 'supportItems',
      type: 'array',
      label: 'Support Items',
      localized: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      name: 'bonusIcon',
      type: 'text',
      label: 'Bonus Icon',
    },
    {
      name: 'bonusTitle',
      type: 'text',
      label: 'Bonus Title',
      localized: true,
    },
    {
      name: 'bonusDescription',
      type: 'textarea',
      label: 'Bonus Description',
      localized: true,
    },
    {
      name: 'bonusItems',
      type: 'array',
      label: 'Bonus Items',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
  ],
}
