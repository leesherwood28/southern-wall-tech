import { useEffect, useState } from 'react';
import Header from './header';
import { animated, useSprings, useSpring } from '@react-spring/web';

export default function Layout({ children }) {
  const [state, setState] = useState([]);

  const [childSprings, springApi] = useSprings(state.length, (i) => ({
    opacity: 0,
  }));

  useEffect(() => {
    setState((s) => {
      const state = [...s];
      state.push({ child: children, key: Math.random() });
      return state.slice(Math.max(0, state.length - 2));
    });
  }, [children, springApi]);

  useEffect(() => {
    console.log(state);
    springApi.start((i) => {
      const a = {
        opacity: state.length === 2 && i === 0 ? 0 : 1,
      };
      console.log(a);
      return a;
    });
  }, [state, springApi]);

  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-grow relative'>
        {childSprings.map((styles, i) => (
          <animated.div
            className='overflow-y-auto flex flex-col items-stretch absolute inset-0'
            key={state[i].key}
            style={styles}
          >
            {state[i].child}
          </animated.div>
        ))}
      </main>
    </div>
  );
}
