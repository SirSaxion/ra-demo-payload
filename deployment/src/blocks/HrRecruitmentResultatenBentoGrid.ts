import type { Block } from 'payload'

export const HrRecruitmentResultatenBentoGrid: Block = {
  slug: 'hrRecruitmentResultatenBentoGrid',
  interfaceName: 'HrRecruitmentResultatenBentoGridBlock',
  labels: {
    singular: 'HR Recruitment Resultaten Bento Grid',
    plural: 'HR Recruitment Resultaten Bento Grids',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Bewezen resultaten',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Wat onze klanten bereiken',
    },
    {
      name: 'results',
      type: 'array',
      label: 'Results',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Metric',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
}
