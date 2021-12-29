import Image from 'next/image';
import Article from '../../article';
import DualPageLayout from '../../dual-page-layout';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div id='contact' className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      <div className='relative'>
        <Image
          src='/message.svg'
          alt='Picture of envelope'
          layout='fill'
          objectFit='contain'
        ></Image>
      </div>

      <Article title='Contact'>
        <ContactForm className='w-full'></ContactForm>
      </Article>
    </div>
  );
}
