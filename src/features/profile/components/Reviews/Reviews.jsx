import Review from "./Review";
import staticReviews from "./staticReviews";

export default function Reviews() {
  // const { id } = useParams();
  // const { user } = useUser(id);

  return (
    <div className="grid gap-8 px-2 py-3">
      {/* use user.review later */}
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
