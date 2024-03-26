import { useNavigate } from "react-router-dom";
import useUserRole from "../hooks/useUserRole.js";

function AdminRoute({ children }) {
  const { isLoggedIn, role, isLoading } = useUserRole();
  const navigate = useNavigate();

  if (isLoading) {
    return <h2 className="text-center text-2xl font-semibold">Loading...</h2>;
  }

  if (!isLoggedIn) {
    return navigate("/login");
  }

  if (role !== "admin") {
    return (
      <h2 className="text-center text-2xl font-semibold text-red-400">
        You are not an Admin
      </h2>
    );
  }

  return children;
}

export default AdminRoute;
