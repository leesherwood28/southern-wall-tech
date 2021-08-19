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
      <div className='flex flex-col items-center py-2 sm:py-10 px-2 sm:px-12'>
        <div className='w-full md:max-w-2xl lg:max-w-3xl '>
          <GalleryCarousel></GalleryCarousel>
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
