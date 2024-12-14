import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth.context";

export default function AuthLinks({ handleSidebarToggle }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (user) return null;

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" onClick={() => navigate("/login")}>
        লগইন
      </Button>
      <Button onClick={() => navigate("/login")}>আয় করুন</Button>
    </div>
  );
}
