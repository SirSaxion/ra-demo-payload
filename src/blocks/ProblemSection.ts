import type { Block } from 'payload'

export const ProblemSection: Block = {
  slug: 'problemSection',
  labels: {
    singular: 'Problem Section',
    plural: 'Problem Sections',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
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
      label: 'Subtitel',
    },
    {
      name: 'oldSituation',
      type: 'group',
      label: 'Oude Situatie',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'OUDE SITUATIE',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Items',
          fields: [
            {
              name: 'icon',
              type: 'text',
              label: 'Icon naam (Lucide)',
              required: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Tekst',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'newSituation',
      type: 'group',
      label: 'Nieuwe Situatie / Onze Methode',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          defaultValue: 'ONZE METHODE',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Items',
          fields: [
            {
              name: 'icon',
              type: 'text',
              label: 'Icon naam (Lucide)',
              required: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Tekst',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
