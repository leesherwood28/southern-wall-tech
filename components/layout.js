import { useEffect, useState } from 'react';
import Header from './header';
import { animated, useSprings, useSpring } from '@react-spring/web';

export default function Layout({ children }) {
  const [state, setState] = useState({ prev: null, next: null });
  useEffect(() => {
    setState((s) => ({
      prev: s.next,
      next: children,
    }));
  }, [children]);

  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-grow relative'>
        <ChildWrapper>{state.prev}</ChildWrapper>
        <ChildWrapper>{state.next}</ChildWrapper>
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
