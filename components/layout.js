import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col items-stretch">
      <Header></Header>
      <main className="overflow-y-auto flex-grow">{children}</main>
    </div>
  )
}
