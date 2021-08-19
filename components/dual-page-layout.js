export default function DualPageLayout({ children }) {
  return (
    <div className='flex-1 flex flex-col md:flex-row py-2 sm:py-10 px-2 sm:px-12 items-stretch'>
      {children.map((child) => {
        <div className='flex-1 overflow-hidden flex flex-col items-center justify-center'>
          {child}
        </div>;
      })}
    </div>
  );
}
