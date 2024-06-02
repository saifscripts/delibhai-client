import { useContext } from "react";
import { useAuth } from "../../../Authentication/contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import CallButtons from "./CallButtons";
import ServiceStatusButtons from "./ServiceStatusButtons";

export default function BottomPanel() {
  const { userInfo } = useContext(UserContext);
  const { currentUser } = useAuth();

  return (
    <div className="container fixed bottom-0 left-0 right-0 z-50 flex max-w-3xl items-center justify-center bg-white py-3">
      {userInfo?._id !== currentUser?._id ? (
        <CallButtons />
      ) : (
        <ServiceStatusButtons />
      )}
    </div>
  );
}
