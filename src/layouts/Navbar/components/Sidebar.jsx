import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import minilogo from "../../../assets/logos/minilogo.png";
import { NavLinks } from "./NavLinks";

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <div
      className={`lg:hidden fixed top-0 bottom-0 left-0 w-[300px] bg-slate-800 text-white transition-transform ease-in ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="lg:hidden flex justify-between items-center py-5 px-4  border-b border-slate-700">
        <Link
          onClick={handleSidebarToggle}
          className="flex gap-4 items-center"
          to={"/"}
        >
          <img src={minilogo} alt="deliBhai Logo" className="w-10" />
          <p className="text-3xl text-white font-bold">deliBhai</p>
        </Link>

        <div
          onClick={handleSidebarToggle}
          className="w-10 h-10 flex justify-center items-center text-3xl border border-slate-700 hover:bg-slate-700"
        >
          <RxCross1 />
        </div>
      </div>

      <ul className="flex flex-col">
        <NavLinks />
      </ul>
    </div>
  );
};

export { Sidebar };
