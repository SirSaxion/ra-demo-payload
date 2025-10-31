import type { Block } from 'payload'

export const HrRecruitmentVoorWieIsDit: Block = {
  slug: 'hrRecruitmentVoorWieIsDit',
  interfaceName: 'HrRecruitmentVoorWieIsDitBlock',
  labels: {
    singular: 'HR Recruitment Voor Wie Is Dit',
    plural: 'HR Recruitment Voor Wie Is Dit',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Voor wie is dit?',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Is dit de juiste fit voor jou?',
    },
  ],
}
