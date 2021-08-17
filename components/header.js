import ContactButton from './contact-button'
import HeaderLink from './header-link'
import Menu from './menu';
import SideNavLink from './side-nav-link';

export default function Header() {

  const links = [
      {text: "Home", href: "/"},
      {text: "About", href: "/About"},
      {text: "Gallery", href: "/Gallery"},
    ]
    
  return (
        <header className="bg-black h-12 flex items-stretch">
            <div className="flex items-stretch">
                <div className="flex md:hidden items-stretch">
                    <Menu>
                        {links.map(link => (<SideNavLink key={link.href} text={link.text} href={link.href}></SideNavLink>))}
                    </Menu>
                </div>
            </div>
            
            <div className="flex-grow flex items-stretch justify-center">
                <div className="hidden items-stretch md:flex">
                    {links.map(link => (<HeaderLink className="sm:hidden" key={link.href} text={link.text} href={link.href}></HeaderLink>))}
                </div>
            </div>
            <div className="flex items-stretch">
                <ContactButton></ContactButton>
            </div>
        </header>
  )
}
