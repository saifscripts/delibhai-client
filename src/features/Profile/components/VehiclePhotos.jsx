import { useEffect } from 'react';
import { useState } from 'react';
import { VehiclePhoto } from '../index';
import camera from '../assets/icons/camera.svg';


// eslint-disable-next-line react/prop-types
export default function VehiclePhotos({ photos = [] }) {
  const [urls, setUrls] = useState([])
  const [deleteBtn, setDeleteBtn] = useState(-1);


  useEffect(()=>{
    setUrls(photos)
  },[photos])

  return (
    <div>
      <div className='overflow-y-hidden mb-6'>
        <div className='flex gap-2 overflow-x-scroll pb-5 -mb-5'>
          {urls.map((url, index) => (
            <VehiclePhoto url={url} key={index} index={index} deleteBtn={deleteBtn} setDeleteBtn={setDeleteBtn} urls={urls} setUrls={setUrls} />
          ))}
          <div type='file' className='relative bg-accent z-10 w-28 aspect-square rounded-lg flex justify-center items-center'>
            <img src={camera} alt='Camera' />
            <input type="file" className='absolute top-0 bottom-0 right-0 left-0 z-20 opacity-0' />
          </div>
        </div>
        
      </div>
    </div>
  );
}
