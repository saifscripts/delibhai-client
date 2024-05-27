import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../api/api";
import Map from "../../../../components/Map";

export default function GPSLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
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

  return <Map geoLocation={geoLocation} />;
}
