import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import getSelectedAddress from "../../Profile/utils/getSelectedAddress";
import restoreAddressState from "../../Profile/utils/restoreAddressState";
import CurrentLocation from "./CurrentLocation";
import VehicleCategories from "./VehicleCategories";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function DHero() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const [currentLocation, setCurrentLocation] = useState(defaultAddressValue);
  // const [heros, setHeros] = useState([]);

  // const { fetchData } = useFetchData();
  const navigate = useNavigate();

  const handleSearch = () => {
    const { division, district, upazila, union } =
      getSelectedAddress(currentLocation);

    navigate(
      `/search?vehicle=${vehicleType}&division=${division}&district=${district}&upazila=${upazila}&union=${union}`,
    );
  };

  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));
    if (searchParams) {
      const { vehicle, ...address } = searchParams;
      setVehicleType(vehicle);
      setCurrentLocation(restoreAddressState(address));
    }
  }, []);

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
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
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
