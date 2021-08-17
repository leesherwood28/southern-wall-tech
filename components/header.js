import ContactButton from './contact-button'
import HeaderLink from './header-link'

export default function Header() {
  return (
        <header className="bg-black h-12 flex items-center">
            <HeaderLink text="Gallery" href="/Gallery"></HeaderLink>
            <ContactButton></ContactButton>
        </header>
  )
}
