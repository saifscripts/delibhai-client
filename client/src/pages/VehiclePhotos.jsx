import VehiclePhoto from './VehiclePhoto';

// eslint-disable-next-line react/prop-types
export default function VehiclePhotos({ photos = [] }) {
  return (
    <div>
      <div className='overflow-y-hidden mb-6'>
        <div className='flex gap-2 overflow-x-scroll pb-5 -mb-5'>
          {photos.map((url, index) => (
            <VehiclePhoto url={url} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
