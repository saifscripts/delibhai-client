export default function Map({ location, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#00B487]   bg-[#E6FFF9] py-2 text-center text-xl text-[#008C69]">
        <div className="h-[28px] w-2/3 animate-pulse rounded-xl bg-[#00B487]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#FF3B30]/20 bg-[#FF3B30]/10 py-2 text-center text-pink-500">
        {error}
      </div>
    );
  }

  if (location) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#00B487] bg-[#E6FFF9] py-2 text-center text-xl text-[#008C69]">
        {location?.latitude}, {location?.longitude}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-[#FF3B30]/20 bg-[#FF3B30]/10 py-2 text-center text-pink-500">
      Not Available
    </div>
  );
}
