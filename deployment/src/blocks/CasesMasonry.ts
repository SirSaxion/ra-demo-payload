import type { Block } from 'payload'

export const CasesMasonry: Block = {
  slug: 'casesMasonry',
  interfaceName: 'CasesMasonry',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker',
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
      name: 'filterAllLabel',
      type: 'text',
      label: 'Filter "All" Label',
      required: true,
      admin: {
        description: 'Label for the "All stories" filter button (e.g. "Alle verhalen" or "All stories")',
      },
    },
    {
      name: 'resultLabel',
      type: 'text',
      label: 'Result Label',
      required: true,
      admin: {
        description: 'Label for the result section (e.g. "Resultaat" or "Result")',
      },
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'key',
          type: 'text',
          label: 'Category Key',
          required: true,
          admin: {
            description: 'Internal category key (e.g. "makelaars", "buitenland")',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Category Label',
          required: true,
          admin: {
            description: 'Display label for this category',
          },
        },
      ],
    },
    {
      name: 'stories',
      type: 'array',
      label: 'Success Stories',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'id',
          type: 'number',
          label: 'Story ID',
          required: true,
          admin: {
            description: 'Unique ID for this story. Use different IDs per locale (e.g. NL: 1-6, EN: 101-106)',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          label: 'Company',
          required: true,
        },
        {
          name: 'story',
          type: 'textarea',
          label: 'Story/Quote',
          required: true,
          admin: {
            description: 'The customer\'s testimonial or success story',
          },
        },
        {
          name: 'achievement',
          type: 'text',
          label: 'Achievement',
          required: true,
          admin: {
            description: 'Short description of achievement (e.g. "Verkopen verviervoudigd")',
          },
        },
        {
          name: 'metric',
          type: 'text',
          label: 'Metric',
          required: true,
          admin: {
            description: 'Key metric or number (e.g. "400% meer deals")',
          },
        },
        {
          name: 'avatar',
          type: 'text',
          label: 'Avatar URL',
          required: true,
          admin: {
            description: 'URL to avatar image',
          },
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating',
          required: true,
          defaultValue: 5,
          min: 1,
          max: 5,
          admin: {
            description: 'Star rating (1-5)',
          },
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
          admin: {
            description: 'Category key that matches one of the categories above',
          },
        },
      ],
    },
  ],
}
