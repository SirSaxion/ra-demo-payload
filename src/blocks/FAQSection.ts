import type { Block } from 'payload'

export const FAQSection: Block = {
  slug: 'faqSection',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitel',
    },
    {
      name: 'items',
      type: 'array',
      label: 'FAQ Items',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam (Lucide)',
          defaultValue: 'HelpCircle',
        },
        {
          name: 'question',
          type: 'text',
          label: 'Vraag',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Antwoord',
          required: true,
        },
      ],
    },
  ],
}
