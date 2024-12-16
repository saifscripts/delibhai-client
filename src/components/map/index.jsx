import { MapPin, MapPinOff } from "lucide-react";

export default function Map({ location, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-tone-700 bg-tone/20 text-center text-xl text-tone-800">
        <div className="h-6 w-1/3 animate-pulse rounded-xl bg-primary/30" />
        <div className="h-6 w-1/3 animate-pulse rounded-xl bg-primary/30" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full rounded-2xl border border-destructive bg-destructive/20 px-4 py-2 text-center text-xl text-destructive">
        <MapPinOff className="-mt-1 mr-2 inline-block" size={20} />
        <span>{error}</span>
      </div>
    );
  }

  if (location) {
    return (
      <div className="w-full rounded-2xl border border-tone-700 bg-tone/20 py-2 text-center text-xl text-tone-800">
        <MapPin className="-mt-1 mr-2 inline-block" size={20} />
        <span>
          {location?.latitude}, {location?.longitude}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-destructive bg-destructive/20 py-2 text-center text-destructive">
      Not Available
    </div>
  );
}
