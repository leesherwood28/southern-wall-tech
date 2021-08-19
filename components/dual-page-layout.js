export default function DualPageLayout({ children }) {
  console.log(children);
  return (
    <div className='flex-1 flex flex-col md:flex-row py-2 sm:py-10 px-2 sm:px-12 items-stretch'>
      {children.map((child, i) => (
        <div key={i} className='flex-1 overflow-hidden'>
          {child}
        </div>
      ))}
    </div>
  );
}
