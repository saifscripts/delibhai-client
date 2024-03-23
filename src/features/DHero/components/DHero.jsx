import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import getSelectedAddress from "../../Profile/utils/getSelectedAddress";
import restoreAddressState from "../../Profile/utils/restoreAddressState";
import generateSearchString from "../utils/generateSearchString";
import CurrentLocation from "./CurrentLocation";
import Destination from "./Destination";
import VehicleCategories from "./VehicleCategories";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function DHero() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const [locationType, setLocationType] = useState("gps");
  const [currentLocation, setCurrentLocation] = useState(defaultAddressValue);
  const [geoLocation, setGeoLocation] = useState(null);
  const [destination, setDestination] = useState(defaultAddressValue);
  const navigate = useNavigate();

  // RESTORE STATES FROM THE LOCAL STORAGE
  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));

    if (searchParams) {
      const { vehicleType, locationType, currentLocation, destination } =
        searchParams;

      setVehicleType(vehicleType);
      setLocationType(locationType);
      setCurrentLocation(restoreAddressState(currentLocation));
      setDestination(restoreAddressState(destination));
    }
  }, []);

  const handleSearch = () => {
    const searchParams = {
      vehicleType,
      locationType,
      geoLocation,
      currentLocation: getSelectedAddress(currentLocation),
      destination: getSelectedAddress(destination),
    };

    let searchString = generateSearchString(searchParams);
    localStorage.setItem("heroSearchParams", JSON.stringify(searchParams));
    navigate(`/search?${searchString}`);
  };

  return (
    <div className="relative min-h-screen">
      <MiniContainer>
        <Title title="ডেলিভাই হিরো" />
        <h2 className="pt-4 text-2xl font-semibold">গাড়ির ধরণ</h2>

        <VehicleCategories
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
        />

        <CurrentLocation
          locationType={locationType}
          currentLocation={currentLocation}
          geoLocation={geoLocation}
          setLocationType={setLocationType}
          setCurrentLocation={setCurrentLocation}
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
