import Carousel from './carousel';

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
    <Carousel userCanMove={false} autoRotate={true}>
      {(adds) => <div className='w-40 h-40'></div>}
    </Carousel>
  );
}
