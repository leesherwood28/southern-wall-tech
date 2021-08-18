import { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'

export default function ImageCarousel({images}) {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
      images.length,
      i => ({
          x: i * width,
          scale: width === 0 ? 0 : 1,
          display: 'block',
      }), 
      [width]
  )
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, images.length - 1)
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * width + (active ? mx : 0)
      const scale = active ? 1 - distance / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })

  return (
    <div ref={ref} className="h-40 w-40  relative overflow-hidden">
        {props.map(({x, display, scale}, i) =>
            <animated.div className="absolute w-full h-full will-transform" {...bind()} key={i} style={{ display, x, touchAction: 'none' }}>
                 <animated.div className="h-full w-full" style={{ scale}}>
                     <CarouselImage image={images[i]}></CarouselImage>
                 </animated.div>
            </animated.div>
        )}
    </div>
  )
}

function CarouselImage({image}) {
    return (
        <div className="w-full h-full relative">
            <div className="h-full w-full"></div>
            <div className="inset-0 absolute z--1">
                <Image src={image.href} alt={image.alt} width={300} height={300}></Image>
            </div>
        </div>
    )
}
