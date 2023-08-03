import { BsTelephoneFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

// eslint-disable-next-line react/prop-types
export default function Hero({ details }) {
  // eslint-disable-next-line react/prop-types
  const { name, image, distance, id, mobile } = details;

  return (
    <div className='flex items-center gap-5'>
      <div className='w-28 rounded-full'>
        <img src={image} alt='name' className='w-full rounded-full' />
      </div>

      <div>
        <h3 className='text-xl mb-3'>{name}</h3>

        <div className='flex items-center gap-1 text-gray-700 mb-2'>
          <span>{<GrLocation />}</span>
          <span>{distance}km</span>
        </div>

        <div className='flex gap-3'>
          <Link to={`/profile/${id}`}>
            <PrimaryButton icon={<PiPaperPlaneTiltFill />} />
          </Link>
          <Link to={`tel:${mobile}}`}>
            <PrimaryButton icon={<BsTelephoneFill />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
