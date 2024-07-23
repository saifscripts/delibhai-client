import { useContext } from "react";
import { useSelector } from "react-redux";
import { getAuthUser } from "../../../../redux/features/auth/authSlice";
import UserContext from "../../contexts/UserContext";
import CallButtons from "./CallButtons";
import ServiceStatusButtons from "./ServiceStatusButtons";

export default function BottomPanel() {
  const { userInfo } = useContext(UserContext);
  const user = useSelector(getAuthUser);

  return (
    <div className="container fixed bottom-0 left-0 right-0 z-50 flex max-w-3xl items-center justify-center bg-white py-3">
      {userInfo?._id !== user?._id ? <CallButtons /> : <ServiceStatusButtons />}
    </div>
  );
}
