export default function RadioInput({ label, checked, onClick }) {
  return (
    <div className="ml-4 flex items-center gap-2">
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
