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
    {
      name: 'perfectForTitle',
      type: 'text',
      label: 'Perfect For Title',
    },
    {
      name: 'perfectForItems',
      type: 'array',
      label: 'Perfect For Items',
      dbName: 'perfect_items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
    {
      name: 'notSuitableTitle',
      type: 'text',
      label: 'Not Suitable Title',
    },
    {
      name: 'notSuitableItems',
      type: 'array',
      label: 'Not Suitable Items',
      dbName: 'notsuitable_items',
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
