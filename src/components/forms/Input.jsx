/* eslint-disable react/prop-types */

function Input({ label, type, data, info, onInputChange, placeholder }) {
  return (
    <label>
      <p className="mb-1 mt-4 font-bold">{label}</p>

      <input
        type={type}
        value={data || info}
        placeholder={placeholder}
        onChange={onInputChange}
        className="w-full border-b border-primary py-3"
      />
    </label>
  );
}

export default Input;
