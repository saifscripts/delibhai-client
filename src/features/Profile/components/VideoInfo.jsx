import ReactPlayer from "react-player";
import { useAuth } from "../../Authentication/contexts/AuthContext";
import InfoContainer from "./InfoContainer";

export default function VideoInfo({ userId, videoURL }) {
  const { currentUser } = useAuth();

  return (
    <InfoContainer
      category="ডিহিরোর অভিব্যক্তি"
      editRoute={userId === currentUser?._id && "/profile/edit/video"}
    >
      {videoURL ? (
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-black">
          <ReactPlayer loop url={videoURL} />
        </div>
      ) : (
        <p className="text-center text-2xl text-red-400">ভিডিও আপডেট করুন</p>
      )}
    </InfoContainer>
  );
}
