import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import { useGeolocation } from "../../../../contexts/location.context";
import MiniContainer from "../../../../layouts/MiniContainer";
import GPSLocation from "./GPSLocation";
import VehicleCategories from "./VehicleCategories";

export default function Search() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const { location } = useGeolocation();
  //   const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  // restore states from the local storage
  //   useEffect(() => {
  //     const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));

  //     if (searchParams) {
  //       const { vehicleType, destination } = searchParams;
  //       setVehicleType(vehicleType);
  //       setDestination(destination);
  //     }
  //   }, []);

  const handleSearch = () => {
    // combine all states as searchParams obj
    const searchParams = new URLSearchParams();

    searchParams.set("vehicleType", vehicleType);
    searchParams.set("latitude", location.latitude);
    searchParams.set("longitude", location.longitude);

    // localStorage.setItem("heroSearchParams", JSON.stringify(searchParams));

    navigate(`search?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-screen">
      <MiniContainer>
        <h2 className="pt-4 text-2xl font-semibold">গাড়ির ধরণ</h2>

        <VehicleCategories
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
        />

        <GPSLocation />

        {/* <Destination
          destination={destination}
          setDestination={setDestination}
        /> */}

        <Button
          type="submit"
          value="সার্চ করুন"
          icon={<BiSearchAlt />}
          onClick={handleSearch}
        />
      </MiniContainer>
    </div>
  );
}
