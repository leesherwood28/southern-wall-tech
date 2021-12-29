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
    <div className='py-10 px-20 lg:sticky top-0 self-start'>
      <PageTitle title={title} />
      {gallery}
    </div>
  );
}

function Content({ content }) {
  return (
    <div className='p-20 flex flex-col items-center self-end'>{content}</div>
  );
}
