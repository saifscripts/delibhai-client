import Navbar from "@/components/navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mt-[64px]">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}

export default MainLayout;
