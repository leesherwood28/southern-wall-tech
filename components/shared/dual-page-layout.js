export function DualPageLayout({ position, children }) {
  return (
    <div className='w-full h-full flex'>
      <div className='p-20 flex-1 flex items-center justify-center'>
        {position === 'start' && children}
      </div>
      <div className='p-20 flex-1 flex items-center justify-center'>
        {position === 'end' && children}
      </div>
    </div>
  );
}
