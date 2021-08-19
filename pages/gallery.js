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
      <div className='flex flex-col items-center py-0 sm:py-10'>
        <GalleryCarousel></GalleryCarousel>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
