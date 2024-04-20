import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useFetchData } from "../../../api/api";
import InfoContainer from "./InfoContainer";

export default function GPSLocationInfo({ id }) {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const { fetchData } = useFetchData();

  useEffect(() => {
    setLoading(true);
    const intervalId = setInterval(() => {
      fetchData(`/v1/user/location/${id}`).then(({ data }) => {
        if (data?.success) {
          const timestamp = Date.now();
          const isOnline = timestamp - data.data.timestamp < 1000;

          setGeoLocation(isOnline ? data.data : null);
        }
      });
      setLoading(false);
    }, 500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <h2 className="text-center text-2xl">Loading...</h2>;
  }

  return (
    <InfoContainer category="GPS Location">
      <div className="border-light text-medium mb-3 flex items-center justify-center gap-2 rounded-md border p-3">
        <CiLocationOn />
        <p>
          {"Heyako Bazar, Ramgarh Khagrachari Road, Fatikchhari, Chittagong, Bangladesh".slice(
            0,
            30,
          ) + " . . ."}
        </p>
      </div>
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
        {geoLocation?.latitude ? (
          <>
            <p className="text-center text-2xl">
              Latitude: {geoLocation?.latitude}
            </p>
            <p className="text-center text-2xl">
              Longitude: {geoLocation?.longitude}
            </p>
          </>
        ) : (
          <p className="text-center text-lg text-red-400">Not Available</p>
        )}
      </div>
    </InfoContainer>
  );
}
