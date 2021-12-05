import { ProductsTitle, ServicesTitle } from './titles';
import { FaTools, FaToolbox } from 'react-icons/fa';
export function InfoPage({ text, items, type }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-4'>
        <Title type={type}></Title>
      </div>
      <Text text={text} />
    </div>
  );
}

function Title({ type }) {
  const icon = type === 'products' ? <FaToolbox /> : <FaTools />;
  const text = type === 'products' ? 'Products' : 'Services';
  return (
    <h2 className='text-4xl flex items-center'>
      <div className='mr-2'>{icon}</div>
      <div>{text}</div>
    </h2>
  );
}

function Text({ text }) {
  return <div className='max-w-lg'>{text}</div>;
}

function ItemChip({ item }) {
  return <div className='p-3'>{item}</div>;
}
