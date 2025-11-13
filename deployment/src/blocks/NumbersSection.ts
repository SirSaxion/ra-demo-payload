import type { Block } from 'payload'

export const NumbersSection: Block = {
  slug: 'numbersSection',
  labels: {
    singular: 'Numbers Section',
    plural: 'Numbers Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistieken',
      required: true,
      minRows: 3,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Waarde (bijv. "50+", "95%")',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
      ],
    },
  ],
}
