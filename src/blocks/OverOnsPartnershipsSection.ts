import type { Block } from 'payload'

export const OverOnsPartnershipsSection: Block = {
  slug: 'overOnsPartnershipsSection',
  interfaceName: 'OverOnsPartnershipsSection',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'partnerships',
      type: 'array',
      label: 'Partnerships',
      fields: [
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
        {
          name: 'image',
          type: 'text',
          label: 'Afbeelding URL',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          dbName: 'partner_features',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Feature',
            },
          ],
        },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Quote',
      required: true,
    },
    {
      name: 'quoteAuthor',
      type: 'text',
      label: 'Quote Author',
      required: true,
    },
    {
      name: 'featuresLabel',
      type: 'text',
      label: 'Features Label',
      defaultValue: 'Key Areas',
      localized: true,
    },
  ],
}
