import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineStar } from "react-icons/hi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import dp from "../../../../assets/default.jpg";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import cn from "../../../../lib/cn.js";
import getVillageTitle from "../../../../utils/getVillageTitle.js";
import Distance from "./Distance.jsx";

export default function Hero({ hero }) {
  const {
    name,
    avatarURL,
    _id,
    mobile,
    isOnline,
    currentDistance,
    isHighlight,
    isLive,
    mainStation,
  } = hero;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${_id}`);
  };

  const station = getVillageTitle(mainStation);

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center gap-5 rounded-lg px-4 py-2 hover:bg-primary hover:bg-opacity-10 active:bg-primary active:bg-opacity-10"
    >
      <div className="relative aspect-square w-28 rounded-full">
        <img src={avatarURL || dp} alt="name" className="w-full rounded-full" />
        <div
          className={cn(
            "absolute bottom-[5%] right-[5%] aspect-square w-[20%] rounded-full border-2 border-white",
            { "bg-primary": isOnline, "bg-accent": !isOnline },
          )}
        ></div>
      </div>

      <div>
        <h3 className="text-xl">{name}</h3>

        <div className="flex items-center gap-1 text-accent">
          <div className="relative">
            {isHighlight && (
              <span className="absolute animate-ping">
                <HiOutlineStar className="text-red-400" />
              </span>
            )}
            <span className="relative">
              <HiOutlineStar
                className={cn({
                  "text-red-400": isHighlight,
                  "text-accent": !isHighlight,
                })}
              />
            </span>
          </div>

          <span>স্ট্যাশন: {station}</span>
        </div>

        <Distance currentDistance={currentDistance} isLive={isLive} />

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
  );
}
