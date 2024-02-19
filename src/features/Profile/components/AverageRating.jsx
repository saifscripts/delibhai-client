import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";
import { RatingStars } from "../index";

export const AverageRating = ({ rating, total }) => {
  return (
    <div className="text-center w-full">
      <p className="font-bold text-5xl">{englishToBengaliNumber(rating)}</p>

      <RatingStars rating={rating} />

      <p className="text-lg text-medium">{englishToBengaliNumber(total)}</p>
    </div>
  );
};
