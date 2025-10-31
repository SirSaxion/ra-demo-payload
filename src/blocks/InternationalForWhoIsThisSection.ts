import type { Block } from 'payload'

export const InternationalForWhoIsThisSection: Block = {
  slug: 'internationalForWhoIsThisSection',
  interfaceName: 'InternationalForWhoIsThisSection',
  dbName: 'intl_for_who',
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
          label: 'Icon naam',
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
      label: 'Niet Geschikt Titel',
    },
    {
      name: 'notForItems',
      type: 'array',
      label: 'Niet Geschikt Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'bottomInsightIcon',
      type: 'text',
      label: 'Bottom Insight Icon',
    },
    {
      name: 'bottomInsightText',
      type: 'textarea',
      label: 'Bottom Insight Text (HTML allowed)',
    },
  ],
}
