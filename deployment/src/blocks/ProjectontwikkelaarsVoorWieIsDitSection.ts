import type { Block } from 'payload'

export const ProjectontwikkelaarsVoorWieIsDitSection: Block = {
  slug: 'projectontwikkelaarsVoorWieIsDitSection',
  interfaceName: 'ProjectontwikkelaarsVoorWieIsDitSectionBlock',
  dbName: 'proj_voor_wie',
  labels: {
    singular: 'Projectontwikkelaars Voor Wie Is Dit Section',
    plural: 'Projectontwikkelaars Voor Wie Is Dit Sections',
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
      type: 'text',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'perfectTitle',
      type: 'text',
      label: 'Perfect Title',
      localized: true,
    },
    {
      name: 'perfectFor',
      type: 'array',
      label: 'Perfect For',
      localized: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      name: 'notSuitableTitle',
      type: 'text',
      label: 'Not Suitable Title',
      localized: true,
    },
    {
      name: 'notSuitableFor',
      type: 'array',
      label: 'Not Suitable For',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'bottomText',
      type: 'text',
      label: 'Bottom Text',
      localized: true,
    },
  ],
}
