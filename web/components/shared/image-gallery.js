import Gallery from './gallery';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanity-client';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

export function ImageGallery({ images }) {
  const imageUrls = (images || []).map((i) =>
    builder.image(i).width(800).height(400).url()
  );
  return (
    <Gallery
      className='w-120 h-120'
      autoRotate={true}
      children={imageUrls.map((url, i) => (
        <Image
          key={url}
          src={url}
          width={800}
          height={400}
          layout='responsive'
        ></Image>
      ))}
    ></Gallery>
  );
}
