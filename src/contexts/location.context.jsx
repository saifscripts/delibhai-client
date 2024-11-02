import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMe } from "../hooks/auth.hook";
import { updateRiderLocation } from "../services/user.service";

const GeolocationContext = createContext(null);

export const GeolocationProvider = ({ children }) => {
  const { user } = useMe();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function to get the user's current location
  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = { latitude, longitude };
        setLocation(location);
        setError("");
        setIsLoading(false);
        if (user?.role === "rider" || user?.role === "admin") {
          updateRiderLocation({ liveLocation: location });
        }
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setError(
            "জিপিএস লোকেশন এর পারমিশন দেয়া হয় নি। সেটিং থেকে লোকেশন পারমিশন এলাউ করে দিন।",
          );
        }
        setIsLoading(false);
      },
    );
  }, [user?.role]);

  // TODO:Send location data to the server using Socket.IO
  useEffect(() => {
    let intervalId;

    if (navigator.geolocation) {
      intervalId = setInterval(getLocation, 2000);
      setError("");
    } else {
      setError("আপনার ব্রাউজারে জিপিএস লোকেশন ট্র্যাকিং সাপোর্ট নেই।");
    }

    return () => clearInterval(intervalId);
  }, [getLocation]);

  return (
    <GeolocationContext.Provider value={{ location, error, isLoading }}>
      {children}
    </GeolocationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGeolocation = () => {
  return useContext(GeolocationContext);
};
