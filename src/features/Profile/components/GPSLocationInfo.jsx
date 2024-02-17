import { CiLocationOn } from "react-icons/ci";
import map from "../../../assets/map.png";
import { InfoContainer } from "./InfoContainer";

export default function GPSLocationInfo() {
  return (
    <InfoContainer type="GPS Location">
      <div className="p-3 flex justify-center items-center gap-2 border border-light rounded-md mb-3 text-medium">
        <CiLocationOn />
        <p>
          {"Heyako Bazar, Ramgarh Khagrachari Road, Fatikchhari, Chittagong, Bangladesh".slice(
            0,
            30
          ) + " . . ."}
        </p>
      </div>
      <div className="border border-light rounded-md">
        <img src={map} alt="Map" className="w-full" />
      </div>
    </InfoContainer>
  );
}
