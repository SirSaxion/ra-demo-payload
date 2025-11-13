import type { Block } from 'payload'

export const HrRecruitmentWatJeKrijgt: Block = {
  slug: 'hrRecruitmentWatJeKrijgt',
  interfaceName: 'HrRecruitmentWatJeKrijgtBlock',
  labels: {
    singular: 'HR Recruitment Wat Je Krijgt',
    plural: 'HR Recruitment Wat Je Krijgt',
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
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Main Features',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name (Lucide)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Image',
          admin: {
            description: 'Image for this feature',
          },
        },
      ],
    },
    {
      name: 'bonusTitle',
      type: 'text',
      label: 'Bonus Section Title',
    },
    {
      name: 'bonusItems',
      type: 'array',
      label: 'Bonus Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
  ],
}
