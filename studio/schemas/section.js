export default {
  name: 'section',
  title: 'section',
  type: 'object',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle for the section',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      description: 'The items for this section, i.e. products or services',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      title: 'Description',
      description: 'The section description',
      type: 'text',
    },
  ],
};
