import { Outlet } from "react-router-dom";
import { Navbar } from "../features/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
