import { Outlet } from "react-router-dom";
import { Navbar } from "../layouts/Navbar";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
