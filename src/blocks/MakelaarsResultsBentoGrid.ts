import type { Block } from 'payload'

export const MakelaarsResultsBentoGrid: Block = {
  slug: 'makelaarsResultsBentoGrid',
  interfaceName: 'MakelaarsResultsBentoGrid',
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
      name: 'results',
      type: 'array',
      label: 'Resultaten',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Bedrijfsnaam',
        },
        {
          name: 'logo',
          type: 'text',
          label: 'Logo URL',
        },
        {
          name: 'image',
          type: 'text',
          label: 'Afbeelding URL',
        },
        {
          name: 'mainMetric',
          type: 'text',
          label: 'Hoofdmetriek',
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
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured',
        },
      ],
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight (HTML allowed)',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Label',
    },
    {
      name: 'ctaHref',
      type: 'text',
      label: 'CTA Link',
    },
  ],
}
