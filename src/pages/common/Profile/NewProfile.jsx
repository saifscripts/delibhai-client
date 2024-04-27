// others
import { Outlet, useParams } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import { ProfileHeader } from "../../../features/ProfileHeader";
import { ProfileMenu } from "../../../features/ProfileMenu";
import MiniContainer from "../../../layouts/MiniContainer";
import useUserInfo from "./useUserInfo";

export default function NewProfile() {
  const { id } = useParams();
  const { isLoading, userInfo } = useUserInfo(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <UserContext.Provider value={{ isLoading, userInfo }}>
      <MiniContainer>
        <ProfileHeader />
        <ProfileMenu />
        <Outlet />
      </MiniContainer>
    </UserContext.Provider>
  );
}
