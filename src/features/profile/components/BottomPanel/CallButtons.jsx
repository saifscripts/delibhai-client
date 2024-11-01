import { BsTelephoneFill } from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import { useUser } from "../../../../hooks/user.hook";

export default function CallButtons() {
  const { id } = useParams();
  const { user } = useUser(id);

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <Link onClick={(e) => e.stopPropagation()}>
        <PrimaryButton className="w-full" icon={<PiPaperPlaneTiltFill />} />
      </Link>

      <Link to={`tel:${user?.mobile}`} onClick={(e) => e.stopPropagation()}>
        <PrimaryButton className="w-full" icon={<BsTelephoneFill />} />
      </Link>
    </div>
  );
}
