import ContactButton from './contact-button'
import HeaderLink from './header-link'
import Menu from './menu';

export default function Header() {
  return (
        <header className="bg-black h-12 flex items-stretch">
            <div className="flex items-stretch">
                <Menu>
                    <HeaderLink text="Home" href="/"></HeaderLink>
                    <HeaderLink text="About" href="/"></HeaderLink>
                    <HeaderLink text="Gallery" href="/Gallery"></HeaderLink>
                </Menu>
            </div>
            
            <div className="flex-grow flex items-stretch justify-center">
                <HeaderLink text="Home" href="/"></HeaderLink>
                <HeaderLink text="About" href="/"></HeaderLink>
                <HeaderLink text="Gallery" href="/Gallery"></HeaderLink>
            </div>
            <div className="flex items-stretch">
                <ContactButton></ContactButton>
            </div>
        </header>
  )
}
