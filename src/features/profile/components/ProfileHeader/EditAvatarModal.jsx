import { useEffect, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "react-image-crop/dist/ReactCrop.css";
import { toast } from "sonner";
import { useMe } from "../../../../hooks/auth.hook";
import { useRemoveAvatar } from "../../../../hooks/user.hook";
import EditOption from "./EditOption";
import ResizeModal from "./ResizeModal";

const MIN_DIMENSION = 150;

export default function EditAvatarModal({ editModal, setEditModal }) {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [resizeModal, setResizeModal] = useState(false);
  const { user } = useMe();

  const {
    mutate: removeAvatar,
    data: updatedUser,
    isPending,
    isSuccess,
  } = useRemoveAvatar();

  const onSelectFile = (e) => {
    setCrop(null);
    const file = e.target.files?.[0];
    if (!file) return;
    setEditModal(false);

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageURL = reader.result?.toString() || "";
      imageElement.src = imageURL;

      imageElement.addEventListener("load", (e) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          toast.error("Image must be at least 150 x 150 pixels");
          setResizeModal(false);
          return setImageSrc("");
        }
      });

      setImageSrc(imageURL);
      setResizeModal(true);
    });
    reader.readAsDataURL(file);
  };

  const onResize = () => {
    setImageSrc(user?.avatarOriginURL);
    setCrop(user?.avatarCropData);
    setEditModal(false);
    setResizeModal(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess && updatedUser?.success) {
      setEditModal(false);
    }
  }, [isPending, isSuccess, updatedUser, setEditModal]);

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

      {/* Dark overlay */}
      <div
        onClick={() => setEditModal(false)}
        className={`inset-0 z-40  bg-black  transition-opacity ${
          editModal ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>

      {/* Panel sliding from the bottom */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[99999] rounded-t-xl bg-muted transition-transform ${
          editModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className={`mx-auto mt-2 h-1 w-10 rounded-full bg-muted-foreground`}
        ></div>
        <div className="flex flex-col gap-2 py-7">
          <EditOption
            icon={<AiFillCamera />}
            text="ছবি আপলোড"
            type="file"
            onChange={onSelectFile}
            onClick={(e) => (e.target.value = null)}
          />
          {user?.avatarURL && (
            <>
              <EditOption
                icon={<GiResize />}
                text="ছবি রিসাইজ"
                type="button"
                onClick={onResize}
              />
              <EditOption
                icon={<RiDeleteBin5Fill />}
                text="ছবি ডিলিট করুন"
                type="button"
                onClick={removeAvatar}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
