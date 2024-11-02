import { useRiders } from "../../../../hooks/rider.hook";
import Container from "../../../../layouts/Container";
import RiderCard from "./RiderCard";
import RiderSkeleton from "./RiderSkeleton";

export default function SearchResults() {
  const { riders, hasMore, loader } = useRiders();

  return (
    <Container>
      <div className="mx-auto my-8 flex w-fit max-w-full flex-col gap-3">
        {riders?.length > 0 &&
          riders?.map((rider) => <RiderCard rider={rider} key={rider._id} />)}
        {hasMore && (
          <div
            ref={loader}
            className="mx-auto my-8 flex w-fit max-w-full flex-col gap-3"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <RiderSkeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
