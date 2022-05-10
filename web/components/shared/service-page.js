import RenderingGallery from '../_pages/rendering/rendering-gallery';
import { GalleryPage } from './gallery-page';
import { ImageGallery } from './image-gallery';
import { InfoPage } from './info-page';

export function ServicePage({ service }) {
  return (
    <GalleryPage
      key={service.service}
      title={service.service}
      id={service.service}
      gallery={<ImageGallery images={service.gallery.images} />}
      content={
        <div className='grid items-center gap-10 lg:gap-40'>
          <InfoPage
            type='products'
            items={service.products.items}
            text={service.products.description}
            intro={service.products.subtitle}
          ></InfoPage>
          <InfoPage
            type='services'
            items={service.services.items}
            text={service.services.description}
            intro={service.services.subtitle}
          ></InfoPage>
        </div>
      }
    />
  );
}
