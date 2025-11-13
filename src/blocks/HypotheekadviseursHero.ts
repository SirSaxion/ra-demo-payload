import type { Block } from 'payload'

export const HypotheekadviseursHero: Block = {
  slug: 'hypotheekadviseursHero',
  dbName: 'hyp_hero',
  interfaceName: 'HypotheekadviseursHero',
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
      label: 'Subtitle',
      required: true,
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
          name: 'href',
          type: 'text',
          label: 'Link',
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
    {
      name: 'editBVImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Edit BV Afbeelding',
      admin: {
        description: 'Afbeelding voor Edit BV Partnership showcase',
      },
    },
    {
      name: 'editBVImageAlt',
      type: 'text',
      label: 'Edit BV Afbeelding Alt Text',
      admin: {
        description: 'Alt text voor Edit BV afbeelding',
      },
    },
    {
      name: 'editBVTitle',
      type: 'text',
      label: 'Edit BV Titel',
    },
    {
      name: 'editBVSubtitle',
      type: 'text',
      label: 'Edit BV Subtitle',
    },
    {
      name: 'editBVStats',
      type: 'array',
      label: 'Edit BV Stats',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
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
          label: 'Waarde',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
      ],
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Quote',
    },
    {
      name: 'usps',
      type: 'array',
      label: 'USPs',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
        },
      ],
    },
  ],
}
