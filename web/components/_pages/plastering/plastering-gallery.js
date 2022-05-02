import ImageGallery from 'react-image-gallery';

export default function PlasteringGallery() {
  const images = [
    {
      original: '/rendered-ceiling.jpg',
      originalAlt: 'Image of a rendered ceiling.',
      thumbnail: '/rendered-ceiling.jpg',
      thumbnailAlt: 'Image of a rendered ceiling thumbnail.',
    },
    {
      original: '/rendered-room-with-ceiling-window.jpg',
      originalAlt: 'Image of a rendered room with ceiling window.',
      thumbnail: '/rendered-room-with-ceiling-window.jpg',
      thumbnailAlt: 'Image of a rendered room with ceiling window thumbnail.',
    },
    {
      original: '/rendered-room-with-curved-ceiling.jpg',
      originalAlt: 'Image of a rendered room with curved ceiling.',
      thumbnail: '/rendered-room-with-curved-ceiling.jpg',
      thumbnailAlt: 'Image of a rendered room with curved ceiling thumbnail.',
    },
    {
      original: '/rendered-room-with-multiple-doors.jpg',
      originalAlt: 'Image of a rendered room with multiple doors.',
      thumbnail: '/rendered-room-with-multiple-doors.jpg',
      thumbnailAlt: 'Image of a rendered room with multiple doors thumbnail.',
    },
    {
      original: '/rendered-room-with-patio-door.jpg',
      originalAlt: 'Image of a rendered room with patio door.',
      thumbnail: '/rendered-room-with-patio-door.jpg',
      thumbnailAlt: 'Image of a rendered room with patio door thumbnail.',
    },
    {
      original: '/rendered-room-with-staggered-ceiling.jpg',
      originalAlt: 'Image of a rendered room with staggered ceiling.',
      thumbnail: '/rendered-room-with-staggered-ceiling.jpg',
      thumbnailAlt: 'Image of a rendered room with staggered ceiling.',
    },
    ...Array.from(Array(13).keys()).map((i) => ({
      original: `/plastered-wall-${i + 1}.jpg`,
      originalAlt: 'Image of a plastered wall',
      thumbnail: `/plastered-wall-${i + 1}.jpg`,
      thumbnailAlt: 'Image of a plastered wall',
    })),
  ];

  return <ImageGallery items={images} autoPlay={true}></ImageGallery>;
}
