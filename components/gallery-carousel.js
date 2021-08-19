import Image from 'next/image';
import Carousel from './carousel';

export default function GalleryCarousel() {
  const adds = [
    {
      image: '/qa.svg',
      alt: 'Image of quality assurance manager',
      text: 'High Quality Plastering And Rendering',
    },
    {
      image: '/contract.svg',
      alt: 'Image of contract',
      text: 'Proffesional Conduct',
    },
    {
      image: '/houses.svg',
      alt: 'Image of multiple buildings',
      text: 'Over 20 Years Of Experience',
    },
  ];

  return (
    <Carousel
      className='h-56 sm:h-60 md:h-72 lg:h-96 w-full p-4'
      userCanMove={false}
      autoRotate={true}
    >
      {adds.map((add) => (
        <div
          key={add.image}
          className='h-full flex items-center justify-center sm:justify-start'
        >
          <div className='w-36 sm:w-60 md:w-80 lg:w-96 flex items-center justify-center'>
            <Image
              src={add.image}
              alt={add.alt}
              width={334}
              height={464}
            ></Image>
          </div>
          <div className='w-48 sm:w-60 md:w-80 lg:w-96 sm:text-2xl md:text-3xl lg:text-3xl flex items-center p-10 font-light text-center'>
            {add.text}
          </div>
        </div>
      ))}
    </Carousel>
  );
}
