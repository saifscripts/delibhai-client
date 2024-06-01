export default function Map({ geoLocation }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border py-5">
      {geoLocation?.latitude && geoLocation?.longitude ? (
        <p className="text-center text-2xl">
          {geoLocation?.latitude}, {geoLocation?.longitude}
        </p>
      ) : (
        <p className="text-center text-lg text-red-400">Not Available</p>
      )}
    </div>
  );
}
