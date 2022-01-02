import Image from 'next/image';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import Article from '../../shared/article';
import { ScrollReveal } from '../../shared/scroll-reaveal';
import { Title } from '../../shared/titles';
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
          <ContactInformation></ContactInformation>
        </Article>
      </ScrollReveal>
    </div>
  );
}

function ContactInformation() {
  return (
    <ul className='grid gap-4 mt-8'>
      <li>
        <a
          className='flex items-center text-pink-700'
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
