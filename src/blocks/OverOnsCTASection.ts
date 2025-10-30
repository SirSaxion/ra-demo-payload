import type { Block } from 'payload'

export const OverOnsCTASection: Block = {
  slug: 'overOnsCTASection',
  interfaceName: 'OverOnsCTASection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'highlightedWord',
      type: 'text',
      label: 'Highlighted Word',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Benefit',
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'CTA Label',
      required: true,
    },
    {
      name: 'ctaSubtext',
      type: 'text',
      label: 'CTA Subtext',
      required: true,
    },
  ],
}
