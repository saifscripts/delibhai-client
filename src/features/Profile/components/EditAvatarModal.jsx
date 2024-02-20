import { useRef, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import setCanvasPreview from "../utils/setCanvasPreview";
import { EditOption } from "./EditOption";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

export const EditAvatarModal = ({ modalOpen, closeModal, setPhotoURL }) => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState();
  const [resizeModal, setResizeModal] = useState(false);
  const [error, setError] = useState("");

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
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels");
          return setImageSrc("");
        }
      });

      setImageSrc(imageURL);
      closeModal();
      setResizeModal(true);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const _crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(_crop, width, height);
    setCrop(crop || centeredCrop);
  };

  if (resizeModal) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20">
        <div className="mx-4 bg-white p-4 rounded-md">
          {imageSrc && (
            <div className="flex flex-col justify-center items-center gap-5">
              <ReactCrop
                crop={crop}
                // circularCrop
                keepSelection
                aspect={ASPECT_RATIO}
                minWidth={MIN_DIMENSION}
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
              >
                <img
                  ref={imageRef}
                  src={imageSrc}
                  crossOrigin="anonymous"
                  alt="Image Upload"
                  style={{
                    maxHeight: "70vh",
                  }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
              <div>
                <button
                  className="bg-primary px-3 py-1 rounded-md text-white"
                  onClick={() => setResizeModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary px-3 py-1 rounded-md text-white"
                  onClick={() => {
                    setCanvasPreview(
                      imageRef.current,
                      canvasRef.current,
                      convertToPixelCrop(
                        crop,
                        imageRef.current.width,
                        imageRef.current.height
                      )
                    );
                    const dataURL = canvasRef.current.toDataURL();
                    setPhotoURL(dataURL);
                    setResizeModal(false);
                  }}
                >
                  Crop Image
                </button>
              </div>
              {crop && (
                <canvas
                  ref={canvasRef}
                  style={{
                    display: "none",
                    border: "1px solid black",
                    objectFit: "contain",
                    width: 200,
                    height: 200,
                  }}
                />
              )}
            </div>
          )}
          {error && <p className="text-red-400 text-center py-2">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={closeModal}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          modalOpen ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl transition-transform ${
          modalOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`w-10 h-1 bg-accent rounded-full mx-auto mt-2`}></div>
        <div className="py-7 flex flex-col gap-2">
          <EditOption
            icon={<GiResize />}
            text="ছবি রিসাইজ"
            type="button"
            onClick={() => {
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
