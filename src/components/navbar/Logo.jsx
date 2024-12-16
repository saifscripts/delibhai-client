import {
  default as logoDark,
  default as logoLight,
} from "@/assets/logos/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-provider";

export default function Logo(props) {
  const { theme } = useTheme();
  const logo = theme === "light" ? logoLight : logoDark;

  return (
    <Link to={"/"} {...props}>
      <img src={logo} alt="deliBhai Logo" className="w-28 sm:w-44" />
    </Link>
  );
}
