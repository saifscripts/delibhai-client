import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../../../../components/map";
import { getRiderLocation } from "../../../../services/user.service";

export default function GPSLocation() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const intervalId = setInterval(async () => {
      const { success, data } = await getRiderLocation(id);
      if (success) {
        const timestamp = Date.now();
        const isOnline = timestamp - data.timestamp < 5000;
        setGeoLocation(isOnline ? data : null);
      }
      setIsLoading(false);
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <Map location={geoLocation} isLoading={isLoading} />;
}
