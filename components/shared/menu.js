import { createContext, useContext, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ScrollButton } from './scroll-button';

export const MenuContext = createContext(false);

export default function Menu({ links }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={[isOpen, setOpen]}>
      <MenuButton></MenuButton>
      <MenuOverlay>
        {links.map((link) => (
          <SideNavLink
            key={link.page}
            text={link.text}
            page={link.page}
          ></SideNavLink>
        ))}
      </MenuOverlay>
    </MenuContext.Provider>
  );
}

function MenuButton() {
  const [isOpen, setOpen] = useContext(MenuContext);

  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className='text-white h-12 w-12 flex items-center justify-center hover:bg-white hover:bg-opacity-20'
      aria-label='open menu'
      role='menu'
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
        className='z-10 absolute h-screen left-0 bg-black text-white w-52'
      >
        <div className='h-12 flex items-center'>
          <MenuButton></MenuButton>
        </div>
        <div className='flex flex-col items-stretch mt-4'>
          {children.map((child, i) => (
            <div key={i}>
              {child}
              <MenuItemSeperator></MenuItemSeperator>
            </div>
          ))}
        </div>
      </animated.div>
    </>
  );
}

function MenuItemSeperator() {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-px w-9/12 bg-blue-200 bg-opacity-20'></div>
    </div>
  );
}

function SideNavLink({ page, text }) {
  const [isOpen, setOpen] = useContext(MenuContext);
  return (
    <ScrollButton
      onClick={() => setOpen(false)}
      page={page}
      className={`
            text-white 
            px-8 
            py-4 
            flex 
            items-center 
            justify-center 
            relative
            `}
    >
      {text}
    </ScrollButton>
  );
}
