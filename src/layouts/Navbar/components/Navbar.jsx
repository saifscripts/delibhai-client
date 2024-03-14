import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import useSidebar from "../hooks/useSidebar";
import { NavLinks } from "./NavLinks";
import { Sidebar } from "./Sidebar";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const { isSidebarOpen, handleSidebarToggle } = useSidebar();

  return (
    <nav className="bg-white sticky top-0 lg:shadow-sm z-50">
      <div className="container flex justify-between items-center h-16 sm:h-24">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        {/* Hamburger Button */}
        <RxHamburgerMenu
          className="lg:hidden text-3xl"
          onClick={(e) => {
            e.stopPropagation();
            handleSidebarToggle();
          }}
        />

        {/* Logo */}
        <Link className="hidden lg:block" to={"/"}>
          <img src={logo} alt="deliBhai Logo" className="w-28 sm:w-44" />
        </Link>

        {/* Nav menu */}
        <ul className="hidden lg:flex gap-2">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
