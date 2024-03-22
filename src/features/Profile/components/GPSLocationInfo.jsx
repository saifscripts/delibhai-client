import { CiLocationOn } from "react-icons/ci";
import map from "../../../assets/map.png";
import { InfoContainer } from "./InfoContainer";

export default function GPSLocationInfo() {
  return (
    <InfoContainer category="GPS Location">
      <div className="border-light text-medium mb-3 flex items-center justify-center gap-2 rounded-md border p-3">
        <CiLocationOn />
        <p>
          {"Heyako Bazar, Ramgarh Khagrachari Road, Fatikchhari, Chittagong, Bangladesh".slice(
            0,
            30,
          ) + " . . ."}
        </p>
      </div>
      <div className="border-light rounded-md border">
        <img src={map} alt="Map" className="w-full" />
      </div>
    </InfoContainer>
  );
}
