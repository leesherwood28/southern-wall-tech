import ContactButton from './contact-button';
import Menu from './menu';
import { ScrollButton } from './scroll-button';
import Image from 'next/image';

export default function Header() {
  const links = [
    { text: 'Home', page: 'home' },
    { text: 'Plastering', page: 'plastering' },
    { text: 'Rendering', page: 'rendering' },
  ];

  const sideNavLinks = [...links, { text: 'Contact', page: 'contact' }];

  return (
    <header className='bg-black h-12 flex items-stretch flex-none'>
      <div className='flex items-stretch'>
        <div className='flex md:hidden items-stretch'>
          <Menu links={sideNavLinks}></Menu>
        </div>
      </div>
      <HeaderAppName></HeaderAppName>
      <div className='flex-grow flex items-stretch justify-center'>
        <div className='hidden items-stretch md:flex'>
          {links.map((link) => (
            <HeaderLink
              className='sm:hidden'
              key={link.page}
              text={link.text}
              page={link.page}
            ></HeaderLink>
          ))}
        </div>
      </div>
      <div className='flex items-stretch'>
        <ContactButton></ContactButton>
      </div>
    </header>
  );
}

function HeaderAppName() {
  return (
    <h1 className='text-white font-bold text-xs flex items-center  flex-shrink-0 md:px-4 md:text-lg'>
      <div className='mr-2 flex items-center w-8'>
        <Image src='/logo.png' width={390} height={331} alt='logo'></Image>
      </div>
      SOUTHERN WALL TECH
    </h1>
  );
}

function HeaderLink({ page, text }) {
  return (
    <ScrollButton
      page={page}
      className={` 
          text-white 
          px-8 flex 
          items-center 
          hover:bg-white 
          hover:bg-opacity-20 
          focus:outline-none 
          focus:bg-white 
          focus:bg-opacity-20
          active:bg-opacity-30
          relative
          `}
    >
      {text}
    </ScrollButton>
  );
}
