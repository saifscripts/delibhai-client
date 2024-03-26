import { useNavigate } from "react-router-dom";
import useUserRole from "../hooks/useUserRole.js";

function PublicRoute({ children }) {
  const { isLoggedIn, isLoading } = useUserRole();
  const navigate = useNavigate();

  if (isLoading) {
    return <h2 className="text-center text-2xl font-semibold">Loading...</h2>;
  }

  if (isLoggedIn) {
    return navigate("/");
  }

  return children;
}

export default PublicRoute;
