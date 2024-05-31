import { HiOutlineLocationMarker } from "react-icons/hi";
import cn from "../../../../lib/cn";

export default function Distance({ currentDistance, isLive }) {
  return (
    <div className="flex items-center gap-1 leading-relaxed text-accent">
      <div className="relative">
        {isLive && (
          <span className="absolute animate-ping">
            {<HiOutlineLocationMarker className="text-red-400" />}
          </span>
        )}
        <span className="relative">
          {
            <HiOutlineLocationMarker
              className={cn({ "text-red-400": isLive })}
            />
          }
        </span>
      </div>
      <span>{currentDistance} km</span>
    </div>
  );
}
