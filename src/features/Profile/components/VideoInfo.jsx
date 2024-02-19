import ReactPlayer from "react-player";
import { InfoContainer } from "./InfoContainer";

export function VideoInfo({ videoURL }) {
  return (
    <InfoContainer
      category="ডিহিরোর অভিব্যক্তি"
      editRoute="/profile/edit/video"
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
