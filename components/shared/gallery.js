import { animated, useSprings, useSpring } from '@react-spring/web';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

export default function Gallery({ children, autoRotate, className }) {
  const index = useRef(0);
  const [activeIndex, setActive] = useState(index.current);

  const [ref, { width }] = useMeasure();
  const [props, springApi] = useSprings(
    children.length,
    (i) => ({
      x: i * width,
      display: i === index.current ? 'block' : 'none',
    }),
    [width]
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
      setActive(i);
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
        <div ref={ref} className='relative overflow-hidden self-stretch flex-1'>
          {props.map(({ x, display, scale }, i) => (
            <animated.div
              className='absolute w-full h-full will-transform'
              key={i}
              style={{ display, x }}
            >
              <animated.div className='h-full w-full' style={{ scale }}>
                {children[i]}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
