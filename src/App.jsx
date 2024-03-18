import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";

window.addEventListener("message", function (event) {
  // if (event.origin === "http://localhost:5173") {
  if (event.data) {
    console.log("message received");
    localStorage.setItem("authToken", event.data);
  }
  // }
});

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <iframe
        src="https://hero.delibhai.com"
        className="w-full h-screen"
        id="hero_frame"
        title="Iframe Example"
      ></iframe>
      <Toaster />
    </>
  );
}

export default App;
