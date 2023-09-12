/* eslint-disable react/prop-types */

function Checkbox({ label, 
    onInputChange,
    data =[],
    options }) {
    return (
      <>
        <p className='font-bold mt-4 mb-1'>{label}</p>

        {options.map((option) => (<label key={option} className='flex gap-2 items-center w-full ml-2'>
            <input onChange={onInputChange}  type='checkbox' value={option} checked={data.includes(option)} />
            <span>{option}</span>
        </label>))}
      </>
    );
  }
  
  export default Checkbox;
  