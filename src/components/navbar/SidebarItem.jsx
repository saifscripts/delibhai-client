import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { useSidebar } from "./sidebar-provider";

export default function SidebarItem({ to, children }) {
  const { handleSidebarToggle } = useSidebar();

  return (
    <NavLink
      onClick={handleSidebarToggle}
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
