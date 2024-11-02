import { useParams } from "react-router-dom";
import { useMe } from "../../../../hooks/auth.hook";
import { useUser } from "../../../../hooks/user.hook";
import CallButtons from "./CallButtons";
import ServiceStatusButtons from "./ServiceStatusButtons";

export default function BottomPanel() {
  const { id } = useParams();
  const { user } = useUser(id);
  const { user: authUser } = useMe();

  return (
    <div className="container fixed bottom-0 left-0 right-0 z-50 flex max-w-3xl items-center justify-center bg-white py-3">
      {user?._id !== authUser?._id ? <CallButtons /> : <ServiceStatusButtons />}
    </div>
  );
}
