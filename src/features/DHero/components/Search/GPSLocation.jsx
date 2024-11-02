import Map from "../../../../components/Map";
import { useGeolocation } from "../../../../contexts/location.context";

function GPSLocation() {
  const { error, location, isLoading } = useGeolocation();

  return (
    <>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">আপনার লোকেশন</h2>
      <Map location={location} isLoading={isLoading} error={error} />
    </>
  );
}

export default GPSLocation;
