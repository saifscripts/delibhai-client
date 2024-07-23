import Review from "./Review";
import staticReviews from "./staticReviews";

export default function Reviews() {
  //   const { userInfo } = useContext(UserContext);

  return (
    <div className="grid gap-8 px-2 py-3">
      {/* use userInfo.review later */}
      {staticReviews?.map(
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
