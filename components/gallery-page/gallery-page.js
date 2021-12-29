import { SectionTitle } from '../shared/section-title';

export function GalleryPage({ title, gallery, content }) {
  return (
    <div>
      <PageTitle title={title} />
      <div className='flex'>
        <Gallery gallery={gallery} />
        <Content content={content} />
      </div>
    </div>
  );
}
function PageTitle({ title }) {
  return (
    <div className='mb-16 text-5xl text-pink-700 italic font-light sticky top-10 w-full flex justify-center'>
      <span>{title}</span>
    </div>
  );
}

function Gallery({ gallery }) {
  return <div className='flex-1 p-20'>{gallery}</div>;
}

function Content({ content }) {
  return (
    <div className='flex-1 p-20 flex flex-col items-center'>{content}</div>
  );
}
