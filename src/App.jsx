import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { getRouter } from "./Routers";
import services from "./data/services";

window.addEventListener("message", function (event) {
  // if (event.origin === "http://localhost:5173") {
  if (event.data) {
    console.log("message received in ", event.origin);
    localStorage.setItem("authToken", event.data);
  }
  // }
});

function App() {
  return (
    <>
      <RouterProvider router={getRouter()} />
      <iframe
        src={`https://delibhai.com`}
        className="hidden"
        id={`parent_frame`}
      ></iframe>
      {services?.map(
        ({ id, subdomain, active }) =>
          active && (
            <iframe
              key={id}
              src={`https://${subdomain}.delibhai.com`}
              className="hidden"
              id={`${subdomain}_frame`}
            ></iframe>
          )
      )}
      <Toaster />
    </>
  );
}

export default App;
