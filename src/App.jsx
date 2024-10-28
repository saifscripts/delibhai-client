import { Fragment } from "react";
import { Toaster as ReactHotToaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import router from "./router.jsx";

export default function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <ReactHotToaster />
      <Toaster />
      {/* <LocationTracker /> */}
    </Fragment>
  );
}
