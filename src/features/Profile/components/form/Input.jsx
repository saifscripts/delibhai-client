/* eslint-disable react/prop-types */

function Input({ label, type, data, info, onInputChange }) {
  return (
    <label>
      <p className='font-bold mt-4 mb-1'>{label}</p>

      <input
        type={type}
        value={data || info}
        onChange={onInputChange}
        className='w-full py-3 border-b border-primary'
      />
    </label>
  );
}

export default Input;
