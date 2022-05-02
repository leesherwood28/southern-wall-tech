import { ScrollReveal } from './scroll-reaveal';

export function GalleryPage({ title, gallery, content, id }) {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-screen' id={id}>
        <Gallery gallery={gallery} title={title} />
        <Content content={content} />
      </div>
    </div>
  );
}
function PageTitle({ title }) {
  return (
    <div className='mb-16 text-5xl text-pink-700 italic font-light w-full flex justify-center'>
      <span>{title}</span>
    </div>
  );
}

function Gallery({ gallery, title }) {
  return (
    <div className='py-4 px-2 lg:py-10 lg:px-10 lg:sticky top-0 self-start'>
      <ScrollReveal>
        <PageTitle title={title} />
      </ScrollReveal>
      <ScrollReveal>{gallery}</ScrollReveal>
    </div>
  );
}

function Content({ content }) {
  return (
    <div className='p-5 lg:p-20 flex flex-col items-center self-end'>
      {content}
    </div>
  );
}
