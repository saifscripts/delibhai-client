// eslint-disable-next-line react/prop-types
export default function Button({ value, icon, ...props }) {
  return (
    <button
      className="mx-auto mt-6 flex h-[70px] w-full max-w-[310px] items-center justify-center gap-5 rounded-full bg-secondary font-inter text-xl font-bold text-white shadow disabled:bg-slate-400 disabled:text-slate-600"
      {...props}
    >
      <span>{value}</span>
      <span className="text-3xl">{icon}</span>
    </button>
  );
}
