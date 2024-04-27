// others
import { Outlet, useParams } from "react-router-dom";
import Skeleton from "../../../components/Skeleton";
import UserContext from "../../../contexts/UserContext";
import { ProfileHeader } from "../../../features/ProfileHeader";
import { ProfileMenu } from "../../../features/ProfileMenu";
import MiniContainer from "../../../layouts/MiniContainer";
import useUserInfo from "./useUserInfo";

export default function NewProfile() {
  const { id } = useParams();
  const userInfo = useUserInfo(id);

  if (userInfo?.isLoading) {
    return (
      <MiniContainer>
        <Skeleton />;
      </MiniContainer>
    );
  }

  return (
    <UserContext.Provider value={userInfo}>
      <MiniContainer>
        <ProfileHeader />
        <ProfileMenu />
        <Outlet />
      </MiniContainer>
    </UserContext.Provider>
  );
}
