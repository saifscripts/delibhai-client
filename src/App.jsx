import { Fragment, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import LocationTracker from "./components/LocationTracker.jsx";
import { useGetMeQuery } from "./redux/features/auth/authApi.js";
import { getAuthUser, setUser } from "./redux/features/auth/authSlice.js";
import router from "./router.jsx";

export default function App() {
  const user = useSelector(getAuthUser);
  const dispatch = useDispatch();
  const { data } = useGetMeQuery();

  // update current user data on first load
  useEffect(() => {
    dispatch(setUser({ user: data?.data }));
  }, [dispatch, data]);

  return (
    <Fragment>
      <RouterProvider router={router} />
      <Toaster />
      {user && (user.role === "rider" || user.role === "admin") && (
        <LocationTracker />
      )}
    </Fragment>
  );
}
