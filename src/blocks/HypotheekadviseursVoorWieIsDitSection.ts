import type { Block } from 'payload'

export const HypotheekadviseursVoorWieIsDitSection: Block = {
  slug: 'hypotheekadviseursVoorWieIsDitSection',
  dbName: 'hyp_voor_wie',
  interfaceName: 'HypotheekadviseursVoorWieIsDitSection',
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
      name: 'perfectForTitle',
      type: 'text',
      label: 'Perfect Voor Titel',
    },
    {
      name: 'perfectForItems',
      type: 'array',
      label: 'Perfect Voor Items',
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
      ],
    },
    {
      name: 'notForTitle',
      type: 'text',
      label: 'Niet Voor Titel',
    },
    {
      name: 'notForItems',
      type: 'array',
      label: 'Niet Voor Items',
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
