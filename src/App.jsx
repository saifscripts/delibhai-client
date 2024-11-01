import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import LocationTracker from "./components/LocationTracker.jsx";
import router from "./router.jsx";

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <LocationTracker />
      <Toaster />
    </Fragment>
  );
}
