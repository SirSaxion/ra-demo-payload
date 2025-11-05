import type { Block } from 'payload'

export const ProjectontwikkelaarsHero: Block = {
  slug: 'projectontwikkelaarsHero',
  interfaceName: 'ProjectontwikkelaarsHeroBlock',
  dbName: 'proj_hero',
  labels: {
    singular: 'Projectontwikkelaars Hero',
    plural: 'Projectontwikkelaars Heroes',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      localized: true,
      admin: {
        description: 'Supports HTML for bold text',
      },
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
      localized: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'ctaPrimary',
      type: 'group',
      label: 'Primary CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          localized: true,
        },
      ],
    },
    {
      name: 'ctaSecondary',
      type: 'group',
      label: 'Secondary CTA',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          localized: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
        },
      ],
    },
    {
      name: 'showcaseImage',
      type: 'text',
      label: 'Showcase Image',
    },
    {
      name: 'showcaseImageAlt',
      type: 'text',
      label: 'Showcase Image Alt',
      localized: true,
    },
    {
      name: 'showcaseIcon',
      type: 'text',
      label: 'Showcase Icon',
    },
    {
      name: 'showcaseTitle',
      type: 'text',
      label: 'Showcase Title',
      localized: true,
    },
    {
      name: 'showcaseSubtitle',
      type: 'text',
      label: 'Showcase Subtitle',
      localized: true,
    },
    {
      name: 'showcaseStats',
      type: 'array',
      label: 'Showcase Stats',
      localized: true,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Text',
        },
      ],
    },
    {
      name: 'floatingStat',
      type: 'group',
      label: 'Floating Stat',
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          localized: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          localized: true,
        },
      ],
    },
    {
      name: 'showcaseNote',
      type: 'text',
      label: 'Showcase Note',
      localized: true,
    },
  ],
}
