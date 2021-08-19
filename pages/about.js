import Head from 'next/head';
import Article from '../components/article';
import GalleryCarousel from '../components/gallery-carousel';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content='Rendering and Plastering Company About'
        />
      </Head>
      <div className='flex flex-col md:flex-row py-2 sm:py-10 px-2 sm:px-12 items-stretch'>
        <div className='flex-1 overflow-hidden'></div>
        <div className='flex-1 flex flex-col items-center justify-center overflow-hidden'>
          <Article title='About'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Article>
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
