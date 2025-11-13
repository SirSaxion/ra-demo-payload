import type { Block } from 'payload'

export const MakelaarsInternationalHero: Block = {
  slug: 'makelaarsInternationalHero',
  interfaceName: 'MakelaarsInternationalHero',
  dbName: 'intl_hero',
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge tekst',
    },
    {
      name: 'iqiBadgeTitle',
      type: 'text',
      label: 'IQI Badge titel',
    },
    {
      name: 'iqiStats',
      type: 'array',
      label: 'IQI Statistieken',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'countriesBadge',
      type: 'text',
      label: 'Landen badge',
    },
    {
      name: 'quoteText',
      type: 'text',
      label: 'Quote tekst',
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
      name: 'achievements',
      type: 'array',
      label: 'Prestaties',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon naam',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
    {
      name: 'ctaPrimary',
      type: 'group',
      label: 'Primaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'action',
          type: 'text',
          label: 'Actie',
        },
      ],
    },
    {
      name: 'ctaSecondary',
      type: 'group',
      label: 'Secundaire CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
      ],
    },
  ],
}
