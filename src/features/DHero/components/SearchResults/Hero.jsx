import { BsTelephoneFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import dp from "../../../../assets/default.jpg";
import PrimaryButton from "../../../../components/ui/PrimaryButton";

export default function Hero({ details }) {
  const { name, avatarURL, distance, _id, mobile } = details;

  return (
    <Link to={`/profile/${_id}`}>
      <div className="flex items-center gap-5 rounded-lg p-4 hover:bg-neutral active:bg-neutral">
        <div className="w-28 rounded-full">
          <img
            src={avatarURL || dp}
            alt="name"
            className="w-full rounded-full"
          />
        </div>

        <div>
          <h3 className="mb-3 text-xl">{name}</h3>

          <div className="mb-2 flex items-center gap-1 text-gray-700">
            <span>{<GrLocation />}</span>
            <span>{distance}km</span>
          </div>

          <div className="flex gap-3">
            <Link onClick={(e) => e.stopPropagation()}>
              <PrimaryButton icon={<PiPaperPlaneTiltFill />} />
            </Link>

            <Link to={`tel:${mobile}`} onClick={(e) => e.stopPropagation()}>
              <PrimaryButton icon={<BsTelephoneFill />} />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
