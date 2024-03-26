import { useEffect } from "react";
import { useUpdateData } from "../api/api";

const LocationTracker = ({ userId }) => {
  const { updateData } = useUpdateData();

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const liveLocation = { latitude, longitude };
          updateData(`/v1/user/location/${userId}`, {
            liveLocation,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Send location data to the server using Socket.IO
  useEffect(() => {
    const intervalId = setInterval(getLocation, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <></>;
};

export default LocationTracker;
