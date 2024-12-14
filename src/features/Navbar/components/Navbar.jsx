import { ThemeSwitcher } from "@/components/theme-switcher";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import { useAuth } from "../../../contexts/auth.context";
import useSidebar from "../hooks/useSidebar";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { isSidebarOpen, handleSidebarToggle } = useSidebar();
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-[99999] border-b border-gray-200 bg-white">
      <div className="container flex h-[64px] items-center justify-between">
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

          {user?.role === "admin" && (
            <Link
              to="/admin-dashboard"
              className="hidden bg-secondary px-6 py-3 font-semibold hover:brightness-90 lg:inline-block"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Nav menu */}
        <ul className="hidden items-center gap-2 lg:flex">
          <ThemeSwitcher />
          {import.meta.env.VITE_ENV === "development" && <NavLinks />}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
