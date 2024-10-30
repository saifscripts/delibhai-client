import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../../../../components/Map";
import { getRiderLocation } from "../../../../services/user.service";

export default function GPSLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const intervalId = setInterval(async () => {
      const { success, data } = await getRiderLocation(id);
      if (success) {
        const timestamp = Date.now();
        const isOnline = timestamp - data.timestamp < 1000;
        console.log(isOnline);
        setGeoLocation(isOnline ? data : null);
      }
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
