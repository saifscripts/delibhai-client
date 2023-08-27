/* eslint-disable react/prop-types */

export default function EditOption({ icon, text, type }) {
  return (
    <label
      className='flex gap-3 items-center hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer px-7 py-2'
      htmlFor={text}>
      <div className='w-10 aspect-square rounded-full bg-light flex justify-center items-center text-xl'>
        {icon}
      </div>
      <input id={text} className='text-xl hidden' type={type} />
      {text}
    </label>
  );
}
