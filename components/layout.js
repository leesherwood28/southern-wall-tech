import styles from './layout.module.css'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </>
  )
}
