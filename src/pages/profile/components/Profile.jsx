// others
import { Outlet, useParams } from "react-router-dom";
import Skeleton from "../../../components/Skeleton";
import MiniContainer from "../../../layouts/MiniContainer";
import UserContext from "../contexts/UserContext";
import { ProfileHeader } from "../features/ProfileHeader";
import { ProfileMenu } from "../features/ProfileMenu";
import useUserInfo from "../hooks/useUserInfo";

export default function Profile() {
  const { id } = useParams();
  const userInfo = useUserInfo(id);

  if (userInfo?.isLoading) {
    return (
      <MiniContainer>
        <Skeleton />;
      </MiniContainer>
    );
  }

  if (!userInfo?.userInfo) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "User not found!",
    });
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
