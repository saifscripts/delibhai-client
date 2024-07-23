import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import LocationTracker from "./components/LocationTracker.jsx";
import { getAuthUser } from "./redux/features/auth/authSlice.js";
import router from "./router.jsx";

export default function App() {
  const user = useSelector(getAuthUser);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      {user && (user.role === "rider" || user.role === "admin") && (
        <LocationTracker />
      )}
    </>
  );
}
