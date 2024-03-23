import { Address } from "../../../Profile";
import GPSLocation from "./GPSLocation";
import RadioButton from "./RadioButton";

function CurrentLocation({
  manualLocation,
  setManualLocation,
  locationType,
  setLocationType,
  geoLocation,
  setGeoLocation,
}) {
  return (
    <>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">নিজ ঠিকানা</h2>

      <div className="mx-auto mb-8 w-fit">
        <RadioButton
          fill={locationType === "gps"}
          text="GPS Location"
          onSelect={() => setLocationType("gps")}
        />
        <RadioButton
          fill={locationType === "manual"}
          text="Manual Location"
          onSelect={() => setLocationType("manual")}
        />
      </div>

      {locationType === "gps" && (
        <GPSLocation
          setLocationType={setLocationType}
          geoLocation={geoLocation}
          setGeoLocation={setGeoLocation}
        />
      )}

      {locationType === "manual" && (
        <Address address={manualLocation} setAddress={setManualLocation} />
      )}
    </>
  );
}

export default CurrentLocation;
