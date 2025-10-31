import type { Block } from 'payload'

export const TargetGroupsOverviewPhotos: Block = {
  slug: 'targetGroupsOverviewPhotos',
  labels: {
    singular: 'Target Groups Overview Photos',
    plural: 'Target Groups Overview Photos',
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
      required: true,
      minRows: 4,
      maxRows: 4,
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
          label: 'Afbeelding (upload)',
          admin: {
            description: 'Upload afbeelding vanuit media library',
          },
        },
        {
          name: 'img',
          type: 'text',
          label: 'Afbeelding URL (alternatief)',
          admin: {
            description: 'Of gebruik een directe URL zoals /images/foto.jpg',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt tekst',
          admin: {
            description: 'Beschrijving voor toegankelijkheid',
          },
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
        },
        {
          name: 'key',
          type: 'text',
          label: 'Key (intern gebruik)',
          admin: {
            description: 'Unieke identifier voor deze doelgroep',
          },
        },
      ],
    },
  ],
}
