import Gallery from './gallery';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../sanity-client';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

export function ImageGallery({ images }) {
  const imageUrls = (images || []).map((i) =>
    builder.image(i).width(300).height(300).url()
  );
  return (
    <Gallery
      children={imageUrls.map((url, i) => (
        // <div key={i}>{url}</div>
        <Image key={url} src={url} width={300} height={300}></Image>
      ))}
    ></Gallery>
  );
}
