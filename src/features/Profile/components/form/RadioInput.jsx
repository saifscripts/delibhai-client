/* eslint-disable react/prop-types */
function RadioInput({ label, checked, onClick }) {
  return (
    <div className="flex gap-2 items-center ml-4">
      <input
        className="accent-primary focus:border-primary"
        type="radio"
        id={label}
        value={label}
        checked={checked}
        onClick={onClick}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export { RadioInput };
