import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, icon, text, highlight }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-slate-700 lg:rounded-lg lg:bg-primary lg:bg-opacity-5 lg:text-primary"
          : ""
      }
    >
      <div
        className={`lg:blok flex items-center gap-5 px-8 py-4 text-sm hover:cursor-pointer active:bg-primary lg:rounded-lg lg:px-4 lg:py-4 lg:hover:bg-neutral ${
          highlight && "lg:bg-primary lg:font-bold lg:text-white"
        }`}
      >
        <span className="text-2xl lg:hidden">{icon}</span>
        <span>{text}</span>
      </div>
    </NavLink>
  );
};

export default CustomNavLink;
