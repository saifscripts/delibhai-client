/* eslint-disable react/prop-types */

export default function Info({ info, type, icon }) {
  return (
    <div className='flex items-start gap-3 border-b border-light py-2'>
      <div className='w-12 aspect-square flex-shrink-0 rounded-full bg-light flex justify-center items-center'>
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
