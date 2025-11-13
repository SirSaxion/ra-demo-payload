import type { Block } from 'payload'

export const CasesVideoTestimonials: Block = {
  slug: 'casesVideoTestimonials',
  interfaceName: 'CasesVideoTestimonials',
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
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'durationBadge',
      type: 'text',
      label: 'Duration Badge',
      required: true,
    },
    {
      name: 'activeIndicator',
      type: 'text',
      label: 'Active Indicator',
      required: true,
    },
    {
      name: 'sidebarHeader',
      type: 'text',
      label: 'Sidebar Header',
      required: true,
    },
    {
      name: 'videos',
      type: 'array',
      label: 'Video Testimonials',
      fields: [
        {
          name: 'id',
          type: 'number',
          label: 'Video ID',
        },
        {
          name: 'company',
          type: 'text',
          label: 'Bedrijfsnaam',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Naam persoon',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Functie',
        },
        {
          name: 'thumbnail',
          type: 'text',
          label: 'Thumbnail URL',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video URL',
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
        },
        {
          name: 'highlight',
          type: 'text',
          label: 'Highlight',
        },
      ],
    },
  ],
}
