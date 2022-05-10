import Gallery from './gallery';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanity-client';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

export function ImageGallery({ images }) {
  const imageUrls = images.map((i) => builder.image(i).width(300).height(300));
  return (
    <Gallery
      children={imageUrls.map((url) => (
        <Image
          key={url}
          src={add.image}
          alt={add.alt}
          width={334}
          height={464}
        ></Image>
      ))}
    ></Gallery>
  );
}
