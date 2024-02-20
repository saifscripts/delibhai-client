import { useRef } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "../utils/setCanvasPreview";

const ASPECT_RATIO = 1;

export default function ResizeModal({
  imageSrc,
  crop,
  setCrop,
  setResizeModal,
  setPhotoURL,
  MIN_DIMENSION,
}) {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

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
              onChange={(pixelCrop, percentCrop) => {
                console.log(percentCrop);
                setCrop(percentCrop);
              }}
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
      </div>
    </div>
  );
}
