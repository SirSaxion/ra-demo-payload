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
  ],
}
