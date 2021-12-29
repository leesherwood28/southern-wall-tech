export function GalleryPage({ title, gallery, content, id }) {
  return (
    <div>
      <div className='flex flex-wrap md:flex-nowrap w-screen mb-40' id={id}>
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
    <div className='flex-1 py-10 px-20 md:sticky top-0 self-start'>
      <PageTitle title={title} />
      {gallery}
    </div>
  );
}

function Content({ content }) {
  return (
    <div className='flex-1 p-20 flex flex-col items-center self-end'>
      {content}
    </div>
  );
}
