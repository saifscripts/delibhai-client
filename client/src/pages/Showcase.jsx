import { FaCamera } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export default function Showcase({ name, id, vehicle, image, vehicleImage }) {
  return (
    <div className='grid grid-cols-[3fr_4fr] items-center gap-5 max-w-lg mx-auto'>
      <div className='w-full rounded-xl aspect-square relative'>
        <img src={image} alt='name' className='w-full rounded-xl' />
        <div className='absolute right-[5%] bottom-[5%] rounded-full bg-neutral w-[20%] aspect-square flex justify-center items-center text-xl'>
          <FaCamera />
        </div>
      </div>

      <div>
        <h3 className='text-2xl mb-1'>{name}</h3>

        <span className='text-gray-500 border border-grey-500 rounded-lg px-3 font-inter mb-4 inline-block'>
          #{id}
        </span>

        <div className='relative bg-gradient-to-b from-[#6BFFDA] to-[#00E1A9] px-4 py-3 rounded-full w-[80%] '>
          <span>{vehicle} রাইডার</span>
          <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16'>
            <img src={vehicleImage} alt={vehicle} className='w-full' />
          </div>
          <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-24 aspect-square rounded-full bg-secondary opacity-10 p-4 -z-20'></div>
          <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[76px] aspect-square rounded-full bg-secondary opacity-20 -z-10'></div>
        </div>
      </div>
    </div>
  );
}
