import { HiOutlineLocationMarker } from "react-icons/hi";
import cn from "../../../../lib/cn";

export default function Distance({ currentDistance, isLive }) {
  return (
    <div className="flex items-center gap-1 leading-relaxed">
      <div className="relative">
        {isLive && (
          <span className="absolute animate-ping">
            {<HiOutlineLocationMarker className="text-destructive" />}
          </span>
        )}
        <span className="relative">
          {
            <HiOutlineLocationMarker
              className={cn({ "text-destructive": isLive })}
            />
          }
        </span>
      </div>
      <span>{currentDistance.toFixed(2)} km</span>
    </div>
  );
}
