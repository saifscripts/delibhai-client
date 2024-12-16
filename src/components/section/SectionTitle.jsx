export default function SectionTitle({ children }) {
  return (
    <h2 className="mb-[6px] text-lg font-semibold text-foreground/70 sm:mb-8 sm:text-center sm:text-4xl">
      {children}
      <span className="sm:hidden">:</span>
    </h2>
  );
}
