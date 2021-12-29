import Head from 'next/head';
import { AboutPage } from '../components/_pages/about/about-page';
import ContactPage from '../components/_pages/contact/contact';
import { HomePage } from '../components/_pages/home/homePage';
import { PlasteringPage } from '../components/_pages/plastering/plastering-page';
import { RenderingPage } from '../components/_pages/rendering/rendering-page';

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div className='overflow-y-auto overflow-x-hidden'>
        <HomePage />
        <AboutPage />
        <PlasteringPage />
        <RenderingPage />
        <ContactPage />
      </div>
    </>
  );
}
