import Head from 'next/head';
import { ServicePage } from '../components/shared/service-page';
import { ContactPage } from '../components/_pages/contact/contact';
import { HomePage } from '../components/_pages/home/homePage';
import client from '../sanity-client';

export async function getStaticProps() {
  const [intro] = await client.fetch(`*[_type == "intro"]`);
  const services = (await client.fetch(`*[_type == "service"]`)).sort((x, y) =>
    x.service.localeCompare(y.service)
  );
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
        {services.map((s, i) => (
          <ServicePage key={s.service} service={s} />
        ))}
        <ContactPage />
      </div>
    </>
  );
}
