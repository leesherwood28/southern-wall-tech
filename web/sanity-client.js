// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data,
  apiVersion: '2022-05-02',
  token: process.env.SANITY_API_TOKEN,
});
