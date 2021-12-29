export function ScrollButton({ page, children, className, onClick }) {
  const scrollToPage = () => document.getElementById(page).scrollIntoView();
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
