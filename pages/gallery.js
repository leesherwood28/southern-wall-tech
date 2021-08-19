import Head from 'next/head';
import GalleryCarousel from '../components/gallery-carousel';

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
      <div className='flex flex-col md:flex-row py-2 sm:py-10 px-2 sm:px-12 items-stretch'>
        <div className='flex-1 overflow-hidden'>
          <GalleryCarousel></GalleryCarousel>
        </div>
        <article className='flex-1 flex flex-col p-20 items-center justify-center overflow-hidden'>
          <h1 className='font-light text-3xl italic'>Gallery</h1>
          <p className='text-xl'>
            As a long standing tradesman I pride myself in my work. Here you can
            view some of the items I pride myself on.
          </p>
        </article>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
