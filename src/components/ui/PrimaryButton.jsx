// eslint-disable-next-line react/prop-types
export default function PrimaryButton({ value, icon, className, ...props }) {
  return (
    <button
      className={`flex items-center justify-center gap-5 rounded-lg bg-secondary px-8 py-2 font-inter text-xl font-bold text-white shadow ${className}`}
      {...props}
    >
      {value && <span>{value}</span>}
      <span className="text-2xl">{icon}</span>
    </button>
  );
}
