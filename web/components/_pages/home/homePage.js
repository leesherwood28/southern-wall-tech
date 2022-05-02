import AdCarousel from './ad-carousel';
import Summary from './summary';
import { ScrollReveal } from '../../shared/scroll-reaveal';
import { Title } from './title';

export function HomePage({ intro }) {
  console.log(intro);
  return (
    <>
      <div
        id='home'
        className='flex flex-col items-center py-0 sm:py-10 w-screen'
      >
        <section className='w-full'>
          <ScrollReveal>
            <AdCarousel></AdCarousel>
          </ScrollReveal>
        </section>
        <div className='lg:w-4/5 xl:w-3/5 flex flex-col items-center'>
          <section></section>

          <section className='md:px-20'>
            <ScrollReveal>
              <Title subtitle={intro.subtitle}></Title>
            </ScrollReveal>
          </section>

          <section className='mt-4 px-4 w-full sm:w-3/5'>
            <Summary summary={intro.intro}></Summary>
          </section>
        </div>
      </div>
    </>
  );
}
