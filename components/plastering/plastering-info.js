import { InfoPage } from '../shared/info-page';

export function PlasteringInfo({}) {
  return (
    <div>
      <div className='flex flex-col'>
        <PlasteringProducts></PlasteringProducts>
        <PlasteringServices></PlasteringServices>
      </div>
    </div>
  );
}

export function PlasteringProducts({}) {
  const intro = 'Plastering products our team use';
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

  return (
    <InfoPage
      type='products'
      items={items}
      text={text}
      intro={intro}
    ></InfoPage>
  );
}

export function PlasteringServices({}) {
  const intro = 'Our plastering services include';
  const items = [
    'Internal and External Plastering',
    'Domestic and Commercial Plastering',
    'Artex Removal',
    'Stud walls and Partion walls',
    'Float and Set',
    'False Ceilings',
    'Plaster Repairs and Insurance Works',
  ];
  const text = `We offer a wide selection of domestic and commericial plastering in
  Dorset and the surrounding areas. Our team of plasterers are
  experienced, fully trained and qualified to undertake any type and
  size of project.`;

  return (
    <InfoPage
      type='services'
      items={items}
      text={text}
      intro={intro}
    ></InfoPage>
  );
}
