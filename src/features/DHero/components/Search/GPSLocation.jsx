import { useEffect, useState } from "react";
import Map from "../../../../components/Map";

function GPSLocation({ geoLocation, setGeoLocation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const handlePosition = (position) => {
      setGeoLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLoading(false);
    };

    const handleError = (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setError(
          "জিপিএস লোকেশন এর পারমিশন দেয়া হয় নি। সেটিং থেকে লোকেশন পারমিশন এলাউ করে দিন।",
        );
      }
      setLoading(false);
    };

    const watchId = navigator.geolocation.watchPosition(
      handlePosition,
      handleError,
    );

    return () => navigator.geolocation.clearWatch(watchId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h2 className="text-center text-2xl">Loading...</h2>;
  }

  if (error) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border p-5 py-5">
        <p className="text-center text-xl text-red-400">{error}</p>
      </div>
    );
  }

  return <Map geoLocation={geoLocation} />;
}

export default GPSLocation;
