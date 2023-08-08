/* eslint-disable react/prop-types */
import convertNumber from '../../../utils/convertNumber';
import { RatingStars } from '../index';

export default function AverageRating({ rating, total }) {
  return (
    <div className='text-center w-full'>
      <p className='font-bold text-5xl'>{convertNumber(rating)}</p>

      <RatingStars rating={rating} />

      <p className='text-lg text-medium'>{convertNumber(total)}</p>
    </div>
  );
}
