import type { Block } from 'payload'

export const ProjectontwikkelaarsBewezenAanpakSection: Block = {
  slug: 'projectontwikkelaarsBewezenAanpakSection',
  interfaceName: 'ProjectontwikkelaarsBewezenAanpakSectionBlock',
  dbName: 'proj_bewezen',
  labels: {
    singular: 'Projectontwikkelaars Bewezen Aanpak Section',
    plural: 'Projectontwikkelaars Bewezen Aanpak Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (upload)',
      admin: {
        description: 'Afbeelding voor de bewezen aanpak sectie',
      },
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt',
      localized: true,
    },
    {
      name: 'practiceTitle',
      type: 'text',
      label: 'Practice Title',
      localized: true,
    },
    {
      name: 'practicePoints',
      type: 'array',
      label: 'Practice Points',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Text',
        },
      ],
    },
    {
      name: 'missionStatement',
      type: 'text',
      label: 'Mission Statement',
      localized: true,
    },
  ],
}
