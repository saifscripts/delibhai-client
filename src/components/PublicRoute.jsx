import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook.js";

function PublicRoute({ children }) {
  const { user, isPending } = useAuth();
  const navigate = useNavigate();

  if (isPending) {
    return <h2 className="text-center text-2xl font-semibold">Loading...</h2>;
  }

  if (user) {
    return navigate("/");
  }

  return children;
}

export default PublicRoute;
