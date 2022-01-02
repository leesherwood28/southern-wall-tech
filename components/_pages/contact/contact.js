import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
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
    <div className='mt-4'>
      <h2 className='font-light text-3xl italic mb-8 text-pink-700'>
        Contact Information
      </h2>
      <ul>
        <li className='flex items-center'>
          <HiOutlineMail className='mr-4'></HiOutlineMail> email
        </li>
        <li>
          <HiOutlineMail></HiOutlineMail> email
        </li>
        <li>
          <HiOutlineMail></HiOutlineMail> email
        </li>
      </ul>
    </div>
  );
}
