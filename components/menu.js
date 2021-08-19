import { createContext, useContext, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';

const MenuContext = createContext(false);

export default function Menu({ children }) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setOpen(false));
  }, [router]);

  return (
    <MenuContext.Provider value={[isOpen, setOpen]}>
      <MenuButton></MenuButton>
      <MenuOverlay>{children}</MenuOverlay>
    </MenuContext.Provider>
  );
}

function MenuButton() {
  const [isOpen, setOpen] = useContext(MenuContext);

  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className='text-white h-12 w-12 flex items-center justify-center hover:bg-white hover:bg-opacity-20'
    >
      <GiHamburgerMenu></GiHamburgerMenu>
    </button>
  );
}

function MenuOverlay({ children }) {
  const [isOpen, setOpen] = useContext(MenuContext);
  const styles = useSpring({
    transform: isOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%,0,0)',
    config: { mass: 1, tension: 1500, friction: 90 },
  });

  return (
    <>
      {!isOpen ? (
        ''
      ) : (
        <div
          onClick={() => setOpen(!isOpen)}
          className='z-10 bg-black bg-opacity-20 inset-0 absolute flex items-stretch'
        ></div>
      )}

      <animated.div
        style={styles}
        className='z-10 absolute h-screen left-0 bg-black text-white w-60'
      >
        <div className='h-12 flex items-center'>
          <MenuButton></MenuButton>
        </div>
        <div className='flex flex-col items-stretch mt-4'>{children}</div>
      </animated.div>
    </>
  );
}
