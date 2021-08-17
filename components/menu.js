import { createContext, useContext, useState } from "react"

const MenuContext = createContext(false);

export default function Menu({children}) {

    const [isOpen, setOpen] = useState(false);

    return (
      <MenuContext.Provider value={[isOpen, setOpen]}>
        <button onClick={() => setOpen(!isOpen)} className="text-white px-8 flex items-center hover:bg-white hover:bg-opacity-20">Burger Icon</button>
        {isOpen ? <MenuOverlay>{children}</MenuOverlay> : null}
      </MenuContext.Provider>

    )
  }
  

function MenuOverlay({children}) {

  const [isOpen, setOpen] = useContext(MenuContext);

  return (
      <div onClick={() => setOpen(!isOpen)} className="z-10 bg-black bg-opacity-20 h-screen w-screen absolute flex items-stretch">
        <div className="bg-black d-flex flex-col text-white w-60 pt-8 items-center">{children}</div>
      </div>
    )
}