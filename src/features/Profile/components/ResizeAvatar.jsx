/* eslint-disable react/prop-types */
import 'cropperjs/dist/cropper.css';
import { useRef } from 'react';
import Cropper from 'react-cropper';

export default function ResizeAvatar({ handleResize, resize, image }) {
  const cropperRef = useRef(null);

  return (
    <>
      <div
        onClick={handleResize}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          resize ? 'fixed opacity-40' : 'hidden opacity-0'
        }`}></div>

      <div
        onClick={handleResize}
        className={`top-0 bottom-0 left-0 right-0 justify-center z-40 items-center ${
          resize ? 'fixed flex' : 'hidden'
        }`}>
        <div
          className={`relative bg-white w-full mx-6 my-auto p-3 z-50 ${
            resize ? 'block' : 'hidden'
          }`}>
          <Cropper
            ref={cropperRef}
            // style={{ height: 400, width: '100%' }}
            // zoomTo={0.5}
            aspectRatio={1}
            src={image}
            viewMode={3}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            // autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          />
        </div>
      </div>
    </>
  );
}
