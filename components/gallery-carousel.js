/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Carousel from './carousel';

export default function GalleryCarousel() {
  const images = [...Array(10).keys()].map((i) => `/gallery-${i}.jpg`);

  return (
    <Carousel
      className='h-96 max-w-xl sm:max-w-2xl sm:h-120 md:max-w-3xl md:h-140 w-full p-4'
      userCanMove={true}
      autoRotate={false}
      showCounter={true}
    >
      {images.map((image) => (
        <Image src={image} alt='blh' layout='fill' objectFit='contain'></Image>
      ))}
    </Carousel>
  );
}
