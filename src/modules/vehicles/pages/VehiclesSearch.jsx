import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ads from "../../../components/ads";
import Button from "../../../components/ui/Button";
import { useGeolocation } from "../../../contexts/location.context";
import Container from "../../../layouts/Container";
import GPSLocation from "../components/gps-location";
import VehicleType from "../components/vehicle-type";

export default function VehiclesSearch() {
  const [vehicleType, setVehicleType] = useState("বাইক");
  const { location } = useGeolocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    // combine all states as searchParams obj
    const searchParams = new URLSearchParams();

    searchParams.set("vehicleType", vehicleType);
    searchParams.set("latitude", location.latitude);
    searchParams.set("longitude", location.longitude);

    navigate(`search?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-screen bg-gray-200">
      <GPSLocation />
      <VehicleType vehicleType={vehicleType} setVehicleType={setVehicleType} />

      {/* This Button Should be inside VehicleType component (To reduce markup) */}
      <section className="mb-2 bg-white pb-4 sm:mb-4 sm:pb-8">
        <Container>
          <div className="mx-auto max-w-xl px-2 tn:px-5">
            {/* Only the button should go inside VehicleType component */}
            <Button
              type="submit"
              value="সার্চ করুন"
              className="w-full max-w-none rounded-lg py-2"
              disabled={
                !vehicleType || !location?.latitude || !location?.longitude
              }
              onClick={handleSearch}
            />
          </div>
        </Container>
      </section>
      <Ads />
    </div>
  );
}
