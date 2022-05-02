export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  description: 'A service provided by the company',
  fields: [
    {
      name: 'service',
      title: 'Service',
      type: 'string',
      description: 'The name of the service',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',
      description: 'The gallery for this service',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'section',
      description: 'Products used for this service',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'section',
      description: 'Granular services for this service',
    },
  ],
};
