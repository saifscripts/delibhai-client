/* eslint-disable react/prop-types */

export default function EditOption({ icon, text }) {
  return (
    <div className='flex gap-3 items-center'>
      <div className='w-10 aspect-square rounded-full bg-light flex justify-center items-center text-xl'>
        {icon}
      </div>
      <div className='text-xl'>{text}</div>
    </div>
  );
}
