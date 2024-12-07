import { MapPin, MapPinOff } from "lucide-react";

export default function Map({ location, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#00B487]   bg-[#E6FFF9] py-2 text-center text-xl text-[#008C69]">
        <div className="h-[28px] w-1/3 animate-pulse rounded-xl bg-primary/30" />
        <div className="h-[28px] w-1/3 animate-pulse rounded-xl bg-primary/30" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full rounded-2xl border border-[#FF3B30]/20 bg-[#FF3B30]/10 px-4 py-2 text-center text-xl text-[#FF3B30]">
        <MapPinOff className="-mt-1 mr-2 inline-block" size={20} />
        <span>{error}</span>
      </div>
    );
  }

  if (location) {
    return (
      <div className="w-full rounded-2xl border border-[#00B487] bg-[#E6FFF9] py-2 text-center text-xl text-[#008C69]">
        <MapPin className="-mt-1 mr-2 inline-block" size={20} />
        <span>
          {location?.latitude}, {location?.longitude}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-[#FF3B30]/20 bg-[#FF3B30]/10 py-2 text-center text-[#FF3B30]">
      Not Available
    </div>
  );
}
