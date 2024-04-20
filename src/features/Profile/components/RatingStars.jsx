import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function RatingStars({ rating }) {
  const numberOfFullStars = Math.floor(rating);
  const isHalfStars = rating - numberOfFullStars >= 0.5;
  const numberOfEmptyStars = 5 - numberOfFullStars - (isHalfStars ? 1 : 0);

  const fullStars = Array(numberOfFullStars)
    .fill(null)
    .map((n, i) => <BsStarFill key={i} />);

  const halfStar = isHalfStars && <BsStarHalf />;

  const emptyStars = Array(numberOfEmptyStars)
    .fill(null)
    .map((n, i) => <BsStar key={i} />);

  return (
    <div className="flex justify-center gap-1 text-sm text-primary">
      {fullStars} {halfStar} {emptyStars}
    </div>
  );
}
