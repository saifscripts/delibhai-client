export default function Map({ geoLocation }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
      {geoLocation?.latitude && geoLocation?.longitude ? (
        <>
          <p className="text-center text-2xl">
            Latitude: {geoLocation?.latitude}
          </p>
          <p className="text-center text-2xl">
            Longitude: {geoLocation?.longitude}
          </p>
        </>
      ) : (
        <p className="text-center text-lg text-red-400">Not Available</p>
      )}
    </div>
  );
}
