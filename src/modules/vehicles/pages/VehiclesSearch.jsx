import Ads from "../../../components/ads";
import GPSLocation from "../components/gps-location";
import VehicleType from "../components/vehicle-type";

export default function VehiclesSearch() {
  return (
    <div className="relative space-y-[6px] bg-gray-200 sm:space-y-3">
      <GPSLocation />
      <VehicleType />
      <Ads />
    </div>
  );
}
