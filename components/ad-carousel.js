import ImageCarousel from './carousel';

export default function AdCarousel() {
  const adds = [
    {
      image: '/qa.svg',
      alt: 'Image of quality assurance manager',
      text: 'High Quality Plastering And Rendering',
    },
    {
      image: '/contract.svg',
      alt: 'Image of contract',
      text: 'Proffesional Conduct',
    },
    {
      image: '/houses.svg',
      alt: 'Image of multiple buildings',
      text: 'Over 20 Years Of Experience On A Range Of Projects',
    },
  ];

  return (
    <ImageCarousel
      images={images}
      className='w-full h-96'
      userCanMove={false}
      autoRotate={true}
      imgWidth={1000}
      imgHeight={800}
    ></ImageCarousel>
  );
}
