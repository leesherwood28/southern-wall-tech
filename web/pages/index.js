import Head from 'next/head';
import { ContactPage } from '../components/_pages/contact/contact';
import { HomePage } from '../components/_pages/home/homePage';
import { PlasteringPage } from '../components/_pages/plastering/plastering-page';
import { RenderingPage } from '../components/_pages/rendering/rendering-page';
import client from '../sanity-client';

export async function getStaticProps() {
  const [intro] = await client.fetch(`*[_type == "intro"]`);
  const services = await client.fetch(`*[_type == "service"]`);
  return {
    props: {
      intro,
      services,
    },
    revalidate: 1000,
  };
}

export default function Index({ intro, services }) {
  console.log(services);
  return (
    <>
      <Head>
        <title>
          Plasterer and Renderer contractors in Bournemouth and Poole - Southern
          Wall Tech
        </title>
        <meta
          name='description'
          content='High Quality Plasterering and Rendering Solutions operating in Dorset.'
        />
      </Head>
      <div className='grid gap-20'>
        <HomePage intro={intro} />
        <ContactPage />
      </div>
    </>
  );
}
