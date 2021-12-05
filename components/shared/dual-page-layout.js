export function DualPageLayout({ position, children }) {
  return (
    <div className='w-full h-full flex'>
      <div className='p-20 flex-1'>{position === 'start' && children}</div>
      <div className='p-20 flex-1'>{position === 'end' && children}</div>
    </div>
  );
}
