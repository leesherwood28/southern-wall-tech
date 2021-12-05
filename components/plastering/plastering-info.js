import { InfoPage } from '../shared/info-page';

export function PlasteringInfo({}) {
  return <InfoPage></InfoPage>;
}

export function PlasteringProducts({}) {
  const type = 'products';
  const items = [
    'Gypsum Plasters',
    'Lime Plaster ',
    'Stucco Plaster',
    'Bonding',
    'Hardwall',
    'Multi-Finish',
    'Coloured Plaster',
    'One Coat Plaster',
    'Base and Top Coat Plasters',
    'Dry Coat Plaster',
  ];
  const text = `We have experience with all different types of plastering materials
        and can tailor our services around the customers preferences. If you
        cant find your required product, feel free to contact us to discuss
        your specifications.`;

  return <InfoPage type='products' items={items} text={text}></InfoPage>;
}

export function PlasteringServices({}) {}
