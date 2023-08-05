import camera from '../assets/icons/profile/camera.svg';

// eslint-disable-next-line react/prop-types
export default function VehiclePhoto({ url }) {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`relative group flex flex-col flex-shrink-0 justify-center items-center w-28 aspect-square p-1 bg-center bg-contain bg-no-repeat rounded-md overflow-hidden`}>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black z-10 bg-opacity-40 hidden group-hover:flex group-active:flex justify-center items-center'>
        <img src={camera} alt='Camera' />
      </div>
    </div>
  );
}
