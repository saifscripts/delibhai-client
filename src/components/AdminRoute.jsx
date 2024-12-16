import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

function AdminRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <h2 className="text-center text-2xl font-semibold">Loading...</h2>;
  }

  if (!user) {
    return navigate("/login", { state: { from: location.pathname } });
  }

  if (user && user?.role !== "admin") {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h2 className="text-center text-2xl font-semibold text-destructive">
          You are not an Admin
        </h2>
        <button
          className="rounded-md bg-primary px-6 py-3 font-semibold text-white"
          onClick={() => {
            logout();
            navigate("/login", { state: { from: location.pathname } });
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
