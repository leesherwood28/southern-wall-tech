import ContactButton from '../contact-button';
import Link from 'next/link';
import Menu from '../menu';
import { useRouter } from 'next/router';

export default function Header() {
  const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '/about' },
    { text: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className='bg-black h-12 flex items-stretch flex-none'>
      <div className='flex items-stretch'>
        <div className='flex md:hidden items-stretch'>
          <Menu>
            {links.map((link) => (
              <SideNavLink
                key={link.href}
                text={link.text}
                href={link.href}
              ></SideNavLink>
            ))}
          </Menu>
        </div>
      </div>

      <div className='flex-grow flex items-stretch justify-center'>
        <div className='hidden items-stretch md:flex'>
          {links.map((link) => (
            <HeaderLink
              className='sm:hidden'
              key={link.href}
              text={link.text}
              href={link.href}
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

function SideNavLink({ href, text }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`
            text-white 
            px-8 
            py-4 
            flex 
            items-center 
            justify-center 
            relative
            ${router.pathname === href ? 'bg-white bg-opacity-20' : ''}
            `}
      >
        {text}
        {router.pathname === href ? (
          <div className='w-2 bg-pink-700 absolute top-0 left-0 bottom-0'></div>
        ) : null}
      </a>
    </Link>
  );
}

function HeaderLink({ href, text }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
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
        {router.pathname === href ? (
          <div className='absolute bg-pink-700 h-1 w-full bottom-0 left-0 right-0'></div>
        ) : null}
      </a>
    </Link>
  );
}
