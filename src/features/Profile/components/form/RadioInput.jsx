/* eslint-disable react/prop-types */
function RadioInput({
  name,
  label,
  checked,
  onInputChange,
  toggleHiddenInput,
  index,
}) {
  return (
    <div className='flex gap-2 items-center ml-4'>
      <input
        className='accent-primary focus:border-primary'
        type='radio'
        id={label}
        name={name}
        value={label}
        checked={checked}
        onChange={(e) => {
          onInputChange(e, index);
          toggleHiddenInput();
        }}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default RadioInput;
