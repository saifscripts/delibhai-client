import { useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import { useAuth } from "../../../Authentication/contexts/AuthContext";
import UserContext from "../../contexts/UserContext";

export default function CTAButtons() {
  const { userInfo } = useContext(UserContext);
  const { currentUser } = useAuth();

  if (userInfo?._id === currentUser?._id) {
    return;
  }

  return (
    <div className="container fixed bottom-0 left-0 right-0 z-50 flex w-full max-w-3xl items-center justify-center bg-white pb-10 pt-2 sm:pb-2">
      <div className="grid w-full grid-cols-2 gap-3">
        <Link onClick={(e) => e.stopPropagation()}>
          <PrimaryButton className="w-full" icon={<PiPaperPlaneTiltFill />} />
        </Link>

        <Link
          to={`tel:${userInfo?.mobile}`}
          onClick={(e) => e.stopPropagation()}
        >
          <PrimaryButton className="w-full" icon={<BsTelephoneFill />} />
        </Link>
      </div>
    </div>
  );
}
