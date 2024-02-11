import { cloneDeep } from "lodash";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../contexts/AuthContext";

export const VehiclePhoto = ({ url, index, deleteBtn, setDeleteBtn }) => {
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const hideDeleteBtn = () => {
      setDeleteBtn(-1);
    };

    window.addEventListener("click", hideDeleteBtn);

    return () => {
      window.removeEventListener("click", hideDeleteBtn);
    };
  }, [setDeleteBtn]);

  const removePhoto = () => {
    const _currentUser = cloneDeep(currentUser);
    const photos = [..._currentUser.vehiclePhotos];
    photos.splice(index, 1);
    setCurrentUser({ ..._currentUser, vehiclePhotos: photos });
  };

  const showDeleteBtn = (e) => {
    e.stopPropagation();

    setDeleteBtn(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`relative flex flex-col flex-shrink-0 justify-center items-center w-28 aspect-square p-1 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden`}
    >
      <BsThreeDotsVertical
        className="absolute right-0 top-0"
        onClick={showDeleteBtn}
      />
      <button
        onClick={removePhoto}
        className={`absolute right-4 top-0 bg-white px-3 py-1 rounded-lg ${
          deleteBtn === index ? "flex" : "hidden"
        } gap-3 items-center shadow-lg`}
      >
        <span className="text-sm">ডিলিট</span>
        <span className="p-1 rounded-full bg-neutral">{<AiFillDelete />}</span>
      </button>
    </div>
  );
};
