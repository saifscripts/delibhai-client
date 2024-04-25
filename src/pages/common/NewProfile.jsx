// others
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../../features/ProfileHeader";
import MiniContainer from "../../layouts/MiniContainer";
import useUserInfo from "./useUserInfo";

export default function NewProfile() {
  const { id } = useParams();
  const { isLoading, userInfo } = useUserInfo(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <MiniContainer>
      <ProfileHeader userInfo={userInfo} />
    </MiniContainer>
  );
}
