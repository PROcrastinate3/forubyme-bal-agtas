// One pill-shaped button. Renders a real <a> when given an href,
// or a <button> when given an onClick (e.g. Save Contact).
function LinkButton({ href, onClick, icon, label, external = false }) {
  const className =
    "flex w-full bg-[#090042] justify-center items-center border rounded-full py-2 gap-2";

  const content = (
    <>
      {icon}
      <span className="text-white font-calistoga">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

export default LinkButton;
