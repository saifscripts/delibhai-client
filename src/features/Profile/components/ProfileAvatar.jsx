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
        className="absolute right-[5%] bottom-[5%] rounded-full bg-neutral w-[20%] aspect-square flex justify-center items-center"
      >
        <img src={camera} alt="Camera" />
      </button>
    );
  };

  return (
    <>
      <EditAvatarModal
        editModal={editModal}
        closeModal={() => setEditModal(false)}
      />

      <div className="relative">
        <Avatar className="w-32 min-[400px]:w-40" src={avatarURL} />
        <EditButton />
      </div>
    </>
  );
}
