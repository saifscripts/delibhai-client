/* eslint-disable react/prop-types */

function SelectInput({ label, onInputChange, info, options }) {
  return (
    <label>
      <p className="font-bold mt-4 mb-1">{label}</p>

      <select
        onChange={onInputChange}
        value={info}
        className="w-full py-3 border-b border-primary bg-transparent"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectInput;
