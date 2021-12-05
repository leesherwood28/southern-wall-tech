import { ProductsTitle, ServicesTitle } from './titles';
import { FaTools, FaToolbox } from 'react-icons/fa';
export function InfoPage({ text, items, type, intro }) {
  return (
    <div className='flex flex-col items-center max-w-xl'>
      <div className='mb-8'>
        <Title type={type}></Title>
      </div>
      <div className='mb-8 self-start'>
        <Intro intro={intro} />
      </div>
      <div className='mb-8'>
        <List items={items} />
      </div>
      <div className='mb-8'>
        <Text text={text} />
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
  return <div className='bg-gray-100 p-8 rounded-xl'>{text}</div>;
}

function Intro({ intro }) {
  return <div className='text-pink-700 italic text-xl'>{intro}:</div>;
}

function List({ items }) {
  return (
    <ol className='flex flex-wrap'>
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
