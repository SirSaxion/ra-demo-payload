import type { Block } from 'payload'

export const CasesProjectsShowcase: Block = {
  slug: 'casesProjectsShowcase',
  interfaceName: 'CasesProjectsShowcase',
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
      name: 'projects',
      type: 'array',
      label: 'Website Previews',
      admin: {
        description: 'Website preview afbeeldingen (optioneel - fallback naar hardcoded)',
      },
      fields: [
        {
          name: 'websitePreview',
          type: 'upload',
          relationTo: 'media',
          label: 'Website Preview',
          admin: {
            description: 'Screenshot van de website',
          },
        },
        {
          name: 'caseStudyId',
          type: 'text',
          label: 'Case Study ID',
          admin: {
            description: 'ID voor case study dialog (bijv. "brabant-makelaar")',
          },
        },
      ],
    },
  ],
}
