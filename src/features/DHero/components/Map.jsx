function Map({ geoLocation }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border">
      <p className="text-center text-2xl">Lat: {geoLocation?.latitude}</p>
      <p className="text-center text-2xl">Lon: {geoLocation?.latitude}</p>
    </div>
  );
}

export default Map;
