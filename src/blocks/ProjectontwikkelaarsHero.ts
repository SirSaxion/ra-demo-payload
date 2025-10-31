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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Title Highlight',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      admin: {
        description: 'Supports HTML for bold text',
      },
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullets',
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
    },
    {
      name: 'showcaseSubtitle',
      type: 'text',
      label: 'Showcase Subtitle',
    },
    {
      name: 'showcaseStats',
      type: 'array',
      label: 'Showcase Stats',
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
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
      ],
    },
    {
      name: 'showcaseNote',
      type: 'text',
      label: 'Showcase Note',
    },
  ],
}
