import { useSearchParams } from "react-router-dom";
import { useRiders } from "../../../../hooks/rider.hook";
import Container from "../../../../layouts/Container";
import RiderCard from "./RiderCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const { riders } = useRiders(searchParams);

  return (
    <Container>
      <div className="mx-auto my-8 flex w-fit max-w-full flex-col gap-3">
        {riders?.map((rider) => (
          <RiderCard rider={rider} key={rider._id} />
        ))}
      </div>
    </Container>
  );
}
