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
          Plasterer and Renderer contractors in bournemouth and poole - Southern
          Wall Tech
        </title>
        <meta
          name='description'
          content='Dorset Plastering and Rendering Solutions'
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
