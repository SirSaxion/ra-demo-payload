import type { Block } from 'payload'

export const InternationalStrategySessionCTA: Block = {
  slug: 'internationalStrategySessionCTA',
  interfaceName: 'InternationalStrategySessionCTA',
  dbName: 'intl_strategy_cta',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'highlightText',
      type: 'text',
      label: 'Highlighted tekst',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Voordelen',
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
    },
    {
      name: 'ctaFooter',
      type: 'text',
      label: 'CTA Footer',
    },
    {
      name: 'bonusText',
      type: 'text',
      label: 'Bonus tekst',
    },
  ],
}
