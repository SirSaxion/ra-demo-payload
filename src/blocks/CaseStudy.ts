import type { Block } from 'payload'

export const CaseStudy: Block = {
  slug: 'caseStudy',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
      defaultValue: 'CASE STUDY',
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
      label: 'Subtitel',
    },
    {
      name: 'tone',
      type: 'select',
      label: 'Tone',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
    },
    {
      name: 'frameless',
      type: 'checkbox',
      label: 'Frameless',
      defaultValue: false,
    },
    {
      name: 'showBackdropLogo',
      type: 'checkbox',
      label: 'Toon backdrop logo',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Afbeelding',
      required: true,
    },
    {
      name: 'kpis',
      type: 'array',
      label: 'KPIs',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'from',
          type: 'number',
          label: 'Van',
          required: true,
        },
        {
          name: 'to',
          type: 'number',
          label: 'Naar',
          required: true,
        },
        {
          name: 'unit',
          type: 'select',
          label: 'Eenheid',
          options: [
            { label: 'Euro', value: 'eur' },
            { label: 'Percentage', value: 'percentage' },
            { label: 'Aantal', value: 'number' },
          ],
        },
        {
          name: 'sublabel',
          type: 'text',
          label: 'Sub-label',
        },
        {
          name: 'span',
          type: 'number',
          label: 'Grid span (1-3)',
          min: 1,
          max: 3,
          defaultValue: 1,
        },
      ],
    },
    {
      name: 'bullets',
      type: 'array',
      label: 'Bullet points',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Tekst',
          required: true,
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
          label: 'Button tekst',
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
          label: 'Button tekst',
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
