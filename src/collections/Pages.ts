import type { CollectionConfig } from 'payload'
import {
  HeroSection,
  TrustStrip,
  ProblemSection,
  CaseStudy,
  UniqueApproach,
  FlowConnector,
  MarketingMachine,
  TargetGroupsOverview,
  NumbersSection,
  TestimonialsSection,
  FAQSection,
  HowItWorksSection,
  FinalCTA,
} from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true, // Public pages
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Pagina Titel',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
      unique: true,
      admin: {
        description: 'De URL van deze pagina (bijv. "makelaars" of "/" voor homepage)',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    // SEO Section
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              required: true,
              blocks: [
                HeroSection,
                TrustStrip,
                ProblemSection,
                CaseStudy,
                UniqueApproach,
                FlowConnector,
                MarketingMachine,
                TargetGroupsOverview,
                NumbersSection,
                TestimonialsSection,
                FAQSection,
                HowItWorksSection,
                FinalCTA,
              ],
              admin: {
                description: 'Sleep blokken om de volgorde te wijzigen. Klik op een blok om deze te bewerken.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seo',
              type: 'group',
              fields: [
                {
                  name: 'metaTitle',
                  type: 'text',
                  label: 'Meta Titel',
                  admin: {
                    description: 'Verschijnt in Google zoekresulataten (max 60 karakters)',
                  },
                },
                {
                  name: 'metaDescription',
                  type: 'textarea',
                  label: 'Meta Beschrijving',
                  admin: {
                    description: 'Verschijnt in Google zoekresulataten (max 160 karakters)',
                  },
                },
                {
                  name: 'ogImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Social Share Afbeelding',
                  admin: {
                    description: 'Afbeelding die getoond wordt bij delen op social media',
                  },
                },
              ],
            },
            {
              name: 'organizationSchema',
              type: 'group',
              label: 'Schema.org Data',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Schema markup inschakelen',
                  defaultValue: false,
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Bedrijfsnaam',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Beschrijving',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'contactEmail',
                  type: 'text',
                  label: 'Contact Email',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
                {
                  name: 'contactPhone',
                  type: 'text',
                  label: 'Contact Telefoon',
                  admin: {
                    condition: (data, siblingData) => siblingData?.enabled,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
