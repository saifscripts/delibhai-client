import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import ErrorPage from "./components/ErrorPage";
import PublicRoute from "./components/PublicRoute";
import { Login, OTPVerification, Signup } from "./features/Authentication";
import { Search, SearchResults } from "./features/DHero";
import { Profile, ProfileInfo } from "./features/profile";
import MainLayout from "./layouts/MainLayout";
import DHeroLocation from "./modules/admin/pages/DHeroLocation";
import Home from "./modules/home/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "vehicles",
        element: <Search />,
      },
      { path: "vehicles/search", element: <SearchResults /> },
    ],
  },

  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <DHeroLocation />
      </AdminRoute>
    ),
  },
]);

export default router;
