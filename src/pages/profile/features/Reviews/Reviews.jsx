import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Review from "./Review";
import reviews from "./staticReviews";

export default function Reviews() {
  const { userInfo } = useContext(UserContext);

  userInfo.reviews = reviews;

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
