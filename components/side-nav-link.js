
export default function SideNavLink({href, text}) {
    return (
      <a className="text-white px-8 py-4 flex items-center justify-center hover:bg-white hover:bg-opacity-20" href={href}>{text}</a>
    )
  }
  