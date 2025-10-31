import type { Block } from 'payload'

export const MakelaarsWhatYouGetSection: Block = {
  slug: 'makelaarsWhatYouGetSection',
  interfaceName: 'MakelaarsWhatYouGetSection',
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
      name: 'bonusTitle',
      type: 'text',
      label: 'Bonus Titel',
    },
    {
      name: 'bonusDescription',
      type: 'text',
      label: 'Bonus Beschrijving',
    },
  ],
}
