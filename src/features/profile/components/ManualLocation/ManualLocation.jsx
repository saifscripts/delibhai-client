import { useParams } from 'react-router-dom';
import Map from '../../../../components/map';
import { useGetUser } from '../../../../hooks/user.hook';

export default function ManualLocation() {
  const { id } = useParams();
  const { user } = useGetUser(id);

  return <Map location={user?.manualLocation} />;
}
