import styles from './layout.module.css'
import ContactButton from './contact-button'

export default function Header({ children }) {
  return (
    <>
        <header className={styles.header}>
            <ContactButton></ContactButton>
        </header>
    </>
  )
}
