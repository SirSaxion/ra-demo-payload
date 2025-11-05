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
      localized: true,
    },
    {
      name: 'highlightText',
      type: 'text',
      label: 'Highlighted tekst',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Voordelen',
      localized: true,
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
      localized: true,
    },
    {
      name: 'ctaFooter',
      type: 'text',
      label: 'CTA Footer',
      localized: true,
    },
    {
      name: 'bonusText',
      type: 'text',
      label: 'Bonus tekst',
      localized: true,
    },
  ],
}
