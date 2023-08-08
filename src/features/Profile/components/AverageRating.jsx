/* eslint-disable react/prop-types */

import convertNumber from '../../../utils/convertNumber';
import RatingStars from './RatingStars';

export default function AverageRating({ average, total }) {
  return (
    <div className='text-center w-full'>
      <p className='font-bold text-5xl'>{convertNumber(average)}</p>

      <RatingStars average={average} />

      <p className='text-lg text-medium'>{convertNumber(total)}</p>
    </div>
  );
}
