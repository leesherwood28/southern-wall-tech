import styles from './header.module.css'
import ContactButton from './contact-button'

export default function Header() {
  return (
        <header className={styles.header}>
            <ContactButton></ContactButton>
        </header>
  )
}
