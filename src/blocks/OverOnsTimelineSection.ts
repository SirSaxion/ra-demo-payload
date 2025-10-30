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
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
  ],
}
