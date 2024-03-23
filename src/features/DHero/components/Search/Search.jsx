import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import MiniContainer from "../../../../layouts/MiniContainer";
import Title from "../../../../layouts/Title";
import getSelectedAddress from "../../../Profile/utils/getSelectedAddress";
import restoreAddressState from "../../../Profile/utils/restoreAddressState";
import generateSearchString from "../../utils/generateSearchString";
import CurrentLocation from "./CurrentLocation";
import Destination from "./Destination";
import VehicleCategories from "./VehicleCategories";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function Search() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const [locationType, setLocationType] = useState("gps");
  const [geoLocation, setGeoLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState(defaultAddressValue);
  const [destination, setDestination] = useState(defaultAddressValue);
  const navigate = useNavigate();

  // restore states from the local storage
  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));

    if (searchParams) {
      const { vehicleType, locationType, manualLocation, destination } =
        searchParams;

      setVehicleType(vehicleType);
      setLocationType(locationType);
      setManualLocation(restoreAddressState(manualLocation));
      setDestination(restoreAddressState(destination));
    }
  }, []);

  const handleSearch = () => {
    // combine all states as searchParams obj
    const searchParams = {
      vehicleType,
      locationType,
      geoLocation,
      manualLocation: getSelectedAddress(manualLocation),
      destination: getSelectedAddress(destination),
    };

    localStorage.setItem("heroSearchParams", JSON.stringify(searchParams));
    let searchString = generateSearchString(searchParams);

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
          manualLocation={manualLocation}
          geoLocation={geoLocation}
          setLocationType={setLocationType}
          setManualLocation={setManualLocation}
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
