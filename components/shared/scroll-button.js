import Link from 'next/link';

export function ScrollButton({ page, children, className, onClick }) {
  return (
    <Link href={`/#${page}`}>
      <a
        className={className}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {children}
      </a>
    </Link>
  );
}
