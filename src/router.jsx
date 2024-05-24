import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import ErrorPage from "./components/ErrorPage";
import PublicRoute from "./components/PublicRoute";
import { Login, OTPVerification, Signup } from "./features/Authentication";
import { Search, SearchResults } from "./features/DHero";
import MainLayout from "./layouts/MainLayout";
import { DHeroLocation } from "./pages/admin";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { ProfileInfo } from "./pages/profile/features/ProfileInfo";

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
        path: "hero",
        element: <Search />,
      },
      { path: "hero/search", element: <SearchResults /> },
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
