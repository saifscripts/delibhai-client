import { useAuth } from "@/contexts/auth.context";
import { DollarSign, Home, LogIn, LogOut, User } from "lucide-react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import minilogo from "../../../assets/logos/minilogo.png";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 top-0 z-50 w-[300px] bg-slate-900 text-white transition-transform ease-in lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-700 px-4  py-5 lg:hidden">
          <Link
            onClick={handleSidebarToggle}
            className="flex items-center gap-4"
            to={"/"}
          >
            <img src={minilogo} alt="deliBhai Logo" className="w-10" />
            <p className="text-3xl font-bold text-white">deliBhai</p>
          </Link>

          <div
            onClick={handleSidebarToggle}
            className="flex h-10 w-10 items-center justify-center border border-slate-700 text-3xl hover:bg-slate-700"
          >
            <RxCross1 />
          </div>
        </div>

        <ul className="flex flex-col">
          <SidebarItem to="/" onClick={handleSidebarToggle}>
            <Home size={20} />
            <span>হোম পেইজ</span>
          </SidebarItem>
          {user && (
            <SidebarItem
              to={`/profile/${user._id}`}
              onClick={handleSidebarToggle}
            >
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
            <SidebarItem to={`/login`} onClick={handleSidebarToggle}>
              <LogIn size={20} />
              <span>লগইন</span>
            </SidebarItem>
          )}
          {!user && (
            <SidebarItem to={`/signup`} onClick={handleSidebarToggle}>
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
          className="fixed inset-0 z-10 bg-black/30"
        />
      )}
    </>
  );
};

export default Sidebar;
