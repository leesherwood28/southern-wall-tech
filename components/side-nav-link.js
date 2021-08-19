import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideNavLink({ href, text }) {
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
