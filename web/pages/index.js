import Head from 'next/head';
import { GalleryPage } from '../components/shared/gallery-page';
import { InfoPage } from '../components/shared/info-page';
import { ContactPage } from '../components/_pages/contact/contact';
import { HomePage } from '../components/_pages/home/homePage';
import { PlasteringPage } from '../components/_pages/plastering/plastering-page';
import RenderingGallery from '../components/_pages/rendering/rendering-gallery';
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
        {services.map((s, i) => (
          <GalleryPage
            key={s.service}
            title={s.service}
            id={s.service}
            gallery={<RenderingGallery />}
            content={
              <div className='grid items-center gap-10 lg:gap-40'>
                <InfoPage
                  type='products'
                  items={s.products.items}
                  text={s.products.description}
                  intro={s.products.subtitle}
                ></InfoPage>
                <InfoPage
                  type='services'
                  items={s.services.items}
                  text={s.services.description}
                  intro={s.services.subtitle}
                ></InfoPage>
              </div>
            }
          />
        ))}
        <ContactPage />
      </div>
    </>
  );
}
