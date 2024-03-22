import { useState } from "react";
import camera from "../assets/icons/camera.svg";
import { Avatar } from "./Avatar";
import { EditAvatarModal } from "./EditAvatarModal";

export default function ProfileAvatar({ avatarURL }) {
  const [editModal, setEditModal] = useState(false);

  const EditButton = () => {
    return (
      <button
        onClick={() => setEditModal(true)}
        className="absolute bottom-[5%] right-[5%] flex aspect-square w-[20%] items-center justify-center rounded-full bg-neutral"
      >
        <img src={camera} alt="Camera" />
      </button>
    );
  };

  return (
    <>
      <EditAvatarModal editModal={editModal} setEditModal={setEditModal} />

      <div className="relative">
        <Avatar className="w-32 min-[400px]:w-40" src={avatarURL} />
        <EditButton />
      </div>
    </>
  );
}
