/* eslint-disable react/prop-types */

function Submit({ value, className, ...props }) {
  return (
    <button
      className={`my-8 w-full rounded-full bg-primary py-3 text-xl text-white disabled:bg-slate-400 disabled:text-slate-600 ${className}`}
      type="submit"
      {...props}
    >
      {value}
    </button>
  );
}

export default Submit;
