import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";
import LocationTracker from "./components/LocationTracker";
import SubdomainStorageHandler from "./components/SubdomainStorageHandler";
import { useAuth } from "./features/Authentication/contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <RouterProvider router={getRouter()} />
      <Toaster />

      {window.self.location === window.parent.location && (
        <>
          <SubdomainStorageHandler />
          {currentUser && <LocationTracker userId={currentUser?._id} />}
        </>
      )}
    </>
  );
}

export default App;
