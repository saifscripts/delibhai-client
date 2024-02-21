import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillCamera } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "react-image-crop/dist/ReactCrop.css";
import { useAuth } from "../../../contexts/AuthContext";
import { EditOption } from "./EditOption";
import ResizeModal from "./ResizeModal";

const MIN_DIMENSION = 150;

export const EditAvatarModal = ({ editModal, closeModal }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [resizeModal, setResizeModal] = useState(false);
  const { currentUser } = useAuth();

  const onSelectFile = (e) => {
    setCrop(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageURL = reader.result?.toString() || "";
      imageElement.src = imageURL;

      imageElement.addEventListener("load", (e) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          toast.error("Image must be at least 150 x 150 pixels", {
            duration: 4000,
            position: "top-center",
            style: {
              backgroundColor: "#efef8d",
            },
          });

          setResizeModal(false);
          return setImageSrc("");
        }
      });

      setImageSrc(imageURL);
      closeModal();
      setResizeModal(true);
    });
    reader.readAsDataURL(file);
  };

  return (
    <>
      {resizeModal && (
        <ResizeModal
          imageSrc={imageSrc}
          crop={crop}
          setCrop={setCrop}
          setResizeModal={setResizeModal}
          MIN_DIMENSION={MIN_DIMENSION}
        />
      )}

      <div
        onClick={closeModal}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          editModal ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl transition-transform ${
          editModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`w-10 h-1 bg-accent rounded-full mx-auto mt-2`}></div>
        <div className="py-7 flex flex-col gap-2">
          <EditOption
            icon={<GiResize />}
            text="ছবি রিসাইজ"
            type="button"
            onClick={() => {
              setImageSrc(currentUser?.avatarSrcURL);
              setCrop(currentUser?.avatarCropData);
              closeModal();
              setResizeModal(true);
            }}
          />
          <EditOption
            icon={<AiFillCamera />}
            text="ছবি আপলোড"
            type="file"
            onChange={onSelectFile}
            onClick={(e) => (e.target.value = null)}
          />
          <EditOption
            icon={<RiDeleteBin5Fill />}
            text="ছবি ডিলিট করুন"
            type="button"
          />
        </div>
      </div>
    </>
  );
};
