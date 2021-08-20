import Head from 'next/head';
import AdCarousel from '../components/ad-carousel';
import Title from '../components/title';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div className='flex flex-col items-center py-0 sm:py-10'>
        <section className='w-full'>
          <AdCarousel></AdCarousel>
        </section>
        <div className='lg:w-4/5 xl:w-3/5 flex flex-col items-center'>
          <section></section>

          <section>
            <Title></Title>
          </section>
        </div>
      </div>
    </>
  );
}
