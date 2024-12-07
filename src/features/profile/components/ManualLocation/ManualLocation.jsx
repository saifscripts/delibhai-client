import { useParams } from "react-router-dom";
import Map from "../../../../components/map";
import { useUser } from "../../../../hooks/user.hook";

export default function ManualLocation() {
  const { id } = useParams();
  const { user } = useUser(id);

  return <Map location={user?.manualLocation} />;
}
