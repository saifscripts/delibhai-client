import Map from "../../../../components/Map";
import { useGeolocation } from "../../../../contexts/location.context";
import Container from "../../../../layouts/Container";

function GPSLocation() {
  const { error, location, isLoading } = useGeolocation();

  return (
    <section className="mb-2 bg-white py-4 sm:mb-4 sm:py-8">
      <Container className="">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-lg font-semibold text-[#717273] sm:mb-8 sm:text-center sm:text-4xl">
            আপনার GPS লোকেশন<span className="sm:hidden">:</span>
          </h2>
          <Map location={location} isLoading={isLoading} error={error} />
        </div>
      </Container>
    </section>
  );
}

export default GPSLocation;
