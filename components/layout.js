import { animated, useTransition } from '@react-spring/web';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-1 overflow-y-auto overflow-x-hidden'>
        {children}
      </main>
    </div>
  );
}
