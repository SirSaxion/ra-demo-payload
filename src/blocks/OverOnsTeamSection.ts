import type { Block } from 'payload'

export const OverOnsTeamSection: Block = {
  slug: 'overOnsTeamSection',
  interfaceName: 'OverOnsTeamSection',
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
      name: 'members',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Functie',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Team member foto',
          admin: {
            description: 'Upload de foto van het teamlid',
          },
        },
      ],
    },
  ],
}
