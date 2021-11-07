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
          Here at Southern Wall Tech ltd we specialise in undertaking all
          aspects of plastering and rendering, meeting any requirements and
          specifications our clients need. We work with all types of customers,
          from small residential projects to large commercial building
          developments.
        </Article>
      </DualPageLayout>
    </>
  );
}
