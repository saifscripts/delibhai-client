import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

function PublicRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return navigate("/");
  }

  return children;
}

export default PublicRoute;
