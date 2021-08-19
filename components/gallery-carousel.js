/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Carousel from './carousel';

export default function GalleryCarousel() {
  const images = [...Array(10).keys()].map((i) => `/gallery-${i}.jpg`);

  return (
    <Carousel
      className='w-full max-w-xl h-96 p-4'
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
