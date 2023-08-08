import camera from '../assets/icons/camera.svg';

/* eslint-disable react/prop-types */
export default function Avatar({ className, image, edit }) {
  return (
    <div className={`rounded-2xl aspect-square relative ${className}`}>
      <img src={image} alt='name' className='w-full rounded-xl' />
      {edit && (
        <div className='absolute right-[5%] bottom-[5%] rounded-full bg-neutral w-[20%] aspect-square flex justify-center items-center'>
          <img src={camera} alt='Camera' />
        </div>
      )}
    </div>
  );
}
