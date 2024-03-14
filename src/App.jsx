import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <Toaster />
    </>
  );
}

export default App;
