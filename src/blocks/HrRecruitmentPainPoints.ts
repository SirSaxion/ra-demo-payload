import type { Block } from 'payload'

export const HrRecruitmentPainPoints: Block = {
  slug: 'hrRecruitmentPainPoints',
  interfaceName: 'HrRecruitmentPainPointsBlock',
  labels: {
    singular: 'HR Recruitment Pain Points',
    plural: 'HR Recruitment Pain Points',
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
      name: 'painPoints',
      type: 'array',
      label: 'Pain Points',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name (Lucide)',
          defaultValue: 'UserX',
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
          label: 'Pain Point Image',
          admin: {
            description: 'Image for this pain point',
          },
        },
        {
          name: 'imageAlt',
          type: 'text',
          label: 'Image Alt Text',
        },
      ],
    },
    {
      name: 'bottomText',
      type: 'text',
      label: 'Bottom Insight Text',
    },
  ],
}
