import { useEffect, useState } from "react";

function GPSLocation({ setActiveOption }) {
  const [geoLocation, setGeoLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const handlePosition = (position) => {
      setGeoLocation(position.coords);
      setLoading(false);
    };

    const handleError = () => {
      setLoading(false);
    };

    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (permissionStatus) {
        if (permissionStatus.state === "denied") {
          setError(
            "জিপিএস লোকেশন এর পারমিশন দেয়া হয় নি। সেটিং থেকে লোকেশন পারমিশন এলাউ করে দিন।",
          );
        }
      })
      .catch(function (error) {
        console.error("Error checking geolocation permission:", error);
      });

    const watchId = navigator.geolocation.watchPosition(
      handlePosition,
      handleError,
    );
    console.log(watchId);

    return () => navigator.geolocation.clearWatch(watchId);
  }, [setActiveOption]);

  if (loading) {
    return <h2 className="text-center text-2xl">Loading...</h2>;
  }

  if (error) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
        <p className="text-center text-2xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
      <p className="text-center text-2xl">Lat: {geoLocation?.latitude}</p>
      <p className="text-center text-2xl">Lon: {geoLocation?.latitude}</p>
    </div>
  );
}

export default GPSLocation;
