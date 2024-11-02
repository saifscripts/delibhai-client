export default function Map({ location, isLoading, error }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border py-5">
      {isLoading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : error ? (
        <p className="text-center text-xl text-red-400">{error}</p>
      ) : location ? (
        <p className="text-center text-2xl">
          {location?.latitude}, {location?.longitude}
        </p>
      ) : (
        <p className="text-center text-lg text-red-400">Not Available</p>
      )}
    </div>
  );
}
