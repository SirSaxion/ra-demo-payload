import type { Block } from 'payload'

export const CasesStartYourStory: Block = {
  slug: 'casesStartYourStory',
  interfaceName: 'CasesStartYourStory',
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
      name: 'titleHighlight',
      type: 'text',
      label: 'Titel Highlight',
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
          label: 'Tekst',
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
    {
      name: 'ctaFootnote',
      type: 'text',
      label: 'CTA Footnote',
      required: true,
    },
  ],
}
