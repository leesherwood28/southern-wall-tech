export default function Article({ title, children, className }) {
  return (
    <article className='flex-1 flex flex-col items-center justify-center overflow-hidden'>
      <div className='p-4 lg:p-20 flex flex-col items-center justify-center w-full'>
        <h2 className='font-light text-5xl italic mb-8 text-pink-700'>
          {title}
        </h2>
        {children}
      </div>
    </article>
  );
}
