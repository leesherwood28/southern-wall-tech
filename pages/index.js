import Head from 'next/head';
import { ContactPage } from '../components/_pages/contact/contact';
import { HomePage } from '../components/_pages/home/homePage';
import { PlasteringPage } from '../components/_pages/plastering/plastering-page';
import { RenderingPage } from '../components/_pages/rendering/rendering-page';

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Plasterer and Renderer contractors in Bournemouth and Poole - Southern
          Wall Tech
        </title>
        <meta
          name='description'
          content='High Quality Plasterering and Rendering Solutions operating on South Coast'
        />
      </Head>
      <div className='grid gap-20'>
        <HomePage />
        <PlasteringPage />
        <RenderingPage />
        <ContactPage />
      </div>
    </>
  );
}
