import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HeaderLink({ href, text }) {
  const router = useRouter();
  console.log(router.pathname);
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
