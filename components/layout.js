import { animated, useTransition } from '@react-spring/web';
import Header from './header';

export default function Layout({ children }) {
  const transitions = useTransition(children, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
    },
  });

  return (
    <div className='h-screen w-screen flex flex-col items-stretch'>
      <Header></Header>
      <main className='flex-grow relative'>
        {transitions((props, item) => {
          return (
            <animated.div
              className='flex flex-col items-stretch absolute inset-0'
              style={props}
            >
              {item}
            </animated.div>
          );
        })}
      </main>
    </div>
  );
}
