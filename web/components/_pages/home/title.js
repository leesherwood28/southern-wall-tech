import Image from 'next/image';
export function Title({ subtitle }) {
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

      <div className='font-bold text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center sm:mb-2 whitespace-nowrap'>
        SOUTHERN WALL TECH
      </div>
      <h1 className='text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl italic text-center text-pink-700 whitespace-nowrap'>
        {subtitle}
      </h1>
    </div>
  );
}
