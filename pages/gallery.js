import Head from 'next/head';
import AdCarousel from '../components/ad-carousel';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name='description'
          content='Rendering and Plastering Company Gallery'
        />
      </Head>
      <div className='flex flex-col items-center py-0 sm:py-10'>
        <AdCarousel></AdCarousel>
        <div className='lg:w-4/5 xl:w-3/5 flex flex-col items-center'>
          <section></section>

          <section>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-light text-center'>
              Southern Wall Tech
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
