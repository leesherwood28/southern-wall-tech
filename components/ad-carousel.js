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
    <Carousel className='h-96 w-full' userCanMove={false} autoRotate={true}>
      {adds.map((add) => (
        <div key={add.image}>
          <Image src={add.image} alt={add.alt} width={500} height={500}></Image>
        </div>
      ))}
    </Carousel>
  );
}
