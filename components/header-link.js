
export default function HeaderLink({href, text}) {
    return (
      <a 
        className="
          text-white 
          px-8 flex 
          items-center 
          hover:bg-white 
          hover:bg-opacity-20 
          focus:outline-none 
          focus:bg-white 
          focus:bg-opacity-20
          active:bg-opacity-30" 
        href={href}>
          {text}
        </a>
    )
  }
  