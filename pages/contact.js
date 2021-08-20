import Head from 'next/head';
import Image from 'next/image';
import Article from '../components/article';
import ContactForm from '../components/contact-form';
import DualPageLayout from '../components/dual-page-layout';

export default function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name='description'
          content='Rendering and Plastering Company Contact'
        />
      </Head>
      <DualPageLayout>
        <div className='relative h-full w-full'>
          <Image
            src='/message.svg'
            alt='Picture of envelope'
            layout='fill'
            objectFit='contain'
          ></Image>
        </div>

        <Article title='Contact'>
          <ContactForm className='w-full'></ContactForm>
        </Article>
      </DualPageLayout>
    </>
  );
}
