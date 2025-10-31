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
      defaultValue: 'De 3 grootste frustraties',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Herken je dit?',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
  ],
}
