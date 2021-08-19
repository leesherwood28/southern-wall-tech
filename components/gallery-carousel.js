import ImageGallery from 'react-image-gallery';

export default function GalleryCarousel() {
  const images = [
    {
      original: '/rendered-ceiling.jpg',
      originalAlt: 'Image of a rendered ceiling.',
      thumbnail: '/rendered-ceiling.jpg',
      thumbnailAlt: 'Image of a rendered ceiling thumbnail.',
    },
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
  ];

  return <ImageGallery items={images}></ImageGallery>;
}
