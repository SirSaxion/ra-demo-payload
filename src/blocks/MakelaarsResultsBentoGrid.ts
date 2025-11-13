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
          name: 'logoImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo (upload)',
          admin: {
            description: 'Upload een logo afbeelding',
          },
        },
        {
          name: 'logo',
          type: 'text',
          label: 'Logo URL (alternatief)',
          admin: {
            description: 'Of gebruik een directe URL (backwards compatibility)',
          },
        },
        {
          name: 'resultImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Resultaat afbeelding (upload)',
          admin: {
            description: 'Upload een afbeelding voor dit resultaat',
          },
        },
        {
          name: 'image',
          type: 'text',
          label: 'Afbeelding URL (alternatief)',
          admin: {
            description: 'Of gebruik een directe URL (backwards compatibility)',
          },
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
