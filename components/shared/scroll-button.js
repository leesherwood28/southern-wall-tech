export function ScrollButton({ page, children, className }) {
  const scrollToPage = () => document.getElementById(page).scrollIntoView();
  return (
    <button className={className} onClick={scrollToPage}>
      {children}
    </button>
  );
}
