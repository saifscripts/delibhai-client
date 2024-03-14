import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import ServiceNotFound from "./components/ServiceNotFound";
import { Login, OTPVerification, Signup } from "./features/Authentication";
import Home from "./features/Home";
import {
  EditAddressInfo,
  EditContactInfo,
  EditManualLocationInfo,
  EditPersonalInfo,
  EditServiceInfo,
  EditVideoURL,
  Profile,
} from "./features/Profile";
import { EditOwnerInfo } from "./features/Profile/components/EditOwnerInfo";
import { EditVehicleInfo } from "./features/Profile/components/EditVehicleInfo";
import DHero from "./pages/DHero";
import DHeroSearch from "./pages/DHeroSearch";
import DHeroSearchResult from "./pages/DHeroSearchResult";
import Services from "./pages/Services";

const commonRoutes = [
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "otp-verification", element: <OTPVerification /> },
  { path: "profile/:id", element: <Profile /> },
  {
    path: "profile/edit/personal-info",
    element: <EditPersonalInfo />,
  },
  {
    path: "profile/edit/contact-info",
    element: <EditContactInfo />,
  },
  { path: "profile/edit/address", element: <EditAddressInfo /> },
  {
    path: "profile/edit/vehicle-info",
    element: <EditVehicleInfo />,
  },
  { path: "profile/edit/owner-info", element: <EditOwnerInfo /> },
  {
    path: "profile/edit/service-info",
    element: <EditServiceInfo />,
  },
  {
    path: "profile/edit/manual-location-info",
    element: <EditManualLocationInfo />,
  },
  { path: "profile/edit/video", element: <EditVideoURL /> },
];

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "services", element: <Services /> },
      ...commonRoutes,
    ],
  },
]);

const dheroRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <DHero /> },
      { path: ":vehicle", element: <DHeroSearch /> },
      { path: "search", element: <DHeroSearchResult /> },
      ...commonRoutes,
    ],
  },
]);

const blankRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <ServiceNotFound /> }],
  },
]);

export const getRouter = () => {
  const subdomain = location.hostname.split(".")[0];

  switch (subdomain) {
    case "hero":
      return dheroRouter;
    case "labour":
      return blankRouter;
    case "send":
      return blankRouter;
    case "shop":
      return blankRouter;
    case "blood":
      return blankRouter;
    case "gas":
      return blankRouter;
    case "food":
      return blankRouter;
    case "tutor":
      return blankRouter;
    default:
      return appRouter;
  }
};
