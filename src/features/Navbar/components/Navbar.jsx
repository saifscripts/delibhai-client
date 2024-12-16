import { ThemeSwitcher } from "@/components/theme-switcher";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import useSidebar from "../hooks/useSidebar";
import AuthLinks from "./AuthLinks";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { isSidebarOpen, handleSidebarToggle } = useSidebar();

  return (
    <nav className="sticky top-0 z-50 border-b bg-background">
      <div className="container flex h-[64px] items-center justify-between">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        {/* Hamburger Button */}
        <RxHamburgerMenu
          className="cursor-pointer text-3xl lg:hidden"
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
        </div>

        {/* Nav menu */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <AuthLinks />
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
