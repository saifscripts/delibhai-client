/* eslint-disable react/prop-types */
import "cropperjs/dist/cropper.css";
import { forwardRef } from "react";
import Cropper from "react-cropper";
import PrimaryButton from "../../../components/ui/PrimaryButton";

let ResizeAvatar = ({ hideResize, resize, image, getCropData }, ref) => {
  return (
    <>
      <div
        onClick={hideResize}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          resize ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>

      <div
        onClick={hideResize}
        className={`top-0 bottom-0 left-0 right-0 justify-center z-40 items-center ${
          resize ? "fixed flex" : "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-white w-full mx-6 my-auto p-3 z-50 ${
            resize ? "block" : "hidden"
          }`}
        >
          <Cropper
            ref={ref}
            // style={{ height: 400, width: '100%' }}
            aspectRatio={1}
            src={image}
            viewMode={3}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            checkOrientation={false}
            guides={false}
          />

          <div className="w-fit mx-auto flex gap-3 mt-6 mb-3">
            <PrimaryButton
              className="bg-[#eee] text-accent text-sm"
              value="বাতিল"
              onClick={hideResize}
            />

            <PrimaryButton
              className="text-sm"
              value="সেইভ"
              onClick={() => {
                hideResize();
                getCropData();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ResizeAvatar = forwardRef(ResizeAvatar);
export { ResizeAvatar };
