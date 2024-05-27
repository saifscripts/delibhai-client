import AverageRating from "./AverageRating";
import RatingBars from "./RatingBars";

export default function Ratings() {
  return (
    <div className="border-light grid grid-cols-[1fr_3fr] items-center gap-8 border-b px-2 py-3">
      <AverageRating rating="3.7" total="21,000" />
      <RatingBars percentages={[70, 20, 10, 3, 2]} />
    </div>
  );
}
