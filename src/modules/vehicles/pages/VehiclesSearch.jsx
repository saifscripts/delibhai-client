import Ads from "../../../components/ads";
import GPSLocation from "../components/gps-location";
import VehicleType from "../components/vehicle-type";

export default function VehiclesSearch() {
  return (
    <div className="relative min-h-screen space-y-2 bg-gray-200 sm:space-y-4">
      <GPSLocation />
      <VehicleType />
      <Ads />
    </div>
  );
}
