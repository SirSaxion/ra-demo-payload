import type { Block } from 'payload'

export const OverOnsCultureSection: Block = {
  slug: 'overOnsCultureSection',
  interfaceName: 'OverOnsCultureSection',
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
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'comparisonRows',
      type: 'array',
      label: 'Comparison Rows',
      fields: [
        {
          name: 'aspect',
          type: 'text',
          label: 'Aspect',
        },
        {
          name: 'aspectIcon',
          type: 'text',
          label: 'Aspect Icon',
        },
        {
          name: 'other',
          type: 'text',
          label: 'Anderen',
        },
        {
          name: 'realAccelerate',
          type: 'text',
          label: 'Real Accelerate',
        },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      label: 'Testimonial',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
        },
        {
          name: 'author',
          type: 'text',
          label: 'Author',
        },
        {
          name: 'company',
          type: 'text',
          label: 'Company',
        },
      ],
    },
    {
      name: 'tableHeaderAspect',
      type: 'text',
      label: 'Table Header - Aspect Column',
      defaultValue: 'Aspect',
      localized: true,
    },
    {
      name: 'tableHeaderOthers',
      type: 'text',
      label: 'Table Header - Others Column',
      defaultValue: 'Andere bureaus',
      localized: true,
    },
    {
      name: 'tableHeaderRealAccelerate',
      type: 'text',
      label: 'Table Header - Real Accelerate Column',
      defaultValue: 'Real Accelerate',
      localized: true,
    },
    {
      name: 'testimonialLabel',
      type: 'text',
      label: 'Testimonial Section Label',
      defaultValue: '💬 Testimonial',
      localized: true,
    },
  ],
}
