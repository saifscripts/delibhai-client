import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/Authentication/contexts/AuthContext.jsx";
import useUserRole from "../hooks/useUserRole.js";

function AdminRoute({ children }) {
  const { isLoggedIn, role, isLoading } = useUserRole();
  const navigate = useNavigate();
  const { logout } = useAuth();

  if (isLoading) {
    return <h2 className="text-center text-2xl font-semibold">Loading...</h2>;
  }

  if (!isLoggedIn) {
    return navigate("/login");
  }

  if (role !== "admin") {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h2 className="text-center text-2xl font-semibold text-red-400">
          You are not an Admin
        </h2>
        <button
          className="rounded-md bg-primary px-6 py-3 font-semibold text-white"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return children;
}

export default AdminRoute;
