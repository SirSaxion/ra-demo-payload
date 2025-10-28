import type { Block } from 'payload'

export const TargetGroupsOverview: Block = {
  slug: 'targetGroupsOverview',
  labels: {
    singular: 'Target Groups Overview',
    plural: 'Target Groups Overviews',
  },
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
      label: 'Subtitel',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Doelgroepen',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Beschrijving',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Afbeelding',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
        {
          name: 'key',
          type: 'text',
          label: 'Key (voor intern gebruik)',
        },
      ],
    },
  ],
}
