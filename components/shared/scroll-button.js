export function ScrollButton({ page, children, className, onClick }) {
  const scrollToPage = () => {
    const element = document.getElementById(page);
    const scrollContainer = document.getElementById('main');
    const headerHeight = document.getElementById('header').clientHeight;
    scrollContainer.scrollTo({ top: element.offsetTop - headerHeight });
  };
  return (
    <button
      className={className}
      onClick={() => {
        scrollToPage();
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}
