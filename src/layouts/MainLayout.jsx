import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../features/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default MainLayout;
