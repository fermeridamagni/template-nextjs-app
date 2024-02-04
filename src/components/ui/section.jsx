export default function Section({
  children,
  id = null,
  bgColor = "bg-white",
  classNames = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen flex
        ${classNames}
        ${bgColor}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </section>
  );
}
