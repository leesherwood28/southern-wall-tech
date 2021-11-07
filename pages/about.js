import Head from 'next/head';
import Image from 'next/image';
import Article from '../components/article';
import DualPageLayout from '../components/dual-page-layout';
import MakeAnInquiryButton from '../components/make-an-inquiry-button';

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
            src='/rendered-room-with-curved-ceiling.jpg'
            alt='Picture of house under construction'
            layout='fill'
            objectFit='contain'
          ></Image>
        </div>

        <Article title='About'>
          <p className='mb-4'>
            Here at Southern Wall Tech ltd we specialise in undertaking all
            aspects of plastering and rendering, meeting any requirements and
            specifications our clients need. We work with all types of
            customers, from small residential projects to large commercial
            building developments.
          </p>
          <p className='mb-4'>
            With over 20 years of experience in the plastering industry, we have
            high standards for our quality of work, customer service and
            customer feedback.If you are looking for plasterers in Dorset or
            surrounding areas, please get in touch for a free quote and on-site
            consultation.
          </p>

          <p className='mb-4 font-bold text-left w-full'>
            Our plastering services include:
          </p>
          <ol className='list-disc mb-4'>
            <li>Internal and External Plastering</li>
            <li>Domestic and Commercial Plastering</li>
            <li>Artex Removal</li>
            <li>Stud walls and Partion walls</li>
            <li>Float and Set</li>
            <li>False Ceilings</li>
            <li>Plaster Repairs and Insurance Works</li>
          </ol>
          <p className='mb-4'>
            We offer a wide selection of domestic and commericial plastering in
            Dorset and the surrounding areas. Our team of plasterers are
            experienced, fully trained and qualified to undertake any type and
            size of project.
          </p>
          <MakeAnInquiryButton></MakeAnInquiryButton>
        </Article>
      </DualPageLayout>
    </>
  );
}
