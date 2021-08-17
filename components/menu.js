import { createContext, useContext, useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import {GiHamburgerMenu} from 'react-icons/gi'

const MenuContext = createContext(false);

export default function Menu({children}) {

    const [isOpen, setOpen] = useState(false);

    return (
      <MenuContext.Provider value={[isOpen, setOpen]}>
        <button 
            onClick={() => setOpen(!isOpen)} 
            className="text-white h-12 w-12 flex items-center justify-center hover:bg-white hover:bg-opacity-20">
            <GiHamburgerMenu></GiHamburgerMenu>
        </button>
        <MenuOverlay>{children}</MenuOverlay>
      </MenuContext.Provider>

    )
  }
  

function MenuOverlay({children}) {

  const [isOpen, setOpen] = useContext(MenuContext);
  const styles = useSpring({ transform: isOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%,0,0)'});

  
  return (
    <>
    { !isOpen ? '' : (
      <div onClick={() => setOpen(!isOpen)} className="z-10 bg-black bg-opacity-20 inset-0 absolute flex items-stretch">
      </div>
     )}

      <animated.div style={styles} className="z-10 absolute h-screen left-0 bg-black d-flex flex-col text-white w-60 pt-20 items-center">{children}</animated.div>
    </>
    )
}