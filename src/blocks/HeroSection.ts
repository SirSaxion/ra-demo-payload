import type { Block } from 'payload'

export const HeroSection: Block = {
  slug: 'heroSection',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker (kleine tekst boven titel)',
      required: false,
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
      required: false,
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
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link',
          required: true,
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
    {
      name: 'heroVideo',
      type: 'text',
      label: 'Hero Video URL',
      admin: {
        description: 'URL naar de video (bijv. /videos/herofootage_34s.mp4)',
      },
    },
    {
      name: 'heroVideoPoster',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Video Poster (thumbnail)',
      admin: {
        description: 'Eerste frame van de video',
      },
    },
    {
      name: 'avatar1',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar 1',
      admin: {
        description: 'Eerste avatar in trust indicators',
      },
    },
    {
      name: 'avatar1Alt',
      type: 'text',
      label: 'Avatar 1 Alt tekst',
    },
    {
      name: 'avatar2',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar 2',
      admin: {
        description: 'Tweede avatar in trust indicators',
      },
    },
    {
      name: 'avatar2Alt',
      type: 'text',
      label: 'Avatar 2 Alt tekst',
    },
    {
      name: 'avatar3',
      type: 'upload',
      relationTo: 'media',
      label: 'Avatar 3',
      admin: {
        description: 'Derde avatar in trust indicators',
      },
    },
    {
      name: 'avatar3Alt',
      type: 'text',
      label: 'Avatar 3 Alt tekst',
    },
  ],
}
