import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillCamera } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../../lib/api";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";
import EditOption from "./EditOption";
import ResizeModal from "./ResizeModal";

const MIN_DIMENSION = 150;

export default function EditAvatarModal({ editModal, setEditModal }) {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [resizeModal, setResizeModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

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
      setResizeModal(true);
    });
    reader.readAsDataURL(file);
  };

  const onResize = () => {
    setImageSrc(user?.avatarSrcURL);
    setCrop(user?.avatarCropData);
    setEditModal(false);
    setResizeModal(true);
  };

  const onDelete = async () => {
    const fields = { avatarURL: 1, avatarSrcURL: 1, avatarCropData: 1 };

    const data = await updateData(`/v1/user/remove-fields/${user._id}`, fields);

    if (data?.success) {
      dispatch(
        setUser({
          user: data.data,
        }),
      );
      setEditModal(false);
    }
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

      {/* Dark overlay */}
      <div
        onClick={() => setEditModal(false)}
        className={`inset-0 z-40  bg-black  transition-opacity ${
          editModal ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>

      {/* Panel sliding from the bottom */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[99999] rounded-t-xl bg-white transition-transform ${
          editModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`mx-auto mt-2 h-1 w-10 rounded-full bg-accent`}></div>
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
                onClick={onDelete}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
