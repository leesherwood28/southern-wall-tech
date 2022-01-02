import Header from './header';

export default function Layout({ children }) {
  return (
    <div className='h-screen w-screen flex flex-col items-stretch overflow-hidden'>
      <Header></Header>
      <main className='flex-1 overflow-y-auto overflow-x-hidden scroll-smooth mt-12'>
        {children}
      </main>
    </div>
  );
}
