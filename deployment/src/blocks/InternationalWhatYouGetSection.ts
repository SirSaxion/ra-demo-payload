import type { Block } from 'payload'

export const InternationalWhatYouGetSection: Block = {
  slug: 'internationalWhatYouGetSection',
  interfaceName: 'InternationalWhatYouGetSection',
  dbName: 'intl_what_you_get',
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
      name: 'services',
      type: 'array',
      label: 'Diensten',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'guaranteesTitle',
      type: 'text',
      label: 'Garanties titel',
    },
    {
      name: 'guarantees',
      type: 'array',
      label: 'Garanties',
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
      name: 'bonusIcon',
      type: 'text',
      label: 'Bonus Icon',
    },
    {
      name: 'bonusTitle',
      type: 'text',
      label: 'Bonus Titel',
    },
    {
      name: 'bonusDescription',
      type: 'text',
      label: 'Bonus Beschrijving',
    },
    {
      name: 'bonusItems',
      type: 'array',
      label: 'Bonus Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
  ],
}
