import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { useEffect } from 'react';
// import camera from '../assets/icons/camera.svg';


// eslint-disable-next-line react/prop-types
export default function VehiclePhoto({ url, urls, setUrls, index, deleteBtn, setDeleteBtn }) {
  useEffect(() => {
    const hideDeleteBtn = () => {
      setDeleteBtn(-1)
    }

    window.addEventListener('click', hideDeleteBtn)

    return () => {
      window.removeEventListener('click', hideDeleteBtn)
    }
  }, [setDeleteBtn])

  const removePhoto = () => {
    const clonedUrls = [...urls];
    clonedUrls.splice(index, 1);
    setUrls(clonedUrls)
  }

  const showDeleteBtn = (e) => {
    e.stopPropagation();

    setDeleteBtn(index);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`relative group flex flex-col flex-shrink-0 justify-center items-center w-28 aspect-square p-1 bg-center bg-contain bg-no-repeat rounded-md overflow-hidden`}>
      {/* <div className='absolute top-0 bottom-0 left-0 right-0 bg-black z-10 bg-opacity-40 hidden group-hover:flex group-active:flex justify-center items-center'>
        <img src={camera} alt='Camera' />
      </div> */}
      <BsThreeDotsVertical className='absolute right-0 top-0' onClick={showDeleteBtn} />
      <button onClick={removePhoto} className={`absolute right-4 top-0 bg-white px-3 py-1 rounded-lg ${deleteBtn === index ? 'flex': 'hidden'} gap-3 items-center shadow-lg`}>
        <span className='text-sm'>ডিলিট</span>
        <span className="p-1 rounded-full bg-neutral">{<AiFillDelete />}</span>
      </button>
    </div>
  );
}
