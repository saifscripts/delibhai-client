import { useContext } from "react";
import Map from "../../../../components/Map";
import UserContext from "../../contexts/UserContext";

export default function ManualLocation() {
  const { userInfo } = useContext(UserContext);

  return <Map geoLocation={userInfo?.manualLocation} />;
}
