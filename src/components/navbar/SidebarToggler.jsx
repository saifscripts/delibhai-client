import { MoreVertical } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

export default function SidebarToggler() {
  const { handleSidebarToggle } = useSidebar();

  return (
    <MoreVertical
      className="cursor-pointer text-3xl lg:hidden"
      onClick={(e) => {
        e.stopPropagation();
        handleSidebarToggle();
      }}
    />
  );
}
