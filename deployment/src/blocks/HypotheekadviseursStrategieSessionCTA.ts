import type { Block } from 'payload'

export const HypotheekadviseursStrategieSessionCTA: Block = {
  slug: 'hypotheekadviseursStrategieSessionCTA',
  dbName: 'hyp_strategie_cta',
  interfaceName: 'HypotheekadviseursStrategieSessionCTA',
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
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Label',
    },
  ],
}
