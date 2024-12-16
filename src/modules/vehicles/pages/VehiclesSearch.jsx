import Ads from "../../../components/ads";
import GPSLocation from "../components/gps-location";
import VehicleType from "../components/vehicle-type";

export default function VehiclesSearch() {
  return (
    <div className="relative space-y-1.5 bg-muted dark:bg-black sm:space-y-3">
      <GPSLocation />
      <VehicleType />
      <Ads />
    </div>
  );
}
