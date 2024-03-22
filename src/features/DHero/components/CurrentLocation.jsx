import { useState } from "react";
import { Address } from "../../Profile";
import GPSLocation from "./GPSLocation";
import SearchOption from "./SearchOption";

function CurrentLocation({ currentLocation, setCurrentLocation }) {
  const [activeOption, setActiveOption] = useState("gps");

  return (
    <>
      <h2 className="pt-4 text-2xl font-semibold">নিজ ঠিকানা</h2>

      <div className="mx-auto mb-8 w-fit">
        <SearchOption
          fill={activeOption === "gps"}
          text="GPS Location"
          onSelect={() => setActiveOption("gps")}
        />
        <SearchOption
          fill={activeOption === "manual"}
          text="Manual Location"
          onSelect={() => setActiveOption("manual")}
        />
      </div>

      {activeOption === "gps" && (
        <GPSLocation setActiveOption={setActiveOption} />
      )}

      {activeOption === "manual" && (
        <Address address={currentLocation} setAddress={setCurrentLocation} />
      )}
    </>
  );
}

export default CurrentLocation;
