import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Review from "./Review";
import staticReviews from "./staticReviews";

export default function Reviews() {
  const { userInfo } = useContext(UserContext);

  // set reviews from static reviews
  userInfo.reviews = staticReviews;

  return (
    <div className="grid gap-8 px-2 py-3">
      {userInfo?.reviews?.map(
        ({ id, userImage, userName, rating, date, review }) => (
          <Review
            key={id}
            id={id}
            image={userImage}
            name={userName}
            rating={rating}
            date={date}
            review={review}
          />
        ),
      )}
    </div>
  );
}
