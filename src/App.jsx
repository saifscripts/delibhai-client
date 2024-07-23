import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import LocationTracker from "./components/LocationTracker.jsx";
import { useAuth } from "./features/Authentication/contexts/AuthContext.jsx";
import { persistor, store } from "./redux/store.js";
import router from "./router.jsx";

export default function App() {
  const { currentUser } = useAuth();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
        {currentUser &&
          (currentUser.role === "hero" || currentUser.role === "admin") && (
            <LocationTracker />
          )}
      </PersistGate>
    </Provider>
  );
}
