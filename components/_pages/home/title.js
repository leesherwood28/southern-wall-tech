import Image from 'next/image';
export function Title() {
  return (
    <div className='flex flex-col items-center'>
      <div style={{ width: '20%' }}>
        <Image
          alt='Southern Wall Tech Title'
          src='/logo.png'
          width={390}
          height={331}
          priority
        ></Image>
      </div>

      <div className='text-3xl sm:text-4xl md:text-5xl font-light text-center sm:mb-2'>
        Southern Wall Tech
      </div>
      <h1 className='sm:text-xl italic text-center text-pink-700'>
        Rendering and Plastering Specialists
      </h1>
    </div>
  );
}
