/* eslint-disable react/prop-types */
import 'cropperjs/dist/cropper.css';
import { createRef, useState } from 'react';
import dp from '../../../assets/default.jpg';
import { Avatar, EditAvatar, ResizeAvatar } from '../index';

// eslint-disable-next-line react/prop-types
export default function Showcase({ name, id, vehicle, vehicleImage }) {
  const [image, setImage] = useState('#');
  const [cropData, setCropData] = useState('#');
  const [edit, setEdit] = useState(false);
  const [resize, setResize] = useState(false);

  const cropperRef = createRef();

  const onFileChoose = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);

    setEdit(false);
    setResize(true);
  };

  const removeImage = () => {
    setImage('#');
    setCropData('#');
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const hideResize = () => {
    setResize(false);
  };

  const showResize = () => {
    setResize(true);
    setEdit(false);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <>
      {
        <EditAvatar
          onFileChoose={onFileChoose}
          handleEdit={handleEdit}
          edit={edit}
          showResize={showResize}
          removeImage={removeImage}
          cropData={cropData}
        />
      }
      {
        <ResizeAvatar
          hideResize={hideResize}
          resize={resize}
          image={image}
          getCropData={getCropData}
          ref={cropperRef}
        />
      }
      <div className='flex items-center gap-5'>
        <Avatar
          className='w-32 min-[400px]:w-40'
          image={dp}
          edit
          handleEdit={handleEdit}
          cropData={cropData}
        />

        <div>
          <h3 className='text-2xl mb-1'>{name}</h3>

          <span className='text-gray-500 border border-grey-500 rounded-lg px-3 font-inter mb-4 inline-block'>
            #{id}
          </span>

          <div className='relative bg-gradient-to-b from-[#6BFFDA] to-[#00E1A9] pl-4 pr-10 min-[400px]:pr-12 min-[500px]:pr-16 py-3 rounded-full text-xs min-[500px]:text-base w-fit'>
            <span>{vehicle} রাইডার</span>
            <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16'>
              <img src={vehicleImage} alt={vehicle} className='w-full' />
            </div>
            <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-24 aspect-square rounded-full bg-secondary opacity-10 p-4 -z-20'></div>
            <div className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[76px] aspect-square rounded-full bg-secondary opacity-20 -z-10'></div>
          </div>
        </div>
      </div>
    </>
  );
}
