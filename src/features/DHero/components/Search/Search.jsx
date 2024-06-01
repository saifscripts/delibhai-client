import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import MiniContainer from "../../../../layouts/MiniContainer";
import Destination from "./Destination";
import GPSLocation from "./GPSLocation";
import VehicleCategories from "./VehicleCategories";

export default function Search() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const [locationType, setLocationType] = useState("gps");
  const [geoLocation, setGeoLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  // restore states from the local storage
  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));

    if (searchParams) {
      const { vehicleType, locationType, manualLocation, destination } =
        searchParams;

      setVehicleType(vehicleType);
      setLocationType(locationType);
      setManualLocation(manualLocation);
      setDestination(destination);
    }
  }, []);

  const handleSearch = () => {
    // combine all states as searchParams obj
    const searchParams = {
      vehicleType,
      locationType,
      geoLocation,
      manualLocation,
      destination,
    };

    localStorage.setItem("heroSearchParams", JSON.stringify(searchParams));

    navigate(
      `search?vehicle=${vehicleType}&location=${locationType}&lat=${geoLocation?.latitude}&long=${geoLocation?.longitude}&cVil=${manualLocation?.village?._id}&dVil=${destination?.village?._id}`,
    );
  };

  return (
    <div className="relative min-h-screen">
      <MiniContainer>
        <h2 className="pt-4 text-2xl font-semibold">গাড়ির ধরণ</h2>

        <VehicleCategories
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
        />

        <h2 className="mb-4 mt-8 text-2xl font-semibold">আপনার লোকেশন</h2>
        <GPSLocation
          geoLocation={geoLocation}
          setGeoLocation={setGeoLocation}
        />

        <Destination
          destination={destination}
          setDestination={setDestination}
        />

        <Button
          type="submit"
          value="Search"
          icon={<BiSearchAlt />}
          onClick={handleSearch}
        />
      </MiniContainer>
    </div>
  );
}
