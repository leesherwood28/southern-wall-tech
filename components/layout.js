import { useEffect, useState } from 'react';
import Header from './header';
import { animated, useSprings, useSpring } from '@react-spring/web';

export default function Layout({ children }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState((s) => {
      const state = [...s];
      state.push({ child: children, key: Math.random() });
      return state.slice(Math.max(0, state.length - 2));
    });
  }, [children]);
  console.log('render');
  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-grow relative'>
        {state.map((child) => (
          <ChildWrapper key={child.key}>{child.child}</ChildWrapper>
        ))}
      </main>
    </div>
  );
}

function ChildWrapper({ children }) {
  return (
    <div className='overflow-y-auto flex flex-col items-stretch absolute inset-0'>
      {children}
    </div>
  );
}
