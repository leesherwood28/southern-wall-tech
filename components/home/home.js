import AdCarousel from './ad-carousel';
import Summary from './summary';
import Title from './title';

export function Home() {
  return (
    <>
      <div className='flex flex-col items-center py-0 sm:py-10'>
        <section className='w-full'>
          <AdCarousel></AdCarousel>
        </section>
        <div className='lg:w-4/5 xl:w-3/5 flex flex-col items-center'>
          <section></section>

          <section>
            <Title></Title>
          </section>

          <section className='mt-4 px-4 w-full sm:w-3/5'>
            <Summary></Summary>
          </section>
        </div>
      </div>
    </>
  );
}
