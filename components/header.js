import ContactButton from './contact-button'
import HeaderLink from './header-link'

export default function Header() {
  return (
        <header className="bg-black h-12 flex items-stretch">
            <div></div>
            
            <div className="flex-grow flex items-stretch justify-center">
                <HeaderLink text="Gallery" href="/Gallery"></HeaderLink>
            </div>
            <div className="flex items-stretch">
                <ContactButton></ContactButton>
            </div>
        </header>
  )
}
