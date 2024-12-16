import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "../../../../components/Avatar";
import { RatingStars } from "../RatingStars";

export default function Review({ image, name, rating, date, review }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="w-12" src={image} />
          <p className="text-lg">{name}</p>
        </div>
        {<BsThreeDotsVertical />}
      </div>

      <div className="my-2 flex items-center gap-2">
        <RatingStars rating={rating} />
        <span className="text-foreground/80">{date}</span>
      </div>

      <p className="text-sm">{review}</p>
    </div>
  );
}
