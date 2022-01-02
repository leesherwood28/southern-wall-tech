import Image from 'next/image';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import Article from '../../shared/article';
import { ScrollReveal } from '../../shared/scroll-reaveal';
import ContactForm from './contact-form';

export function ContactPage() {
  return (
    <div
      id='contact'
      className='min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:items-center pt-4'
    >
      <div className='relative'>
        <ScrollReveal>
          <div className='px-4'>
            <Image
              src='/message.svg'
              alt='Picture of envelope'
              height={631}
              width={949}
            ></Image>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Article title='Contact'>
          <ContactForm className='w-full'></ContactForm>
          <ContactInformation></ContactInformation>
        </Article>
      </ScrollReveal>
    </div>
  );
}

function ContactInformation() {
  return (
    <ul className='grid gap-4 mt-8 text-lg lg:text-2xl'>
      <li>
        <a
          className='flex items-center text-pink-700 hover:text-pink-900'
          href='mailto:jaron@southernwalltech.co.uk'
        >
          <HiOutlineMail className='mr-4'></HiOutlineMail>
          jaron@southernwalltech.co.uk
        </a>
      </li>
      <li>
        <a
          className='flex items-center text-pink-700 hover:text-pink-900'
          href='tel:+447845297278'
        >
          <HiPhone className='mr-4'></HiPhone>
          +44 7845 297278
        </a>
      </li>
    </ul>
  );
}
