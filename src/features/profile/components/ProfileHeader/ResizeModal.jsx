import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import { useUpdateData } from "../../../../api/api";
import base64ToFormData from "../../../../utils/base64ToFormData";
import { useAuth } from "../../../Authentication/contexts/AuthContext";
import getCroppedData from "../../utils/getCroppedData";

const ASPECT_RATIO = 1;

export default function ResizeModal({
  imageSrc,
  crop,
  setCrop,
  setResizeModal,
  MIN_DIMENSION,
}) {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateData } = useUpdateData();
  const { currentUser, setCurrentUser } = useAuth();
  const saveButtonRef = useRef(null);

  const onImageLoad = (e) => {
    if (crop) return;

    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const _crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height,
    );

    const centeredCrop = centerCrop(_crop, width, height);
    setCrop(centeredCrop);
  };

  const handleCrop = async () => {
    const dataURL = getCroppedData(
      imageRef.current,
      convertToPixelCrop(crop, imageRef.current.width, imageRef.current.height),
    );

    const promises = [];

    promises[0] = axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      base64ToFormData(dataURL),
    );

    if (imageSrc.startsWith("data:image/")) {
      promises[1] = axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        base64ToFormData(imageSrc),
      );
    }

    const response = await Promise.all(promises);

    if (response[0].status !== 200) return;

    const avatarData = {
      avatarURL: response[0]?.data?.data?.url,
      avatarSrcURL: response[1]?.data?.data?.url,
      avatarCropData: crop,
    };

    const { data } = await updateData(
      `/v1/user/${currentUser._id}`,
      avatarData,
    );

    if (data?.success) {
      setCurrentUser(data.data);
      setResizeModal(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.key === "Enter") {
        saveButtonRef?.current?.click();
      }
    };

    window.addEventListener("keypress", handleEnterPress);

    return () => window.removeEventListener("keypress", handleEnterPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black bg-opacity-20"
      onKeyDown={(e) => {
        console.log(e.key);
      }}
    >
      <div className="mx-4 rounded-md bg-white p-4">
        {imageSrc && (
          <div className="flex flex-col items-center justify-center gap-5">
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
            <div className="space-x-3">
              <button
                className="rounded-md border border-accent px-3 py-1 text-accent"
                onClick={() => setResizeModal(false)}
              >
                বাতিল
              </button>
              <button
                ref={saveButtonRef}
                disabled={isLoading}
                className={`rounded-md px-3 py-1 text-white ${
                  isLoading ? "bg-gray-500" : "bg-primary"
                }`}
                onClick={() => {
                  setIsLoading(true);
                  handleCrop();
                }}
              >
                সেইভ করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
