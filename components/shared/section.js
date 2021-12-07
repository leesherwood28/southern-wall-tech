export function Section({ text, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className='text-4xl'>{text}</h1>
    </div>
  );
}
