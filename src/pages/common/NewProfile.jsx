// others
import { useParams } from "react-router-dom";
import { useUserInfo } from "../../features/Profile";
import Showcase from "../../features/Profile/components/Showcase";
import MiniContainer from "../../layouts/MiniContainer";

export default function NewProfile() {
  const { id } = useParams();
  const { isLoading, userInfo } = useUserInfo(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MiniContainer>
      <Showcase userInfo={userInfo} />
    </MiniContainer>
  );
}
