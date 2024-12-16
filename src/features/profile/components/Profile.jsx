// others
import { Outlet, useParams } from "react-router-dom";
import { useUser } from "../../../hooks/user.hook";
import MiniContainer from "../../../layouts/MiniContainer";
import { BottomPanel } from "./BottomPanel";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileMenu } from "./ProfileMenu";
import ProfileSkeleton from "./ProfileSkeleton";

export default function Profile() {
  const { id } = useParams();
  const { data: userData, isLoading } = useUser(id);
  const user = userData?.data;

  if (isLoading) {
    return (
      <MiniContainer>
        <ProfileSkeleton />
      </MiniContainer>
    );
  }

  if (!user) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "User not found!",
    });
  }

  return (
    <MiniContainer>
      <ProfileHeader />
      <ProfileMenu />
      <Outlet />
      <BottomPanel />
    </MiniContainer>
  );
}
