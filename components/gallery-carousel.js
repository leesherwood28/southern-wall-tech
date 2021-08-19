import ImageGallery from 'react-image-gallery';

export default function GalleryCarousel() {
  const images = [...Array(10).keys()].map((i) => ({
    original: `/gallery-${i}.jpg`,
    thumbnail: `/gallery-${i}.jpg`,
  }));

  return <ImageGallery items={images}></ImageGallery>;
}
