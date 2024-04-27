import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
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
} from "./features/Profile";
import MainLayout from "./layouts/MainLayout";
import { DHeroLocation } from "./pages/admin";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { ProfileInfo } from "./pages/profile/features/ProfileInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
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
      {
        path: "profile/:id",
        element: <Profile />,
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
      {
        path: "hero",
        element: <Search />,
        children: [{ path: "search", element: <SearchResults /> }],
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <AdminRoute>
        <DHeroLocation />
      </AdminRoute>
    ),
  },
]);

export default router;
