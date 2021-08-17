
export default function HeaderLink({href, text}) {
    return (
      <a className="text-white p-2 flex items-center hover:bg-white hover:bg-opacity-20" href={href}>{text}</a>
    )
  }
  