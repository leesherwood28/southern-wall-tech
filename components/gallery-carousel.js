import ImageGallery from 'react-image-gallery';

export default function GalleryCarousel() {
  const images = [...Array(10).keys()].map((i) => ({
    original: `/gallery-${i}.jpg`,
    thumbnail: `/gallery-${i}.jpg`,
  }));

  const images1 = [
    {
     original: ,
     thumbnail: ``
    }
  ]

  return <ImageGallery items={images}></ImageGallery>;
}
