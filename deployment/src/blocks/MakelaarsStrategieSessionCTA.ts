import type { Block } from 'payload'

export const MakelaarsStrategieSessionCTA: Block = {
  slug: 'makelaarsStrategieSessionCTA',
  interfaceName: 'MakelaarsStrategieSessionCTA',
  fields: [
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
      label: 'Voordelen',
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
    {
      name: 'ctaSubtext',
      type: 'text',
      label: 'CTA Subtext',
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA Link',
    },
  ],
}
