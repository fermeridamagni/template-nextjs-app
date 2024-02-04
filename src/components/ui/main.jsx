export default function Main({
  children,
  id = null,
  bgColor = "bg-white",
  padding = "py-[100px]",
  classNames = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <main
      id={id}
      className={`w-full min-h-screen animate-fade flex
        ${classNames}
        ${bgColor}
        ${padding}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </main>
  );
}
