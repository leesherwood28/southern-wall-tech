/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Carousel from './carousel';

export default function GalleryCarousel() {
  const images = [...Array(10).keys()].map((i) => `/gallery-${i}.jpg`);

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
      {images.map((image) => (
        <Image src={image} alt='blh' width={334} height={464}></Image>
      ))}
    </Carousel>
  );
}
