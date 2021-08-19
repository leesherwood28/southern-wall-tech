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
        <article className='flex-1 flex flex-col items-center justify-center overflow-hidden'>
          <div className='p-20 flex flex-col items-center justify-center'>
            <h1 className='font-light text-5xl italic mb-8 text-pink-700'>
              Gallery
            </h1>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
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
