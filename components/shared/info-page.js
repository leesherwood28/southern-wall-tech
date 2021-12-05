import { ProductsTitle, ServicesTitle } from './titles';
import { FaTools, FaToolbox } from 'react-icons/fa';
export function InfoPage({ text, items, type }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-4'>
        <Title type={type}></Title>
      </div>
      <div className='mb-4'>
        <Text text={text} />
      </div>
      <div className='mb-8'>
        <List items={items} />
      </div>
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
  return <div className='max-w-xl bg-gray-100 p-2 rounded-lg'>{text}</div>;
}

function List({ items }) {
  return (
    <ol className='flex flex-wrap max-w-xl'>
      {items.map((item) => (
        <ItemChip key={item} item={item} />
      ))}
    </ol>
  );
}

function ItemChip({ item }) {
  return (
    <li className='p-2 m-1 bg-gray-600 text-white rounded-full text-center'>
      {item}
    </li>
  );
}
