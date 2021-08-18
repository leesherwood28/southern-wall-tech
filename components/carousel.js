import { useRef,useEffect } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'


function reducer(state, action) {

}

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
  const moveItem = (direction) => {
      console.log(direction);
  }

  return (
    <div className="flex items-center">
        <MoveButton direction="prev" onClick={moveItem}></MoveButton>
        <div ref={ref} className="h-40 w-40  relative overflow-hidden">
            {props.map(({x, display, scale}, i) =>
            
                <animated.div className="absolute w-full h-full will-transform" {...bind()} key={i} style={{ display, x, touchAction: 'none' }}>
                    <animated.div className="h-full w-full" style={{ scale}}>
                        <CarouselImage image={images[i]}></CarouselImage>
                    </animated.div>
                </animated.div>
            )}
        </div>
        <MoveButton direction="next" onClick={moveItem}></MoveButton>
    </div>
  )
}

function MoveButton({direction, onClick}) {
    return (
        <button  onClick={() => onClick(direction)}>
        <svg style={{transform: `rotate(${direction === 'next' ? 180 : 0}deg)`}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
            fill="currentColor"
          />
        </svg>
      </button>
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
