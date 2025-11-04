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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'image',
      type: 'text',
      label: 'Image',
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt',
    },
    {
      name: 'practiceTitle',
      type: 'text',
      label: 'Practice Title',
    },
    {
      name: 'practicePoints',
      type: 'array',
      label: 'Practice Points',
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
    },
  ],
}
