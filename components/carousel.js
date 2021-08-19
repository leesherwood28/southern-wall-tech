import { animated, useSprings, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';

export default function Carousel({
  children,
  userCanMove,
  autoRotate,
  className,
}) {
  const index = useRef(0);

  const [ref, { width }] = useMeasure();
  const [props, springApi] = useSprings(
    children.length,
    (i) => ({
      x: i * width,
      display: i === index.current ? 'block' : 'none',
    }),
    [width]
  );
  const dragBind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      const direction = xDir > 0 ? 'prev' : 'next';
      const shouldTransition = distance > width / 2;
      if (active) {
        if (shouldTransition) {
          cancel();
        } else {
          animateCarousel(getNextCarouselIndex(direction), mx);
        }
        return;
      }
      if (shouldTransition) {
        transitionCarousel(direction);
      } else {
        animateCarousel(getNextCarouselIndex(direction));
      }
    },
    { enabled: userCanMove }
  );

  const getNextCarouselIndex = useCallback(
    (direction) => {
      return (
        (index.current + (direction === 'next' ? 1 : -1) + children.length) %
        children.length
      );
    },
    [children.length]
  );

  const animateCarousel = useCallback(
    (otherVisibleIndex, offsetX = 0) => {
      springApi.start((i) => {
        const diff = i - index.current;
        const imageWrap = Math.abs(diff) >= children.length / 2;
        const indexPlacement = imageWrap
          ? ((children.length - Math.abs(diff)) % children.length) *
            (diff > 0 ? -1 : 1)
          : diff;
        const x = indexPlacement * width + offsetX;
        const isDisplayed = i === index.current || i === otherVisibleIndex;
        return {
          x,
          display: isDisplayed ? 'block' : 'none',
          immediate: !isDisplayed,
        };
      });
    },
    [children.length, width, springApi]
  );

  const transitionCarouselToIndex = useCallback(
    (i) => {
      const prevIndex = index.current;
      index.current = i;
      animateCarousel(prevIndex);
    },
    [animateCarousel]
  );

  const transitionCarousel = useCallback(
    (direction) => {
      transitionCarouselToIndex(getNextCarouselIndex(direction));
    },
    [transitionCarouselToIndex, getNextCarouselIndex]
  );

  useEffect(() => {
    if (autoRotate) {
      const id = setInterval(() => transitionCarousel('next'), 3000);
      return () => clearInterval(id);
    }
  }, [transitionCarousel, autoRotate]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center self-stretch flex-1`}>
        {userCanMove ? (
          <MoveButton
            direction='prev'
            onClick={transitionCarousel}
          ></MoveButton>
        ) : (
          ''
        )}
        <div ref={ref} className='relative overflow-hidden self-stretch flex-1'>
          {props.map(({ x, display, scale }, i) => (
            <animated.div
              className='absolute w-full h-full will-transform'
              {...dragBind()}
              key={i}
              style={{ display, x, touchAction: 'none' }}
            >
              <animated.div className='h-full w-full' style={{ scale }}>
                {children[i]}
              </animated.div>
            </animated.div>
          ))}
        </div>
        {userCanMove ? (
          <MoveButton
            direction='next'
            onClick={transitionCarousel}
          ></MoveButton>
        ) : (
          ''
        )}
      </div>
      <Counter
        className='mt-2'
        currentIndex={index.current}
        numberItems={children.length}
      ></Counter>
    </div>
  );
}

function Counter({ currentIndex, numberItems, className }) {
  const dots = [...Array(numberItems).keys()].map((i) => (
    <Dot key={i} active={currentIndex === i}></Dot>
  ));
  return <div className={`flex items-center ${className}`}>{dots}</div>;
}

function Dot({ active }) {
  console.log(active);
  const { transform, opacity } = useSpring({
    opacity: active ? 1 : 0.8,
    transform: active ? `scale(1.5)` : `scale(1)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <animated.div
      className='w-2 h-2 m-2 rounded-full bg-black'
      style={{ opacity: opacity.to((o) => o), transform }}
    ></animated.div>
  );
}

function MoveButton({ direction, onClick }) {
  return (
    <button onClick={() => onClick(direction)}>
      <svg
        style={{ transform: `rotate(${direction === 'next' ? 180 : 0}deg)` }}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
