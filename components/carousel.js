import Image from 'next/image'

export default function ImageCarousel({images}) {
  return (
    <div className="overflow-hidden flex items-center">
        {images.map((im) => <CarouselImage key={im.href} image={im}></CarouselImage>)}
    </div>
  )
}

function CarouselImage({image}) {
    return (
        <div className="w-full flex-none flex items-center justify-center">
            <Image src={image.href} alt={image.alt} width={200} height={200}></Image>
        </div>
    )
}
