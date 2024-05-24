import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import LocationTracker from "./components/LocationTracker.jsx";
import { useAuth } from "./features/Authentication/contexts/AuthContext.jsx";
import router from "./router.jsx";

export default function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      {currentUser &&
        (currentUser.role === "hero" || currentUser.role === "admin") && (
          <LocationTracker />
        )}
    </>
  );
}
