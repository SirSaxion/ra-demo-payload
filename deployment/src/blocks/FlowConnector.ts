import type { Block } from 'payload'

export const FlowConnector: Block = {
  slug: 'flowConnector',
  labels: {
    singular: 'Flow Connector',
    plural: 'Flow Connectors',
  },
  fields: [
    {
      name: 'note',
      type: 'text',
      label: 'Opmerking',
      admin: {
        description: 'Dit block heeft geen configureerbare opties - het is puur visueel',
        readOnly: true,
      },
      defaultValue: 'Decoratief element tussen secties',
    },
  ],
}
