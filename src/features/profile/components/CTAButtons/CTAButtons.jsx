import { useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import UserContext from "../../contexts/UserContext";

export default function CTAButtons() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="container fixed bottom-10 left-0 right-0 z-50 flex max-w-3xl items-center justify-center">
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
