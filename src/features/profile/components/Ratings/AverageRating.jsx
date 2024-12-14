import englishToBengaliNumber from "../../../../utils/englishToBengaliNumber";
import { RatingStars } from "../RatingStars";

export default function AverageRating({ rating, total }) {
  return (
    <div className="w-full text-center">
      <p className="text-5xl font-bold">{englishToBengaliNumber(rating)}</p>

      <RatingStars rating={rating} />

      <p className="text-lg text-foreground/80">
        {englishToBengaliNumber(total)}
      </p>
    </div>
  );
}
