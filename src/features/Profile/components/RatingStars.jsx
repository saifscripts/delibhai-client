/* eslint-disable react/prop-types */
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

export default function RatingStars({ average }) {
  const numberOfFullStars = Math.floor(average);
  const isHalfStars = average - numberOfFullStars >= 0.5;
  const numberOfEmptyStars = 5 - numberOfFullStars - (isHalfStars ? 1 : 0);

  const fullStars = Array(numberOfFullStars)
    .fill(null)
    .map((n, i) => <BsStarFill key={i} />);

  const halfStar = isHalfStars && <BsStarHalf />;

  const emptyStars = Array(numberOfEmptyStars)
    .fill(null)
    .map((n, i) => <BsStar key={i} />);

  return (
    <div className='flex justify-center gap-1 text-primary text-sm'>
      {fullStars} {halfStar} {emptyStars}
    </div>
  );
}
