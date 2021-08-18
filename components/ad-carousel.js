import Image from 'next/image';
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
    <Carousel className='h-full w-full' userCanMove={false} autoRotate={true}>
      {adds.map((add) => (
        <div key={add.image} className='w-40 h-40'>
          <Image src={add.image} alt={add.alt} width={100} height={100}></Image>
        </div>
      ))}
    </Carousel>
  );
}
