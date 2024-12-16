import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ to, children, onClick }) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-4 px-8 py-4 hover:bg-slate-800 active:bg-primary",
          {
            "bg-slate-700": isActive,
          },
        )
      }
    >
      {children}
    </NavLink>
  );
}
