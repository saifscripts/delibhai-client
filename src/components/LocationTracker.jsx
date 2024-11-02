import { useCallback, useEffect } from "react";
import { useMe } from "../hooks/auth.hook";
import { updateRiderLocation } from "../services/user.service";

const LocationTracker = () => {
  const { user } = useMe();

  // Function to get the user's current location
  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const liveLocation = { latitude, longitude };
          updateRiderLocation({ liveLocation });
        },
        () => {},
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // TODO:Send location data to the server using Socket.IO
  useEffect(() => {
    let intervalId;

    if (user?.role === "rider" || user?.role === "admin") {
      intervalId = setInterval(getLocation, 2000);
    }

    return () => clearInterval(intervalId);
  }, [user, getLocation]);

  return <></>;
};

export default LocationTracker;
