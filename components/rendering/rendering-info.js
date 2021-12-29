import { InfoPage } from '../shared/info-page';
import { SectionTitle } from '../shared/section-title';

export function RenderingInfo({}) {
  return (
    <div>
      <div className='flex flex-col'>
        <SectionTitle title='Rendering' />
        <RenderingProducts></RenderingProducts>
        <RenderingServices></RenderingServices>
      </div>
    </div>
  );
}

export function RenderingProducts({}) {
  const intro = 'Rendering products our team use';
  const items = [
    'Monocouche Renders',
    'Silicone Renders',
    'Acrylic Renders',
    'External Wall Insulation (EWI)',
    'Sand and Cement Render',
    'Pebbledash',
    'Line Render',
    'Through Colour Render',
  ];
  const text = `We are experts in our field and have worked on many rendering
  projects. Our team use the highest quality products, which include,
  K-rend, eco-rend, Parex, Jub and many more. We are approved
  applicators and can work with the system of your choice.`;

  return (
    <InfoPage
      type='products'
      items={items}
      text={text}
      intro={intro}
    ></InfoPage>
  );
}

export function RenderingServices({}) {
  const intro = 'Our rendering services include';
  const items = [
    'External Rendering',
    'Domestic Rendering',
    'Commercial Rendering',
    'Render Removal',
    'New Builds and Refurbishments',
    'Rendering Repairs',
    'Insurance Works',
    'Contracting',
  ];
  const text = `  We offer a wide selection of domestic and commercial rendering
  services. Rendering can be applied to walls of a building to add an
  extra layer of protection to your building. Its ideal for adding an
  extra layer of insulation to improve energy efficiency and revamping
  the aesthetics of your building.`;

  return (
    <InfoPage
      type='services'
      items={items}
      text={text}
      intro={intro}
    ></InfoPage>
  );
}
