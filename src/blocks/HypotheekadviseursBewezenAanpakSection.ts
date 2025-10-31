import type { Block } from 'payload'

export const HypotheekadviseursBewezenAanpakSection: Block = {
  slug: 'hypotheekadviseursBewezenAanpakSection',
  dbName: 'hyp_bewezen_aanpak',
  interfaceName: 'HypotheekadviseursBewezenAanpakSection',
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
      name: 'points',
      type: 'array',
      label: 'Points',
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
  ],
}
