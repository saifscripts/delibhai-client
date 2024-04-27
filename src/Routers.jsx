import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import ErrorPage from "./components/ErrorPage";
import PublicRoute from "./components/PublicRoute";
import { Login, OTPVerification, Signup } from "./features/Authentication";
import { Search, SearchResults } from "./features/DHero";
import {
  EditAddressInfo,
  EditContactInfo,
  EditManualLocationInfo,
  EditOwnerInfo,
  EditPersonalInfo,
  EditServiceInfo,
  EditVehicleInfo,
  EditVideoURL,
  Profile,
} from "./features/Profile";
import { ProfileInfo } from "./features/ProfileInfo";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages";
import DHeroLocation from "./pages/admin/DHeroLocation";
import NewProfile from "./pages/common/Profile/NewProfile";

const commonRoutes = [
  {
    path: "login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  { path: "otp-verification", element: <OTPVerification /> },
  { path: "profile/:id", element: <Profile /> },
  {
    path: "new-profile/:id",
    element: <NewProfile />,
    children: [
      {
        index: true,
        element: <ProfileInfo />,
      },
      {
        path: ":category",
        element: <ProfileInfo />,
      },
    ],
  },
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
    element: <MainLayout />,
    children: [{ path: "", element: <Home /> }, ...commonRoutes],
  },
]);

const dheroRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Search /> },
      { path: "search", element: <SearchResults /> },
      ...commonRoutes,
    ],
  },
]);

const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AdminRoute>
        <DHeroLocation />
      </AdminRoute>
    ),
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
]);

const blankRouter = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
]);

export const getRouter = () => {
  const subdomain = location.hostname.split(".")[0];

  switch (subdomain) {
    case "hero":
      return dheroRouter;
    case "admin":
      return adminRouter;
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
