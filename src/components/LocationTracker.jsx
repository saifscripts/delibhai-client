import { useEffect, useState } from "react";
import { useUpdateData } from "../api/api";
import { useAuth } from "../features/Authentication/contexts/AuthContext";

const LocationTracker = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { updateData } = useUpdateData();
  const { currentUser } = useAuth();

  // Function to get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { timestamp } = position;
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude, timestamp });
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
    if (currentLocation) {
      updateData(`/v1/user/${currentUser?._id}`, {
        liveLocation: currentLocation,
      }).then((data) => {
        console.log(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  // Get user's initial location when component mounts
  useEffect(() => {
    getLocation();
  }, []);

  return <></>;
};

export default LocationTracker;
