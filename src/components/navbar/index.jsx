import logoLight from "@/assets/logos/logo.png";
import logoDark from "@/assets/logos/logo.svg";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";
import AuthLinks from "./AuthLinks";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./sidebar-provider";
import SidebarToggler from "./SidebarToggler";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  const { theme } = useTheme();
  const logo = theme === "light" ? logoLight : logoDark;
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Hide navbar on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <SidebarProvider>
      <header
        className={cn(
          "transition-top fixed top-0 z-30 h-[64px] w-full border-b bg-background duration-300",
          {
            "top-0": visible,
            "top-[-64px]": !visible,
          },
        )}
      >
        <div className="container flex h-[64px] items-center justify-between">
          <Logo />

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <AuthLinks />
            <UserDropdown />
            <SidebarToggler />
          </div>
        </div>
      </header>
      <Sidebar />
    </SidebarProvider>
  );
}
