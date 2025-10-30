import type { Block } from 'payload'

export const CasesMasonry: Block = {
  slug: 'casesMasonry',
  interfaceName: 'CasesMasonry',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
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
