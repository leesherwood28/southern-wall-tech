import Link from 'next/link';

export default function SideNavLink({href, text}) {
    return (
    <Link href={href}>
      <a 
        className="
            text-white 
            px-8 
            py-4 
            flex 
            items-center 
            justify-center 
            hover:bg-white 
            hover:bg-opacity-20
            active:bg-opacity-30">
            {text}
    </a>
    </Link>)
  }
  