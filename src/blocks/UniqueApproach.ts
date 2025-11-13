import type { Block } from 'payload'

export const UniqueApproach: Block = {
  slug: 'uniqueApproach',
  labels: {
    singular: 'Unique Approach',
    plural: 'Unique Approaches',
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
      type: 'text',
      label: 'Subtitel',
    },
    {
      name: 'metricValue',
      type: 'text',
      label: 'Metric waarde (bijv. "99%")',
    },
    {
      name: 'metricLabel',
      type: 'text',
      label: 'Metric label',
    },
    {
      name: 'card1Title',
      type: 'text',
      label: 'Card 1 - Titel',
    },
    {
      name: 'card1Description',
      type: 'textarea',
      label: 'Card 1 - Beschrijving',
    },
    {
      name: 'card2Title',
      type: 'text',
      label: 'Card 2 - Titel',
    },
    {
      name: 'card2Description',
      type: 'textarea',
      label: 'Card 2 - Beschrijving',
    },
    {
      name: 'card3Title',
      type: 'text',
      label: 'Card 3 - Titel',
    },
    {
      name: 'card3Description',
      type: 'textarea',
      label: 'Card 3 - Beschrijving',
    },
    {
      name: 'card4Title',
      type: 'text',
      label: 'Card 4 - Titel',
    },
    {
      name: 'card4Description',
      type: 'textarea',
      label: 'Card 4 - Beschrijving',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA tekst',
    },
    {
      name: 'ctaButtonLabel',
      type: 'text',
      label: 'CTA button label',
    },
    {
      name: 'ctaButtonHref',
      type: 'text',
      label: 'CTA button link',
    },
    {
      name: 'decorativeImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Decoratieve afbeelding',
      admin: {
        description: 'Optionele decoratieve afbeelding (bijv. Emiro pointing)',
      },
    },
  ],
}
