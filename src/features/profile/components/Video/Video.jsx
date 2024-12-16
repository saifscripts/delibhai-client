import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useUser } from "../../../../hooks/user.hook";

export default function Video() {
  const { id } = useParams();
  const { user } = useUser(id);

  if (user?.videoURL) {
    return (
      <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-black">
        <ReactPlayer loop url={user.videoURL} />
      </div>
    );
  }

  return (
    <p className="text-center text-2xl text-destructive">ভিডিও আপডেট করুন</p>
  );
}
