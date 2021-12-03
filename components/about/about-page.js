import Article from '../article';
import DualPageLayout from '../dual-page-layout';
import Image from 'next/image';

export function AboutPage() {
  return (
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
          specifications our clients need. We work with all types of customers,
          from small residential projects to large commercial building
          developments.
        </p>
        )
      </Article>
    </DualPageLayout>
  );
}
