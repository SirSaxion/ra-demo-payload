import type { Block } from 'payload'

export const CasesProjectsShowcase: Block = {
  slug: 'casesProjectsShowcase',
  interfaceName: 'CasesProjectsShowcase',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
  ],
}
