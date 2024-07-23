import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useUpdateData } from "../api/api";
import { getAuthUser } from "../redux/features/auth/authSlice";

const LocationTracker = () => {
  const { updateData } = useUpdateData();
  const user = useSelector(getAuthUser);

  // Function to get the user's current location
  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const liveLocation = { latitude, longitude };
          updateData(`/v1/user/location/${user?._id}`, {
            liveLocation,
          });
        },
        () => {},
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [user?._id, updateData]);

  // Send location data to the server using Socket.IO
  useEffect(() => {
    let intervalId;

    if (user?.role === "rider" || user?.role === "admin") {
      intervalId = setInterval(getLocation, 500);
    }

    return () => clearInterval(intervalId);
  }, [user, getLocation]);

  return <></>;
};

export default LocationTracker;
