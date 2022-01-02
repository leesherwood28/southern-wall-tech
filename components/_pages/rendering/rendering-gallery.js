import ImageGallery from 'react-image-gallery';

export default function RenderingGallery() {
  const images = [
    {
      original: '/rendered-exterior-wall.jpg',
      originalAlt: 'Image of a rendered exterior wall.',
      thumbnail: '/rendered-exterior-wall.jpg',
      thumbnailAlt: 'Image of a rendered exterior wall thumbnail.',
    },
    {
      original: '/rendered-exterior-wall-corner.jpg',
      originalAlt: 'Image of a rendered exterior wall corner.',
      thumbnail: '/rendered-exterior-wall-corner.jpg',
      thumbnailAlt: 'Image of a rendered exterior wall corner thumbnail.',
    },
    ...Array.from(Array(5).keys()).map((i) => ({
      original: `/rendered-wall-${i + 1}.jpg`,
      originalAlt: 'Image of a rendered wall',
      thumbnail: `/rendered-wall-${i + 1}.jpg`,
      thumbnailAlt: 'Image of a rendered wall',
    })),
  ];

  return <ImageGallery items={images} autoPlay={true}></ImageGallery>;
}
