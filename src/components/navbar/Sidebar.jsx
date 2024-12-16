import logo from "@/assets/logos/logo.png";
import { useAuth } from "@/contexts/auth.context";
import { DollarSign, Home, LogIn, LogOut, User } from "lucide-react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-provider";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "./sidebar-provider";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const { isSidebarOpen, handleSidebarToggle } = useSidebar();
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-slate-900 text-background transition-transform ease-in dark:text-foreground lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-700 px-4  py-5 lg:hidden">
          <Link to={"/"} onClick={handleSidebarToggle}>
            <img src={logo} alt="deliBhai Logo" className="w-28 sm:w-44" />
          </Link>

          <div
            onClick={handleSidebarToggle}
            className="flex h-10 w-10 items-center justify-center border border-slate-700 text-3xl hover:bg-slate-700"
          >
            <RxCross1 />
          </div>
        </div>

        <ul className="flex flex-col">
          <SidebarItem to="/">
            <Home size={20} />
            <span>হোম পেইজ</span>
          </SidebarItem>
          {user && (
            <SidebarItem to={`/profile/${user._id}`}>
              <User size={20} />
              <span>প্রোফাইল</span>
            </SidebarItem>
          )}
          {user && (
            <SidebarItem
              to={`/login`}
              onClick={() => {
                handleSidebarToggle();
                logout();
              }}
            >
              <LogOut size={20} />
              <span>লগ আউট</span>
            </SidebarItem>
          )}
          {!user && (
            <SidebarItem to={`/login`}>
              <LogIn size={20} />
              <span>লগইন</span>
            </SidebarItem>
          )}
          {!user && (
            <SidebarItem to={`/signup`}>
              <DollarSign size={20} />
              <span>আয় করুন</span>
            </SidebarItem>
          )}
        </ul>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={handleSidebarToggle}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}
    </>
  );
};

export default Sidebar;
