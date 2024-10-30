import { useParams } from "react-router-dom";
import Map from "../../../../components/Map";
import { useUser } from "../../../../hooks/user.hook";

export default function ManualLocation() {
  const { id } = useParams();
  const { user } = useUser(id);

  return <Map geoLocation={user?.manualLocation} />;
}
