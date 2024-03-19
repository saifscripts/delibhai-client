import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";
import SubdomainStorageHandler from "./components/SubdomainStorageHandler";

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <Toaster />

      {window.self.location === window.parent.location && (
        <SubdomainStorageHandler />
      )}
    </>
  );
}

export default App;
