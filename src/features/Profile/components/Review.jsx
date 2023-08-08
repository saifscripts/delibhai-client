/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Avatar, RatingStars } from '../index';

export default function Review({ image, name, rating, date, review }) {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <Avatar className='w-12' image={image} />
          <p className='text-lg'>{name}</p>
        </div>
        {<BsThreeDotsVertical />}
      </div>

      <div className='flex gap-2 items-center my-2'>
        <RatingStars rating={rating} />
        <span className='text-medium'>{date}</span>
      </div>

      <p className='text-sm'>{review}</p>
    </div>
  );
}
