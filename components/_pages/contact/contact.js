import Image from 'next/image';
import Article from '../../shared/article';
import { ScrollReveal } from '../../shared/scroll-reaveal';
import ContactForm from './contact-form';

export function ContactPage() {
  return (
    <div
      id='contact'
      className='min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-4'
    >
      <div className='relative'>
        <ScrollReveal>
          <Image
            src='/message.svg'
            alt='Picture of envelope'
            layout='fill'
            objectFit='contain'
          ></Image>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Article title='Contact'>
          <ContactForm className='w-full'></ContactForm>
        </Article>
      </ScrollReveal>
    </div>
  );
}
