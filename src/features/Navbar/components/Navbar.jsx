import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import { useAuth } from "../../../features/Authentication/contexts/AuthContext";
import cn from "../../../lib/cn";
import useSidebar from "../hooks/useSidebar";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { isSidebarOpen, handleSidebarToggle } = useSidebar();
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav
      className={cn("sticky top-0 z-[99999] bg-white lg:shadow-sm", {
        "bg-secondary sm:bg-white": pathname === "/",
      })}
    >
      <div className="container flex h-16 items-center justify-between sm:h-24">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        {/* Hamburger Button */}
        <RxHamburgerMenu
          className="text-3xl lg:hidden"
          onClick={(e) => {
            e.stopPropagation();
            handleSidebarToggle();
          }}
        />

        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link className="hidden lg:block" to={"/"}>
            <img src={logo} alt="deliBhai Logo" className="w-28 sm:w-44" />
          </Link>

          {currentUser?.role === "admin" && (
            <Link
              to="/admin-dashboard"
              className="hidden bg-secondary px-6 py-3 font-semibold hover:brightness-90 lg:inline-block"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Nav menu */}
        <ul className="hidden gap-2 lg:flex">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
