import type { Block } from 'payload'

export const HrRecruitmentMethodology: Block = {
  slug: 'hrRecruitmentMethodology',
  interfaceName: 'HrRecruitmentMethodologyBlock',
  labels: {
    singular: 'HR Recruitment Methodology',
    plural: 'HR Recruitment Methodologies',
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
      name: 'methodologyImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Methodology Visual',
      admin: {
        description: 'Visual element for methodology section',
      },
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Methodology Steps',
      minRows: 4,
      maxRows: 4,
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
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
    {
      name: 'bottomText',
      type: 'text',
      label: 'Bottom Text',
    },
  ],
}
