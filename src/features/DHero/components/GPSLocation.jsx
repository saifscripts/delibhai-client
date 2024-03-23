import { useEffect, useState } from "react";

function GPSLocation({ setLocationType }) {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const handlePosition = (position) => {
      setGeoLocation(position.coords);
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
  }, [setLocationType]);

  if (loading) {
    return <h2 className="text-center text-2xl">Loading...</h2>;
  }

  if (error) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border p-5">
        <p className="text-center text-xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
      <p className="text-center text-2xl">Latitude: {geoLocation?.latitude}</p>
      <p className="text-center text-2xl">
        Longitude: {geoLocation?.longitude}
      </p>
    </div>
  );
}

export default GPSLocation;
