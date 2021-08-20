import Head from 'next/head';
import Image from 'next/image';
import Article from '../components/article';
import DualPageLayout from '../components/dual-page-layout';

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
      <DualPageLayout>
        <div className='relative h-full w-full'>
          <Image
            src='/construction.svg'
            alt='Picture of house under construction'
            layout='fill'
            objectFit='contain'
          ></Image>
        </div>

        <Article title='About'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Article>
      </DualPageLayout>
    </>
  );
}
