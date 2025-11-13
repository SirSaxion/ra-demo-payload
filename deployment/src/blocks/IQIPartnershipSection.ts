import type { Block } from 'payload'

export const IQIPartnershipSection: Block = {
  slug: 'iqiPartnershipSection',
  interfaceName: 'IQIPartnershipSection',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
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
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Quote',
    },
    {
      name: 'leftImage',
      type: 'text',
      label: 'Linker afbeelding URL',
    },
    {
      name: 'leftImageAlt',
      type: 'text',
      label: 'Linker afbeelding alt',
    },
    {
      name: 'leftTitle',
      type: 'text',
      label: 'Linker titel',
    },
    {
      name: 'leftSubtitle',
      type: 'text',
      label: 'Linker subtitle',
    },
    {
      name: 'leftItems',
      type: 'array',
      label: 'Linker items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'rightImage',
      type: 'text',
      label: 'Rechter afbeelding URL',
    },
    {
      name: 'rightImageAlt',
      type: 'text',
      label: 'Rechter afbeelding alt',
    },
    {
      name: 'rightTitle',
      type: 'text',
      label: 'Rechter titel',
    },
    {
      name: 'rightSubtitle',
      type: 'text',
      label: 'Rechter subtitle',
    },
    {
      name: 'rightItems',
      type: 'array',
      label: 'Rechter items',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'bottomInsight',
      type: 'textarea',
      label: 'Bottom Insight',
    },
  ],
}
