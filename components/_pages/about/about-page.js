import Article from '../../article';
import DualPageLayout from '../../dual-page-layout';
import Image from 'next/image';

export function AboutPage() {
  return (
    <div className='relative text-center text-white'>
      <Image
        className='w-full'
        src='/rendered-room-with-curved-ceiling.jpg'
        alt='Picture of house under construction'
        width={768}
        height={576}
        layout='responsive'
        objectFit='contain'
      ></Image>
      <p className='mb-4 absolute bottom-10 max-w-3xl left-1/2 text-2xl'>
        Here at Southern Wall Tech ltd we specialise in undertaking all aspects
        of plastering and rendering, meeting any requirements and specifications
        our clients need. We work with all types of customers, from small
        residential projects to large commercial building developments.
      </p>
    </div>
  );
}
