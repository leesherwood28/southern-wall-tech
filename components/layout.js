import { useEffect, useState } from 'react';
import Header from './header';

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
      <main className='overflow-y-auto flex-grow flex flex-col items-stretch'>
        {state.next}
      </main>
    </div>
  );
}
