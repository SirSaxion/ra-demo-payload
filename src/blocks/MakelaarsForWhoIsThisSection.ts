import type { Block } from 'payload'

export const MakelaarsForWhoIsThisSection: Block = {
  slug: 'makelaarsForWhoIsThisSection',
  interfaceName: 'MakelaarsForWhoIsThisSection',
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
      name: 'perfectFor',
      type: 'array',
      label: 'Perfect Voor',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'notForTitle',
      type: 'text',
      label: 'Niet Geschikt Titel',
    },
    {
      name: 'notFor',
      type: 'array',
      label: 'Niet Geschikt Voor',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight (HTML allowed)',
    },
  ],
}
