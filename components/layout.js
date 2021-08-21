import { animated, useSprings } from '@react-spring/web';
import { useLayoutEffect, useState } from 'react';
import Header from './header';

export default function Layout({ children }) {
  const [state, setState] = useState([]);

  const [childSprings, springApi] = useSprings(state.length, (i) => ({
    opacity: 0,
  }));

  useLayoutEffect(() => {
    setState((s) => {
      const state = [...s];
      state.push({ childEl: children, key: Math.random() });
      return state.slice(Math.max(0, state.length - 2));
    });
  }, [children, springApi]);

  useLayoutEffect(() => {
    springApi.start((i) => {
      const isSingle = state.length === 1;
      const fadedOut = { opacity: 0 };
      const displayed = { opacity: 1 };
      if (isSingle) {
        return { from: fadedOut, to: displayed };
      }
      return {
        from: i === 0 ? displayed : fadedOut,
        to: i === 0 ? fadedOut : displayed,
      };
    });
  }, [state, springApi]);

  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-grow relative'>
        {state.map((child, i) => (
          <animated.div
            className='overflow-y-auto flex flex-col items-stretch absolute inset-0'
            key={child.key}
            style={childSprings[i]}
          >
            {child.childEl}
          </animated.div>
        ))}
      </main>
    </div>
  );
}
