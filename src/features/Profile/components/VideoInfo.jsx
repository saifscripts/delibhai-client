import ReactPlayer from "react-player";
import { useAuth } from "../../../contexts/AuthContext";
import { InfoContainer } from "./InfoContainer";

export function VideoInfo({ userId, videoURL }) {
  const { currentUser } = useAuth();

  return (
    <InfoContainer
      category="ডিহিরোর অভিব্যক্তি"
      editRoute={userId === currentUser?._id && "/profile/edit/video"}
    >
      {videoURL ? (
        <div className="w-full bg-black flex justify-center items-center rounded-lg overflow-hidden">
          <ReactPlayer loop url={videoURL} />
        </div>
      ) : (
        <p className="text-red-400 text-center text-2xl">ভিডিও আপডেট করুন</p>
      )}
    </InfoContainer>
  );
}
