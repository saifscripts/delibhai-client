import cn from "../../lib/cn";

// eslint-disable-next-line react/prop-types
export default function Button({ value, icon, className, disabled, ...props }) {
  return (
    <button
      className={cn(
        "mx-auto flex w-full max-w-[310px] items-center justify-center gap-5 rounded-full bg-secondary font-inter text-xl font-bold text-white shadow disabled:bg-slate-400 disabled:text-slate-600",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <span>{value}</span>
      <span className="text-3xl">{icon}</span>
    </button>
  );
}
