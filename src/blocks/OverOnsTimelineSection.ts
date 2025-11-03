import type { Block } from 'payload'

export const OverOnsTimelineSection: Block = {
  slug: 'overOnsTimelineSection',
  interfaceName: 'OverOnsTimelineSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Timeline Items',
      localized: true,
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Year',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'bullets',
          type: 'array',
          label: 'Bullet Points',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Text',
            },
          ],
        },
      ],
    },
  ],
}
