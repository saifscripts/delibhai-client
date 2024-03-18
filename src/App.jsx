import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";
import SubdomainStorageHandler from "./components/SubdomainStorageHandler";

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <SubdomainStorageHandler />
      <Toaster />
    </>
  );
}

export default App;
