import { useContext } from "react";
import ReactPlayer from "react-player";
import UserContext from "../../contexts/UserContext";

export default function Video() {
  const { userInfo } = useContext(UserContext);

  if (userInfo?.videoURL) {
    return (
      <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-black">
        <ReactPlayer loop url={userInfo.videoURL} />
      </div>
    );
  }

  return <p className="text-center text-2xl text-red-400">ভিডিও আপডেট করুন</p>;
}
