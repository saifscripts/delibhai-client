/* eslint-disable react/prop-types */

export default function Info({ info, type, icon }) {
  return (
    <div className='flex gap-3 items-center border-b border-light py-2'>
      <div className='w-12 aspect-square rounded-full bg-light flex justify-center items-center'>
        <img src={icon} alt={type} className='w-full' />
      </div>
      <div className='text-medium'>
        {Array.isArray(info) ? (
          info.map((info, index) => (
            <p key={index} className='font-bold text-lg'>
              {info}
            </p>
          ))
        ) : (
          <p className='font-bold text-lg'>{info}</p>
        )}
        <p>{type}</p>
      </div>
    </div>
  );
}
