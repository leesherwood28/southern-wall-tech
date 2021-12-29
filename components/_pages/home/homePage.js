import AdCarousel from './ad-carousel';
import Summary from './summary';
import Title from './title';
import Image from 'next/image';

export function HomePage() {
  return (
    <>
      <div
        id='home'
        className='flex flex-col items-center py-0 sm:py-10 w-screen'
      >
        <section className='w-full'>
          <AdCarousel></AdCarousel>
        </section>
        <div className='lg:w-4/5 xl:w-3/5 flex flex-col items-center'>
          <section></section>

          <section className='md:px-20'>
            <Image
              alt='Southern Wall Tech Title'
              src='/logo-full.png'
              width={3400}
              height={1374}
            ></Image>
          </section>

          <section className='mt-4 px-4 w-full sm:w-3/5'>
            <Summary></Summary>
          </section>
        </div>
      </div>
    </>
  );
}
