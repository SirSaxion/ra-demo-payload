import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'websiteUrl', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'ID',
      required: true,
      unique: true,
      admin: {
        description: 'Unieke identifier (bijv. "paul-thijssen")',
      },
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
      label: 'Ondertitel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschrijving',
      required: true,
      admin: {
        description: 'Uitgebreide beschrijving van het project',
      },
    },
    {
      name: 'websiteUrl',
      type: 'text',
      label: 'Website URL',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      label: 'Categorie',
      required: true,
      admin: {
        description: 'Bijv. "Premium Makelaar", "Moderne Makelaar"',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      minRows: 1,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    // Results Section
    {
      name: 'results',
      type: 'array',
      label: 'Resultaten',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Metriek',
          required: true,
          admin: {
            description: 'Bijv. "Verkopen", "Lead kwaliteit"',
          },
        },
        {
          name: 'value',
          type: 'text',
          label: 'Waarde',
          required: true,
          admin: {
            description: 'Bijv. "€2M+", "+180%"',
          },
        },
        {
          name: 'description',
          type: 'text',
          label: 'Beschrijving',
          required: true,
        },
      ],
    },
    // Images Section
    {
      name: 'images',
      type: 'group',
      label: 'Afbeeldingen',
      fields: [
        {
          name: 'hero',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Afbeelding',
          required: true,
        },
        {
          name: 'gallery',
          type: 'array',
          label: 'Galerij',
          minRows: 1,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    // Project Details
    {
      name: 'details',
      type: 'group',
      label: 'Project Details',
      fields: [
        {
          name: 'projectDuration',
          type: 'text',
          label: 'Project Duur',
          admin: {
            description: 'Bijv. "3 maanden"',
          },
        },
        {
          name: 'location',
          type: 'text',
          label: 'Locatie',
        },
        {
          name: 'teamSize',
          type: 'text',
          label: 'Team Grootte',
        },
        {
          name: 'technologies',
          type: 'array',
          label: 'Technologieën',
          fields: [
            {
              name: 'tech',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    // Testimonial
    {
      name: 'testimonial',
      type: 'group',
      label: 'Testimonial',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          label: 'Auteur',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Rol',
          required: true,
        },
      ],
    },
    // SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Titel',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Beschrijving',
        },
      ],
    },
  ],
}
